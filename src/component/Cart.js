import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/Redux/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
    // we have to subscribe here to the slice and render all the item as per the user demands
    // 
    const itemCart = useSelector((cartItem) => cartItem.cart.items);

    console.log(itemCart);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center">
            <h1 className="text-4xl font-extrabold">CART</h1>
            <br />
            <button
                onClick={handleClearCart}
                className="bg-green-900 text-white uppercase px-3 py-2 rounded-xl"
            >
                Clear Cart
            </button>

            <div className="w-6/12 m-auto my-5 border">
                {itemCart.length === 0 ? (
                    <h1 className="font-bold text-xl">Please Add Something to the Cart 🛒</h1>
                ) : (
                    <ItemList itemCards={itemCart} />
                )}
            </div>
        </div>
    );
};
export default Cart;
