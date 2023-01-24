import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Impressum.css';
import '../../../styles/style.css';
import useDocumentTitle from "../../../utils/UseDocumentTitle"; 

export const Impressum = () => {
    useDocumentTitle('Werbung K100 | Impressum');

    return (
         <div fluid className="Background">
            <div class="text">
               <h4 className="title">Impressum</h4>
               <h2>Contact Information:</h2>
               <p>John Doe</p>
               <p>123 Main Street</p>
               <p>Anytown, USA 12345</p>
               <p>Phone: 555-555-5555</p>
               <p>Email: johndoe@example.com</p>
               <h2>Company Information:</h2>
               <p>Fake Company Inc.</p>
               <p>Registration Number: 12345678</p>
               <p>VAT Number: US123456789</p>
            </div>
         </div>
    );
}