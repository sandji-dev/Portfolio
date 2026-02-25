import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          
          <div className="image-placeholder">
          <img 
            src={`${import.meta.env.BASE_URL}images/ricardo-profile.webp`} 
            alt="Portrait de Ricardo Sandjon" 
          />

          </div>
        </div>
        
        <div className="about-text">
          <h2 className="section-title">À propos de moi</h2>
          <p>
            Passionné par la création numérique, je suis un <strong>Développeur Web Fullstack </strong> 
            basé en ITALIE. Mon objectif est de transformer des idées complexes en 
            expériences numériques fluides et élégantes.
          </p>
          <p>
            Mon approche du code est simple : <strong>rigueur, curiosité et performance</strong>. 
            Qu'il s'agisse de peaufiner une interface React ou de structurer une API robuste avec Node.js, 
            je m'efforce toujours de livrer des solutions propres et maintenables.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Passionné</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;