import React from 'react';
import './contact.css'; // Importul stilurilor CSS

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="about-us-image">
        <img src="https://img.freepik.com/free-photo/man-elegant-costume-driving-taxi-car_23-2149149647.jpg?t=st=1715085670~exp=1715089270~hmac=6c693dbf3d23296e37fcaea3fb157a5cc55cf79452e029bc438b049be6d50e65&w=2000" alt="Service Auto" />
      </div>
      <p>Ne puteți contacta folosind formularul de mai jos sau folosind informațiile de contact. Suntem disponibili pentru orice întrebări sau programări.</p>
      
      <div className="contact-info">
        <p><strong>Adresă:</strong> Strada Oastei 24, București</p>
        <p><strong>Telefon:</strong> +40745237851</p>
        <p><strong>Ore de funcționare:</strong> Luni - Vineri, 9:00 - 18:00</p>
      </div>

      {/* Formularul de contact */}
      <form>
        <label htmlFor="nume">Nume:</label>
        <input type="text" id="nume" name="nume" placeholder="Introdu numele tău" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Introdu emailul tău" />
        
        <label htmlFor="mesaj">Mesaj:</label>
        <textarea id="mesaj" name="mesaj" rows="4" placeholder="Scrie mesajul tău"></textarea>
        
        <button type="submit">Trimite</button>
      </form>

      {/* Harta Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.3961642425506!2d26.025503382132314!3d44.48654868637983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203eaae3f9eaf%3A0x7d52984c814d45ce!2sStrada%20Oastei%2024%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1715084424478!5m2!1sro!2sro"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>

)};

export default Contact;
