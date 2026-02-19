import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("renders TodoList component", () => {
  render(<App />);
  const heading = screen.getByText("Todo List");
  expect(heading).toBeInTheDocument();
});
