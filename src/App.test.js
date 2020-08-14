import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
//Added this import, maybe should not be necessary


test("renders App without crashing", () => {
  render(<App />);
});

// test("test entering name", () => {

//   const {getByLabelText} = render(<ContactForm/>)
//   let name = "Em";
//   // const firstNameInput = getByLabelText(/first name*/i);
//  getByLabelText(/Last Name/i);
  
//   // fireEvent.change(firstNameField, {
//   //   target: {name: "firstName", value: "Em"}
//   // });

// });