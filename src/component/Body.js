import ResCard from "../component/RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "../component/Shimmer";
import { Link } from "react-router-dom";
// import re

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
        const response = await fetch(API_URL); // this gonna return promises and now we had convert it to the readavle
        const json = await response.json();
        const path =
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
                .restaurants;
        setlistOfRestaurant(path);
        setfilteredRestaurant(path);
    };

    // conditional rendering
    if (listOfRestaurant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            {/* search bar and search button */}
            <div className="utility-container">
                <div>
                    <input
                        className="search-box"
                        type="text"
                        placeholder="Search"
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
                        className="search-button"
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
            </div>

            {/* top restaurant container */}
            <div
                className="top-res-filter"
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

            {/* res container */}
            <div className="restaurant-container">
                {/* {filteredRestaurant.map((restaurant) => (
                    // this is for live data
                    <ResCard key={restaurant.info.id} resData={restaurant} />
                    // <ResCard key={restaurant.data.id} resData={restaurant} />
                ))} */}

                {/* <Link>




                </Link> */}

                {filteredRestaurant.map((restaurant) => (

                    <Link
                        key={restaurant.info.id}
                        to={"restaurants/" + restaurant.info.id}
                    >
                        {/* this is passing the prop into the restaurant card and getting rendered by the map function  */}
                        <ResCard resData={restaurant} />

                    </Link>
                ))}

            </div>
        </div>
    );
};
export default Body;
