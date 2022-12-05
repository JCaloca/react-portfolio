import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <form className="contact-form">
        <div className="mb-3">
          <label for="contact-name" className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name Here"></input>
        </div>  
        <div className="mb-3">
            <label for="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" rows="3" placeholder="Leave me a message"></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}