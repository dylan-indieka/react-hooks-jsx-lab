import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/data";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);

  test("renders a div with the correct ID", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("#home")).toBeInTheDocument();
  });

  test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
    render(<Home />);

    // Find an element with the text content 'John Doe is a Web Developer from New York'
    const h1 = screen.queryByText("John Doe is a Web Developer from New York");

    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1"); // check that the element is a <h1>
  });

  test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
    render(<Home />);

    const h1 = screen.queryByText("John Doe is a Web Developer from New York");
    expect(h1).toHaveStyle({ color: "firebrick" });
  });

  test("renders the correct structure inside the #home div", () => {
    const { container } = render(<Home />);
    const homeDiv = container.querySelector("#home");

    expect(homeDiv).toBeInTheDocument();
    expect(homeDiv.querySelector("h1")).toBeInTheDocument();
    expect(homeDiv.querySelector("h1").textContent).toBe("John Doe is a Web Developer from New York");
  });

  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" });
});
