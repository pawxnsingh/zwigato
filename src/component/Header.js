import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnClickReact, setbtnClickReact] = useState("Login");

    // case I :- when nothing inside the dependencies array => so it is going to called on every time header render
    // case II :- when useEffect() has empty array on the second argument of the useEffect => then it is going to called only on the initial rendered of the componenet
    // case III :- when we have any value inside the dependencies array => then it is going to be called only when the value updates
    // useEffect(() => {
    //     console.log("useEffect Called");
    // },[btnClickReact]);

    return (
        <div className="header">
            {console.log("Header Called")}
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* never-ever use the anchor tag to navigate our route cuz this will reload the entire page */}

                    <li>
                        {/* <a href="/about">About Us</a> */}
                        <Link to="/about">About Us</Link>
                        {/* instead we will be using the "Link" tag  */}
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>Cart</li>
                    
                    <button
                        className="button"
                        onClick={() => {
                            btnClickReact === "Login"
                                ? setbtnClickReact("Logout")
                                : setbtnClickReact("Login");
                        }}
                    >
                        {btnClickReact}
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
