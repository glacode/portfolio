import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <h1>John Doe</h1>
        <p className="subtitle">Software Developer</p>
        <p>
          Software developer since the early 1990s. Passionate about engineering clarity, simplicity, and long-term maintainability. Experienced in building real-world software products from low-level systems to modern AI-integrated tools.
        </p>
      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map(project => (
            <div key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags?.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        <div className="view-more">
          <Link to="/projects">View all projects &rarr;</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
