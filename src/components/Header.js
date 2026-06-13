import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="brand">
          <img src={logo} alt="logo" className="brand-logo" />
          <div>
            <strong>Portfolio</strong>
            <span>Professional Services</span>
          </div>
        </a>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}