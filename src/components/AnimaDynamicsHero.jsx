import React from 'react';

export default function AnimaDynamicsHero() {
  return (
    <div className="hero-wrapper">
      <h1 className="hero-title">ANIMA DYNAMICS</h1>

      <section className="hero-section">
        <div className="hero-frame">
          <img
            src="/images/ByHoZKO.png"
            alt="Anima Dynamics loading scene"
            className="hero-image"
          />
          <div className="hero-gradient" />
          <div className="hero-caption">
            <p>Loading...</p>
            <p>Disconnected...</p>
            <p>......</p>
            <p>Welcome to Neo Sphere....</p>
          </div>
        </div>
      </section>

      <p className="hero-footnote">Copyright© 2025 Anima Dynamics</p>
    </div>
  );
}
