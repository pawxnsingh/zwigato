// case I :- when nothing inside the dependencies array => so it is going to called on every time header render
// case II :- when useEffect() has empty array on the second argument of the useEffect => then it is going to called only on the initial rendered of the componenet
// case III :- when we have any value inside the dependencies array => then it is going to be called only when the value updates
// useEffect(() => {
//     console.log("useEffect Called");
// },[btnClickReact]);
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assests/logo.png";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // we use useSelector hook to subscribe to a particular slice
    // const cartItem = useSelector((store) => store.cart.items);
    const cartItem = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between shadow-lg mb-6 ">
            <div className="ml-5 inline-block self-center">
                <img
                    className="w-[90px] items-center"
                    src={logo}
                    alt="burger logo"
                />
            </div>
            <div className="flex items-center justify-end w-4/6">
                <ul className="flex p-2 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart"> Cart-{cartItem.length}</Link>
                    </li>

                    <button
                        className="px-6"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;

// and you cant write two default export statement in the one componenet

// Yes, you can use both default exports and named exports together in a JavaScript module.
// Combining default and named exports can be useful when you want to export a "default" item that is
// considered the primary export of the module, along with other items that are not the main focus of
// the module but can still be accessed individually. Here's how it works:
// **Example**
// export const namedExport1 = "I'm a named export";
// export const namedExport2 = "I'm another named export";

// const defaultExport = "I'm the default export";
// export default defaultExport;

// In this example, we have a module named "module.js" that exports both
// a default export and named exports. You can import these exports in another module like this:

// import defaultExport, { namedExport1, namedExport2 } from './module';
// console.log(defaultExport); // "I'm the default export"
// console.log(namedExport1);  // "I'm a named export"
// console.log(namedExport2);  // "I'm another named export"

// By using both default and named exports in this way, you can provide a clear main export
// for your module while also making other functionalities or values available for import when needed.
