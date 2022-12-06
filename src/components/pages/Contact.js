import React, { useState } from "react";
// importing helper function from utils for email validation
import { validateEmail } from "../utils/helpers";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // preventing default behavior of form submit so it does not immediately refresh the page
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Incorrect email or blank name input.");
      return;
    }
    alert("Thank you for your message. Expect a response within 24 hours");

    // If the required input fields are entered correctly clear out input fields
    setName = " ";
    setEmail = " ";
    setMessage = " ";
  };

  return (
    <div className="container">
      <p className="display-6">Contact Me</p>
      <hr />
      <form className="contact-form">
        <div className="mb-3">
          <label for="contact-name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Your Name Here"
          ></input>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            onChange={handleInputChange}
            className="form-control"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            onChange={handleInputChange}
            className="form-control"
            rows="3"
            placeholder="Leave me a message"
          ></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
