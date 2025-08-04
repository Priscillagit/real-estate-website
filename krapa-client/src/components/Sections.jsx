// src/components/Sections.jsx
import React from 'react';
import './Sections.css';

function Sections() {
  return (
    <>
      {/*<section id="listings" className="section">
        <h2>Our Listings</h2>
        <p>Find hand-picked homes in the best locations.</p>
      </section> */}

       {/* <section id="gallery" className="section">
        <h2>Gallery</h2>
        <p>See photos of beautiful properties.</p>
      </section> */}

      <section id="about" className="section about-section">
        <h2>About KRAPA</h2>
        <p>
          KRAPA is a modern real estate agency based in Ghana, dedicated to helping people find comfortable,
          affordable, and stylish homes. Whether you're buying, selling, or renting, we are committed to
          guiding you through every step of the journey with transparency and care. Our team understands the
          local market and is passionate about connecting families and individuals with spaces they can call home.
        </p>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
       <footer className="footer">
        <p>&copy; {new Date().getFullYear()} KRAPA Real Estate. All rights reserved.</p>
      </footer>
    </>
    
  );
}

export default Sections;
