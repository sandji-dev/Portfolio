import './Skills.scss';
// Importation des icônes depuis les bibliothèques FontAwesome et SimpleIcons
import { FaReact, FaJs, FaSass, FaNodeJs, FaGithub, FaSearch } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', category: 'Front-end', icon: <FaReact /> },
    { name: 'JavaScript', category: 'Front-end', icon: <FaJs /> },
    { name: 'Sass', category: 'Front-end', icon: <FaSass /> },
    { name: 'Node.js', category: 'Back-end', icon: <FaNodeJs /> },
    { name: 'Express', category: 'Back-end', icon: <SiExpress /> },
    { name: 'MongoDB', category: 'Base de données', icon: <SiMongodb /> },
    { name: 'SEO', category: 'Optimisation', icon: <FaSearch /> },
    { name: 'GitHub', category: 'Workflow', icon: <FaGithub /> }
  ];

  return (
    <section className="skills">
      <h2 className="skills-title">Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-category={skill.category}>
            <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;