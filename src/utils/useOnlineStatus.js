import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    // whenever you think of writing a custom hook
    // first think of the contract
    // what will be input and what i have to return
    const [userStatus, setUserStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setUserStatus(false);
        });

        window.addEventListener("online", () => {
            setUserStatus(true);
        });
    }, []);

    return userStatus;
};

export default useOnlineStatus;
