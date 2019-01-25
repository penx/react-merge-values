import React from "react";
// import ReactDOM from "react-dom";
import { render, cleanup } from "react-testing-library";
import userEvent from "user-event";
import "jest-dom/extend-expect";

import { controlled, Uncontrolled } from "./fixtures";

// import Component from ".";
afterEach(cleanup);

it("works as a controlled component", () => {
  const { getByLabelText, getByTitle } = render(controlled);

  const day = getByLabelText("Day:");
  const month = getByLabelText("Month:");
  const year = getByLabelText("Year:");
  const result = getByTitle("Result");

  userEvent.type(day, "10");
  userEvent.type(month, "11");
  userEvent.type(year, "12");

  expect(result).toHaveTextContent("Your birthday is 10/11/12");
});

it("works as an uncontrolled component", () => {
  let value;
  const onChange = val => {
    value = val;
  };
  const { getByLabelText } = render(<Uncontrolled onChange={onChange} />);

  const day = getByLabelText("Day:");
  const month = getByLabelText("Month:");
  const year = getByLabelText("Year:");

  userEvent.type(day, "10");
  userEvent.type(month, "11");
  userEvent.type(year, "12");

  expect(value).toEqual({ day: "10", month: "11", year: "12" });
});
