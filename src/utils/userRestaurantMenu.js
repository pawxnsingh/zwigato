import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";
const axios = require("axios").default;

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async () => {
        const res = await axios.get(MENU_URL + resId);

        setResInfo(res.data);
    };

    return resInfo;
};
export default useRestaurantMenu;
