import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // N'oublie pas d'installer react-icons
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" onClick={closeMenu}>RS<span>.Dev</span></NavLink>
      </div>
      
      {/* Bouton Hamburger visible uniquement sur mobile */}
      <button className="header-burger" onClick={toggleMenu} aria-label="Menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* La classe "open" sera ajoutée si isOpen est vrai */}
      <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
        <NavLink to="/projets" onClick={closeMenu}>Projets</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;