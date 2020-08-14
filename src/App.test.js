import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("test entering name", () => {

  const {getByLabelText} = render(<App/>)
  let name = "Em";
  const firstNameField = getByLabelText(/first name*/i);
  
  fireEvent.change(firstNameField, {
    target: {name: "firstName", value: "Em"}
  });

});