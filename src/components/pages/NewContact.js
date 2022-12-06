import React from "react";
import { validateEmail } from "../../utils/helpers.js";

// handleChange(idx, event) {
//     const target = event.target;
//     const message = target.message;
//     let error = '';

//     if (target.value === '') {
//         error = `${message} field cannot be empty`
//     }
//     if (!target.value) {

//     }
// }

export default function Contact() {
  return (
    <div className="container">
      <p className="display-6">Contact</p>
      <hr />
      <form className="contact-form">
        <div className="mb-3">
          <label for="contact-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name Here"
          ></input>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Leave me a message"
          ></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
