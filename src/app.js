import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
import UserContext from "./utils/UserContext";
import Footer from "./component/Footer";

// these two are the react thingy
// the reason why Provider is being imported from the react-redux
// cuz these provide the react and redux bridge
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";

// here we will import the whole different aspect of the code , suppose it has lot of component
const Grocery = lazy(() => import("./component/Grocery"));
// here “technique of splitting your code into various bundles which can then be loaded on demand or in parallel”.
const Grocery1 = lazy(() => import("./component/Grocery"));
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "../app.css";

// this is the root level part of the project and we have to create out router here

const App = () => {
  const [userName, setUserName] = useState();

  // authentication logic and
  useEffect(() => {
    // auth logic and make a backend call
    const data = {
      name: "pawan singh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          {/* outlet is will get replaced by the createBrowserRouter's Children,according to their respective path 
                and it act as placeholder */}
          {/* Route Nesting: When you define a route component, you can use <Outlet>
                 within it to specify where the child components of that route should be rendered. */}
          <Outlet />
          {/* <div className="absolute bottom-0 left-0 w-full">
                        <Footer />
                    </div> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        // <Suspense> lets you display a fallback until its children have finished loading.
        element: (
          <Suspense fallback={<h1>Something Great is loading</h1>}>
            <Grocery />
          </Suspense>
        ),
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

// 1.The createRoot create's its own DOM and then compare it with the web browser's
// DOM and only update those components which are actually updated.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

/*  1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */
