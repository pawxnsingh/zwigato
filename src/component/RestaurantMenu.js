import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import { useState } from "react";

// through this componenet we are going to see how to do dynamic routing

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.data.cards[2]?.card?.card?.info ||
        resInfo?.data.cards[0]?.card?.card?.info;

    // console.log(resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

    const allMenu =
        resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    const itemCategory = allMenu.filter((item) => {
        return (
            item.card.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    });

    // console.log(itemCategory);

    return (
        <div className="text-center">
            <h1 className="uppercase font-bold py-1 bg-slate-300 text-2xl mb-6">
                {name} - {costForTwoMessage}
            </h1>
            {/* here we will have the categories */}
            <div className="self-center ">
                {itemCategory.map((item, index) => {
                    return (
                        <div key={index}>
                            <RestaurantCategory
                                data={item.card.card}
                                showItem={index === showIndex ? true : false}
                                setShowIndex={() => setShowIndex(index)}
                            />
                            {/* we have to lift the state up */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default RestaurantMenu;
