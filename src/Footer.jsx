import React from "react";
import "./footer.css"; // Importul fișierului CSS pentru stilizare

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Service Auto CO Garage</p>
        <p>Strada Oastei 24, București</p>
        <p>Telefon: +40745237851</p>
        <p>Ore de funcționare: Luni - Vineri, 9:00 - 18:00</p>
      </div>
      <div className="footer-social">
        <p>Urmărește-ne pe rețelele sociale:</p>
        <a href="https://www.facebook.com/profile.php?id=61559255675482&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/carspassionfor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
