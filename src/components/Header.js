import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src={profile} alt="Profile" className="brand-logo" />
          <div>
            <strong>Portfolio</strong>
            <span>Professional Services</span>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}