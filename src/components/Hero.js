import React from 'react';
import profile from '../assets/profile.svg';

export default function Hero({ name = 'Your Name', title = 'Senior Product Designer' }) {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">Professional portfolio</p>
        <h1>{name}</h1>
        <p className="hero-subtitle">
          I design digital products and build reliable web experiences for enterprise teams.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="/projects">View Work</a>
          <a className="btn secondary" href="#contact">Get in Touch</a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={profile} alt="Profile illustration" />
      </div>
    </section>
  );
}