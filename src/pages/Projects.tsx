import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>A selection of open-source projects and software products I've built.</p>
      
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags?.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="display-block mt-1">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
