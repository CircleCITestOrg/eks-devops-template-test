import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the CircleCI logo", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/CircleCI Logo/i);
  expect(linkElement).toBeInTheDocument();
});
