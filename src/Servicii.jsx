import React from 'react';
import './servicii.css'; // Importul stilurilor CSS

const Servicii = () => {
  return (
    <section id="servicii">
      <h2>Servicii</h2>
      <div className="about-us-image">
        <img src="https://img.freepik.com/free-photo/auto-mechanic-using-laptop-cooperating-with-coworker-while-doing-car-diagnostic-repair-shop_637285-4275.jpg?t=st=1715085448~exp=1715086048~hmac=d78c37e039ed6556666c5828219d6333f72b327145eaebf01e89637b0c96693e" alt="Servicii" />
      </div>
      <p>Oferim o gamă largă de servicii auto pentru a satisface nevoile dumneavoastră. Echipa noastră de tehnicieni experimentați este aici pentru a vă ajuta cu orice problemă auto.</p>

      {/* Adăugarea unei liste cu descriere pentru fiecare serviciu */}
      <div className="service-list">
        <div className="service-item">
          <h3>Reparații mecanice</h3>
          <p>Ne ocupăm de toate tipurile de reparații mecanice, de la probleme mici la reparații complexe. Utilizăm echipament modern și piese de înaltă calitate.</p>
        </div>

        <div className="service-item">
          <h3>Diagnoză electronică</h3>
          <p>Folosim echipamente de diagnoză de ultimă generație pentru a identifica rapid și precis problemele electronice ale mașinii dumneavoastră.</p>
        </div>

        <div className="service-item">
          <h3>Schimburi de ulei și filtre</h3>
          <p>Oferim schimburi de ulei și filtre pentru toate tipurile de vehicule, utilizând produse de calitate pentru a asigura funcționarea optimă a motorului.</p>
        </div>

        <div className="service-item">
          <h3>Servicii de frâne și suspensii</h3>
          <p>Asigurăm reparații și întreținere pentru sistemele de frâne și suspensii, asigurând siguranța și confortul la volan.</p>
        </div>

        {/* Adăugarea unor servicii suplimentare */}
        <div className="service-item">
          <h3>Reparații transmisie</h3>
          <p>Reparăm și întreținem transmisia, fie manuală sau automată. Asigurăm schimbul de ulei pentru transmisie și diagnosticarea oricăror probleme.</p>
        </div>

        <div className="service-item">
          <h3>Alinierea roților</h3>
          <p>Utilizăm echipament precis pentru alinierea roților, asigurând un condus sigur și eficient. O aliniere corectă prelungește durata de viață a anvelopelor.</p>
        </div>

        <div className="service-item">
          <h3>Întreținerea climatizării</h3>
          <p>Oferim întreținere și reparații pentru sistemul de climatizare, inclusiv reîncărcarea freonului și diagnosticarea sistemului de aer condiționat.</p>
        </div>

        <div className="service-item">
          <h3>Inspecție tehnică periodică (ITP)</h3>
          <p>Pregătim și efectuăm inspecții tehnice periodice pentru a ne asigura că vehiculul dumneavoastră respectă toate reglementările și standardele de siguranță.</p>
        </div>
      </div>
    </section>
  );
};

export default Servicii;
