import React from "react";
import myImage from "../data/image.jpg"; // Adjusted the path to match the correct location

// use these variables in your JSX (update them with your own name and city!)
const name = "Liza";
const city = "New York";

export const image = "/assets/image.jpg"; // Adjust the path as necessary

export { name, city };

const About = () => {
  return (
    <div>
      <img src={myImage} alt="About" />
    </div>
  );
};

export default About;

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home />);
  const h1 = screen.queryByText("John Doe is a Web Developer from New York");
  expect(h1).toBeInTheDocument();
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" });
});

test("renders the correct structure inside the #home div", () => {
  const { container } = render(<Home />);
  const homeDiv = container.querySelector("#home");
  expect(homeDiv).toContainElement(screen.queryByText("John Doe is a Web Developer from New York"));
});