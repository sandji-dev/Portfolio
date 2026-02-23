import './Footer.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          Rs<span>.dev</span>
        </div>
        
        <p className="footer-text">
          © {currentYear} - Conçu et développé avec passion.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/sandji-dev" aria-label="Voir mon profil GitHub" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /></a>
          <a href="https://linkedin.com/in/ricardo-sandjon-8271b5364" aria-label="visiter mon profil linkedin" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;