import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/cartSlice";
// this is useDispatch is a function

const ItemList = ({ itemCards }) => {
    // this is hook that is used by
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <ul>
            {itemCards.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex  p-2 py-4 border-gray-300 border-b-2 text-left"
                    >
                        <div className="flex flex-col space-y-1 w-9/12">
                            <span className="font-semibold">
                                {item.card.info.name}
                            </span>
                            <span>
                                ₹
                                {item.card.info.price / 100 ||
                                    item.card.info.defaultPrice / 100}
                            </span>
                            <div className="text-xs">
                                {item.card.info.description}
                            </div>
                        </div>
                        <div className="relative  w-3/12">
                            <div className="">
                                <button
                                    onClick={() => handleAddItem(item)}
                                    className="absolute text-green-700 bg-white px-7 py-1 rounded-lg -bottom-3 left-10  "
                                >
                                    ADD
                                </button>
                            </div>
                            <img
                                className=" object-cover w-full h-28 rounded-xl"
                                src={CDN_URL + item.card.info.imageId}
                            />
                        </div>
                    </div>
                );
            })}
        </ul>
    );
};
export default ItemList;
