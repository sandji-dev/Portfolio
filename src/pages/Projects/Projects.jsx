import projectsData from "../../data/projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects-page">
      <h1 className="projects-title">Mes Réalisations</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects