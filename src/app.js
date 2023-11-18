import React from "react";
import ReactDOM from "react-dom/client";

import Header from "../src/component/Header";
import Body from "../src/component/Body";
import About from "../src/component/About";
import Contact from "../src/component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./app.css";

// this is the root level part of the project and we have to create out router here

const App = () => {
    return (
        <div className="app">
            <Header />
            {/* outlet is will get replaced by the createBrowserRouter's Children,according to their respective path 
                and it act as placeholder */}
            {/* Route Nesting: When you define a route component, you can use <Outlet>
                 within it to specify where the child components of that route should be rendered. */}
            <Outlet />
        </div>
    );
};

// this thing is also given in the react-router-dom docs
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        // and this will load the <Error /> page in the ui with the Header
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
