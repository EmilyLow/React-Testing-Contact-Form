import React from "react";
import { render, fireEvent } from "@testing-library/react";
//Should this be necessary?
import userEvent from '@testing-library/user-event';

import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("test entering name", () => {

  const {getByLabelText} = render(<ContactForm/>)
  let name = "Em";
  const firstNameField = getByLabelText(/First Name/i);
//  getByLabelText(/Last Name/i);
  
  // fireEvent.change(firstNameField, {
  //   target: {name: "firstName", value: "Em"}
  // });

  userEvent.type(firstNameField, "Em"
  );

});