import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for contact us page", () => {
    // render method is use to render the component into the jsdom env and screen is
    // use to search in the element cuz it is like """"document webApi""""

    // what is @babel/preset-react and this required for jest to parse the jsx so we have to confifure the
    // babel.configration and add @babel/preset-react and set it mode as automatic

    // * we can write """test === it""" they both are alias

    test("did my component rendered", () => {
        // this uses @babel/preset-react to parse jsx
        // render is used to render the element in the js-dom
        render(<Contact />);
        // now the component is rendered and screen is the abstraction
        // that provide a convient way to interact with rendered compoenent
        // this object contain method to query and interact with the dom
        // the getByRole is one of the many query that is being provided by the screen/testing-library
        const heading = screen.getByRole("heading");
        // toBeInTheDocument -> is the function provided by the ""@testing-library/jest-dom""
        // to check if heading is present in document or not
        expect(heading).toBeInTheDocument();
    });

    it("should render the button", () => {
        // this is rendering
        render(<Contact />);
        // this is making query and searching searching for element
        const button = screen.getByRole("button");

        // this is assertion
        expect(button).toBeInTheDocument();
    });

    it("should render the button by name", () => {
        // this is rendering
        render(<Contact />);
        // this is making query and searching searching for element
        const buttonName = screen.getByText("Submit");

        // this is assertion
        expect(buttonName).toBeInTheDocument();
    });

    it("should render 2 input boxes", () => {
        // this is rendering
        render(<Contact />);
        // this is making query and searching searching for element
        const buttonName = screen.getAllByRole("textbox");

        // this is assertion
        expect(buttonName.length).toBe(2);
    });
});
