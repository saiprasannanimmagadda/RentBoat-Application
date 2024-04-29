import React from 'react';
import './contactus.css'; // Make sure this path is correct and the file exists

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Nauti Jane's Boat Rentals</h1>
      <address>
        234 Elm Street<br />
        S. Dartmouth, MA 02748<br />
        <a href="mailto:info@nautijane.com">info@nautijane.com</a><br />
        <a href="tel:+15087382488">508-738-2488</a>
      </address>
      <p>Our boats are docked at South Wharf Yacht Yard & Marina on Elm Street in South Dartmouth. We recommend inputting 218 Elm Street, South Dartmouth, MA 02748 as the address if you are using a GPS.</p>
      
      <h2>DIRECTIONS</h2>
      <p><strong>From the North:</strong><br />
      Route 24 South to Exit 12 (Route 140 South)...</p>
      {/* More directions here */}
      
      <aside className="hours">
  <h2>HOURS</h2>
  <p>Monday: 8AM - 8PM</p>
  <p>Tuesday: 8AM - 8PM</p>
  <p>Wednesday: 8AM - 8PM</p>
  <p>Thursday: 8AM - 8PM</p>
  <p>Friday: 8AM - 8PM</p>
  <p>Saturday: 8AM - 8PM</p>
  <p>Sunday: 8AM - 8PM</p>
</aside>


      <aside className="contact-buttons">
        <a href="tel:+15087382488" className="button">Call Us Now</a>
        <a href="mailto:info@nautijane.com" className="button">Contact Us Now</a>
      </aside>
    </div>
  );
};

export default Contact;
