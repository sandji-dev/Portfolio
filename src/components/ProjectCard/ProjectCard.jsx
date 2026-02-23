import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-image">
      <img 
        src={project.image} 
        alt={project.title || "Projet de Ricardo"} 
        loading="lazy" 
        width="1200" 
        height="750" 
      />
      </div>
      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technos.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Voir le code source de ${project.title} sur GitHub`}>GitHub</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn" aria-label={`Voir la démo en direct du projet ${project.title}`}>Démo</a>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;