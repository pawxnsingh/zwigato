import { useState } from "react";

const User = (prop) => {
    const { name, location } = prop;
    // imprt it first as name import
    const [count,setCount] = useState(0);

    

    return (
        <div className="user-card">
            <h2>Counr : {count} </h2>

            <h2>Name : {name} </h2>
            <h3>Location : {location} </h3>
            <h4>Contact : @pawxnsingh </h4>
        </div>
    );
};
export default User;