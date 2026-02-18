import React from "react";        // ✅ ADD THIS
import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'; // ✅ ADD THIS TO USE jest-dom matchers


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
