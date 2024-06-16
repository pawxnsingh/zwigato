import ResCard, { withLabeledData } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";

import useOnlineStatus from "../utils/useOnlineStatus";
const axios = require("axios").default;
// this will take resCard as an input and give us a new comp with edited ui
const EnhancedLabelCard = withLabeledData(ResCard);

// state variable - react superpower(React HOOK which is ""usestate()"")
// useState() - why it get used cuz it maintain the state of the component

const Body = () => {
    // array destructuring on the fly
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    // useEffect is a hook in React, a popular JavaScript library for building user interfaces,
    // that allows you to perform side effects in your functional components. Side effects can include tasks like data fetching,
    // DOM manipulation, and more. It is typically used to manage things that need to happen after the initial render
    // of your component or in response to changes in certain dependencies.

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        // while fetching plz ensure that it is CORS enabled
        const API_URL =
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const res = await axios.get(API_URL);

        console.log(res);

        const restaurantData =
            res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants ||
            res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

        console.log(restaurantData);
        // toggle between 2 and 4
        setlistOfRestaurant(restaurantData);
        setfilteredRestaurant(restaurantData);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Something up with your network check your ISP or get port to the
                another isp!!!
            </h1>
        );
    }

    // conditional rendering
    if (listOfRestaurant && listOfRestaurant.length === 0) {
        return <Shimmer />;
    }

    const { setUserName, loggedInUser } = useContext(UserContext);

    return (
        <div className="mx-24">
            {/* search bar and search button */}
            <div className="flex space-x-4 py-4 mb-5 items-center">
                <div>
                    <input
                        className="focus:outline-none bg-slate-100 focus:bg-slate-100 border rounded-xl p-2"
                        type="text"
                        placeholder="Search Restaurant.."
                        value={searchText}
                        // onChange handler: However, you haven't provided an onChange handler,
                        // which is a function that gets called when the form field's value changes.
                        // It's used to update the state and keep the controlled component in sync with the user's input.
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                        // This allows you to keep the component's state in sync with the user's input, making it a controlled component.
                    />
                </div>

                <div>
                    <button
                        className="border border-solid bg-green-900 font-bold rounded-xl text-white p-2 "
                        onClick={() => {
                            const filterRes = listOfRestaurant.filter((res) => {
                                // return is essential
                                return res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase());
                            });
                            setfilteredRestaurant(filterRes);
                        }}
                    >
                        Search
                    </button>
                </div>

                {/* top restaurant container */}
                <div
                    className="border border-solid bg-green-900 text-white font-bold rounded-xl p-2 "
                    onClick={() => {
                        const topRated = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setfilteredRestaurant(topRated);
                    }}
                >
                    <button className="top-res-filter-button">
                        Top Rated Restaurant
                    </button>
                </div>

                <div>
                    <input
                        className="focus:outline-none bg-slate-100 focus:bg-slate-100 border rounded-xl p-2"
                        type="text"
                        value={loggedInUser}
                        // onChange handler: However, you haven't provided an onChange handler,
                        // which is a function that gets called when the form field's value changes.
                        // It's used to update the state and keep the controlled component in sync with the user's input.
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        // This allows you to keep the component's state in sync with the user's input, making it a controlled component.
                    />
                </div>
            </div>

            {/* res container */}
            <div className="flex flex-row flex-wrap  gap-y-10 justify-between">
                {/* {filteredRestaurant.map((restaurant) => (
                    // this is for live data
                    <ResCard key={restaurant.info.id} resData={restaurant} />
                    // <ResCard key={restaurant.data.id} resData={restaurant} />
                ))} */}

                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"restaurants/" + restaurant.info.id}
                    >
                        {/* this is passing the prop into the restaurant card and getting rendered by the map function  */}
                        {/* {restaurant.info.costForTwo } */}
                        <ResCard resData={restaurant} />
                        {/* <EnhancedLabelCard resData={restaurant} /> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
