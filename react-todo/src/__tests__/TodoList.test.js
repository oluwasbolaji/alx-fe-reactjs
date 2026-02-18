import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import '@testing-library/jest-dom'; // Important!

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
