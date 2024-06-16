import React from "react";
import UserContext from "../utils/UserContext";

// In object-oriented programming (OOP), """"extend"""" is a keyword or mechanism that allows a class
// (subclass or derived class) to inherit properties and methods from another class (superclass or base class).
// in this case React.Component will make the UserClass as react component

class UserClass extends React.Component {
    // and it has render() function to render the jsx and it should always return thr jsx
    constructor(props) {
        // Super keyword in JavaScript can be used to access and call on an object’s parent
        // The super() function is used to call the constructor of the superclass within the constructor of the subclass
        super(props);
        // how to create the local state variable in react
        this.state = {
            count: 0,
            count2: 0,
            userInfo: {
                name: "dummy",
                location: "default",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/pawxnsingh");
        const json = await data.json();
        // the set state is the function that is taking the object
        this.setState({
            userInfo: json,
        });
        
        this.timer = setInterval(()=>{
            console.log("OPOPOP");
        },1000);

        console.log("component update1");

    }

    componentDidUpdate() {
        console.log("component update");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("component unmount");
    }

    // You can return JSX elements within the render method to specify what should be rendered on the screen.
    render() {
        // destructuring the props object on the fly
        // and we are destructing the count state variable
        const { name, location, login } = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>Name : {name} </h1>
                <h2>Count : {this.state.count} </h2>
                <h2>Count2 : {this.state.count2} </h2>
                <button
                    onClick={() => {
                        // this setState function will take the js object and it will reRenders the compoenent after change in state variable
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1,
                        });
                    }}
                >
                    Counter Increase
                </button>
                <UserContext.Consumer>
                    {({loggedInUser})=>{
                        return <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    }}
                </UserContext.Consumer>
                <h2>Name : {this.props.name} </h2>
                <h3>Location : {location} </h3>
                <h4>Contact : {login} </h4>
            </div>
        );
    }
}
export default UserClass;
/**
 * How to React life cycle works in the class component with api calls
 *
 * - Constructor(Dummy Data present in the state variable)
 *
 * - Render (Dummy Data) Method will be called with dummy data
 *      -HTML render with dummy data
 * 
 * - """""componentdidmount""""" is called and executed
 *      - api call is made
 *      - state variable ""userInfo"" is updated
 *      - and ""rerender"" will get initiated
 *      - Page will get render with updated gata
 *      - reconciliation will start again after we update
 * - """"""componenetDidUpdate"""""" is called
 *
 *
 *
 * component life-Cycle for the class-based component
 *
 *
 */
