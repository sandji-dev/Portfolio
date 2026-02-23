import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <section 
      className="hero" 
      role="img" 
      aria-label="Image de fond du portfolio de Ricardo Sandjon, développeur web"
    >
      <div className="hero-content">
        {/* Le petit badge au-dessus du titre */}
        <div className="hero-badge">Développeur Web Fullstack Junior</div>
        
        {/* Le titre avec l'effet dégradé sur le prénom */}
        <h1 className="hero-title">
          Salut, moi c'est <span className="highlight">Ricardo Sandjon</span>
        </h1>
        
        {/* La description */}
        <p className="hero-description">
          Je crée des interfaces web modernes, accessibles et performantes. 
          Bienvenue dans mon univers numérique.
        </p>
        
        {/* Bouton d'action avec un aria-label pour le SEO */}
        <div className="hero-actions">
            <Link 
              to="/projets" 
              className="btn-primary"
              aria-label="Naviguer vers la section de mes projets"
            >
              Voir mes projets
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
