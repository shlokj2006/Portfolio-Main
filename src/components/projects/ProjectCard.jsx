import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  const hasLinks = project.route || project.githubUrl || project.demoUrl

  return (
    <article className="project-card">
      {project.image ? (
        <img
          className="project-card__image"
          src={project.image}
          alt={project.imageAlt || `${project.title} project preview`}
        />
      ) : (
        <div className="project-card__placeholder" aria-hidden="true">
          <span>Project preview unavailable</span>
        </div>
      )}
      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        {project.technologies.length > 0 ? (
          <ul className="project-card__technologies" aria-label="Technology stack">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : (
          <p className="project-card__pending">Technology details pending verification</p>
        )}
        {hasLinks && (
          <nav className="project-card__actions" aria-label={`${project.title} links`}>
            {project.route && (
              <Link className="project-card__action" to={project.route}>View case study</Link>
            )}
            {project.githubUrl && (
              <a className="project-card__action" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a className="project-card__action" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live demo
              </a>
            )}
          </nav>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
