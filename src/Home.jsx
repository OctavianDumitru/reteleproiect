import React from 'react';
import './home.css'; // Importul stilurilor CSS

const Home = () => {
  return (
    <div>
      <header>
        <h1>Service Auto XYZ</h1>
        <nav>
          <ul>
            <li><a href="#despre-noi">Despre Noi</a></li>
            <li><a href="#servicii">Servicii</a></li>
            <li><a href="#echipa">Echipa</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="despre-noi">
        <h2>Despre Noi</h2>
        <p>Service Auto XYZ este un atelier auto local cu peste 10 ani de experiență...</p>
      </section>

      <section id="servicii">
        <h2>Servicii</h2>
        <ul>
          <li>Reparații mecanice</li>
          <li>Diagnoză electronică</li>
          <li>Schimburi de ulei și filtre</li>
        </ul>
      </section>

      <section id="echipa">
        <h2>Echipa</h2>
        <ul>
          <li>Ion Popescu - Mecanic Șef</li>
          <li>Maria Ionescu - Tehnician Diagnoză</li>
        </ul>
      </section>

      <section id="blog">
        <h2>Blog</h2>
        <p>Articole și sfaturi utile pentru întreținerea și îngrijirea vehiculelor...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Telefon: 123-456-789</p>
        <form>
          <label for="nume">Nume:</label>
          <input type="text" id="nume" name="nume"></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"></input>
          <button type="submit">Trimite</button>
        </form>
      </section>

      <footer>
        <p>Urmărește-ne pe rețelele sociale:</p>
        <a href="https://facebook.com/serviceautoxyz">Facebook</a>
        <a href="https://instagram.com/serviceautoxyz">Instagram</a>
      </footer>
    </div>
  );
  
};

export default Home;
