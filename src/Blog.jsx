import React from 'react';
import './blog.css'; // Importul stilurilor CSS

const Blog = () => {
  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="about-us-image">
        <img src="https://img.freepik.com/free-photo/stylish-businessman-standing-near-car-use-laptop_1157-27349.jpg?t=st=1715085590~exp=1715089190~hmac=1067f998a87eaf8278fd14d495f5f074500a84aa2ba6c976ed93c2ece35f1670&w=2000" alt="Service Auto" />
      </div>
      <p>Articole și sfaturi utile pentru întreținerea și îngrijirea vehiculelor.</p>

      {/* Postările de blog */}
      <div className="blog-post">
        <h3>Importanța întreținerii regulate a mașinii</h3>
        <p className="date">Publicat pe: 7 mai 2024</p>
        <p>Întreținerea regulată a mașinii este esențială pentru siguranța și durabilitatea acesteia. Schimburile de ulei, verificarea frânelor, și rotirea anvelopelor sunt doar câteva dintre pașii pe care ar trebui să-i urmezi pentru a menține mașina în stare bună.</p>
      </div>

      <div className="blog-post">
        <h3>Când trebuie să schimbi uleiul?</h3>
        <p className="date">Publicat pe: 4 mai 2024</p>
        <p>Schimbarea regulată a uleiului este importantă pentru menținerea funcționării optime a motorului. În general, este recomandat să schimbi uleiul la fiecare 5.000-7.000 km, dar acest lucru poate varia în funcție de mașină și de tipul de ulei folosit.</p>
      </div>

      <div className="blog-post">
        <h3>Pregătirea mașinii pentru iarnă</h3>
        <p className="date">Publicat pe: 2 mai 2024</p>
        <p>Pe măsură ce se apropie iarna, este important să-ți pregătești mașina pentru condițiile reci. Verificarea anvelopelor, a bateriei și a sistemului de încălzire sunt pași esențiali pentru a te asigura că mașina ta va funcționa corect pe timpul iernii.</p>
      </div>
    </section>
  );
};

export default Blog;
