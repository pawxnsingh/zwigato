import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
// here what we have to provide
// the react store here
import appStore from "../../utils/Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("tests related to the component", () => {
    it("should render header component with login button", () => {
        // thing to note here is our component(Header) is using redux api and react-router
        // so it order to render it we must provide both of these access to out component
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // this is called querying
        const headerButton = screen.getByRole("button");
        // then we have assert
        expect(headerButton).toBeInTheDocument();
    });

    // it("should check the cart is render or not", () => {
    //     render(
    //         <BrowserRouter>
    //             <Provider store={appStore}>
    //                 <Header />
    //             </Provider>
    //         </BrowserRouter>
    //     );

    //     const cartButton = screen.getByText(/Cart/);

    //     expect(cartButton).toBeInTheDocument();
    // });

    it("should check the cart is render or not", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const LoginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(LoginButton);

        const LogoutButton = screen.getByRole("button", { name: "Logout" });
        expect(LogoutButton).toBeInTheDocument();
    });
});

// if we have to make test cases for the component we need to give mockdata or hard coded data
