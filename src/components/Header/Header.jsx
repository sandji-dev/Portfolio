import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">RS<span>.Dev</span></NavLink>
      </div>
      
      <nav className="header-nav">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/projets">Projets</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;