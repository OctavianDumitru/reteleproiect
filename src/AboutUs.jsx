import React from 'react';
import './aboutUs.css'; // Importul CSS pentru stilizare

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Adăugăm o imagine reprezentativă */}
      <div className="about-us-image">
        <img src="https://img.freepik.com/free-photo/mechanic-doing-car-yearly-checkup_482257-76142.jpg?t=st=1715085448~exp=1715086048~hmac=aa5a65a93c36863533eb032b1d8cba0860a19a69f60a5115afd99f189df2be42" alt="Service Auto" />
      </div>

      <h2>Despre Noi</h2>
      <p>Suntem un service auto local cu peste 10 ani de experiență. Ne mândrim cu calitatea și profesionalismul serviciilor noastre.</p>
      <p>Oferim reparații auto, diagnoză electronică, schimburi de ulei și multe altele. Echipamentul nostru este modern și echipa noastră este formată din tehnicieni bine pregătiți.</p>
      <p>Suntem dedicați să oferim clienților noștri cel mai bun serviciu și să ne asigurăm că fiecare mașină părăsește atelierul nostru în stare excelentă.</p>

      {/* Secțiunea echipă */}
      <div className="team">
        <h3>Echipa noastră</h3>
        <p>O echipă talentată și dedicată este cheia succesului nostru. Iată câțiva dintre membrii echipei noastre:</p>
        <ul>
          <li>Ion Popescu - Mecanic Șef. Are peste 20 de ani de experiență în domeniul auto și este specializat în reparații complexe.</li>
          <li>Maria Ionescu - Tehnician Diagnoză. Este expertă în diagnoza electronică și a obținut certificări de la marii producători auto.</li>
          <li>Alexandru Dumitrescu - Specialist Frâne și Suspensii. Este responsabil pentru întreținerea sistemelor de frâne și suspensii, asigurând siguranța vehiculelor.</li>
          <li>Elena Vasilescu - Specialist Schimburi de Ulei și Filtre. Se ocupă de întreținerea regulată a mașinilor și de controlul calității.</li>
        </ul>
      </div>

      {/* Secțiunea istoric */}
      <div className="history">
        <h3>Istoric</h3>
        <p>Service Auto CO Garage a fost fondat în 2010 de către Ion Popescu, un pasionat al industriei auto. De la începuturi modeste, service-ul a crescut și s-a extins pentru a include o gamă largă de servicii.</p>
        <p>În 2015, am deschis un nou atelier pentru diagnoză electronică, oferind clienților noștri servicii de ultimă generație. Am introdus și programări online pentru a facilita accesul clienților la serviciile noastre.</p>
        <p>În 2018, am primit certificarea ISO 9001 pentru calitatea serviciilor noastre. Ne mândrim cu această realizare și continuăm să ne îmbunătățim în fiecare an.</p>
        <p>Astăzi, suntem un lider local în industrie, cunoscut pentru profesionalismul și devotamentul nostru față de clienți. Plănuim să ne extindem în continuare pentru a servi mai bine comunitatea noastră.</p>
      </div>
    </section>
  );
};

export default AboutUs;
