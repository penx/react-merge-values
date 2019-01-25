// import React from "react";
// import ReactDOM from "react-dom";
import { render, cleanup } from "react-testing-library";
import userEvent from "user-event";
import "jest-dom/extend-expect";

import { controlled } from "./fixtures";

// import Component from ".";
afterEach(cleanup);

it("controlled", () => {
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
