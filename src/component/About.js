import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// this is the same about-us page but in class based componenet
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Pawan singh dogra</h2>

                {/* this is the class based componenet */}
                <UserClass
                    name={"Pawan Singh (Class)"}
                    location={"Jalandhar(Class)"}
                />
            </div>
        );
    }
}

export default About;
