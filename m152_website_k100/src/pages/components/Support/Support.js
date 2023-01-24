import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Support.css';
import '../../../styles/style.css';

import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Support = () => {
    useDocumentTitle('Werbung K100 | Support');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.');
      };

        return (
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="H4">Kontaktiere Uns</h2>
            <p className="description">
             Wenn Sie Fragen oder Bedenken haben, zögern Sie bitte nicht, sich an uns zu wenden.
            </p>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Dein Name"
            />
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Deine Email addresse"
            />
            <label className="label" htmlFor="message">
              Nachricht
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Deine Nachricht"
            />
            <button type="submit" className="button">
              Bestätigen
            </button>
          </form>
        );
      };
      
    export default Support;