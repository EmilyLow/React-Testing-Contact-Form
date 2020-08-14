import React from "react";
import { render, fireEvent } from "@testing-library/react";
//Should this be necessary?
import userEvent from '@testing-library/user-event';
import ContactForm from "./ContactForm";

//Should we be able to test actually submitting with various data?

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("test entering correct data", () => {

  const {getByLabelText} = render(<ContactForm/>)
  let name = "Em";
  const firstNameField = getByLabelText(/First Name/i);
  const lastNameField = getByLabelText(/Last Name/i);
  const emailField = getByLabelText(/Email/i);
  const messageField = getByLabelText(/Message/i);
//  getByLabelText(/Last Name/i);
  
  // fireEvent.change(firstNameField, {
  //   target: {name: "firstName", value: "Em"}
  // });

  userEvent.type(firstNameField, "Em"
  );
  userEvent.type(lastNameField, "Smith"
  );
  userEvent.type(emailField, "fakeEmail@gmail.com"
  );
//   messageField.type(messageField, "This is a message"
//   );

  //fireEvent.change(firstNameInput, )

//   fireEvent.click(submitButton);

});