import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Support.css';
import '../../../styles/style.css';

import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Support = () => {
    useDocumentTitle('Support');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you as soon as possible.');
      };

        return (
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="H4">Contact Us</h2>
            <p className="description">
              If you have any questions or concerns, please don't hesitate to reach out to us.
            </p>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
            />
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Your message"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        );
      };
      
    export default Support;