import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
// through this componenet we are going to see how to do dynamic routing

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async () => {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    // destructing of the array
    // restaurant details
    const { name, cuisines, avgRating, totalRatings, lastMileTravel, id } =
        resInfo.cards[0].card.card.info;

    const { itemCards } =
        resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

    return (
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li>
                        {item.card.info.name} -{" Rs."}
                        {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
