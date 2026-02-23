import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projects.json';
import './Home.scss';

const Home = () => {
  // On prend les 3 premiers projets pour l'accueil
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="home-page">
        <Hero />
        <About/>
        <Skills />
    
        <section className="featured-projects">
            <h2 className="section-title">Projets à la une</h2>
            <div className="projects-grid">
                {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
    
            {/*  bouton "Voir tout" */}
            <div className="view-all-container">
                <Link to="/projets" className="btn-secondary">Voir tous mes projets →</Link>
            </div>
        </section>
    </div>
    );
};

export default Home;