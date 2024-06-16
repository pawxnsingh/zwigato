import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
    const { title, itemCards } = data;

    const clickHandle = () => {
        setShowIndex();
    };

    return (
        <div>
            <div
                className="w-7/12 m-auto px-4 py-5 bg-slate-200 shadow-lg mb-4 rounded-lg"
                onClick={clickHandle}
            >
                <div className="flex justify-between">
                    <span className="font-bold text-lg">
                        {title} ({itemCards.length})
                    </span>
                    <span>🔽</span>
                </div>
                {showItem && <ItemList itemCards={itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
