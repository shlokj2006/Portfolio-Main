import ProjectCard from '../components/projects/ProjectCard.jsx'
import { projects } from '../content/projects.js'

function ProjectsPage() {
  const orderedProjects = [...projects].sort((first, second) => first.displayOrder - second.displayOrder)
  const featuredProjects = orderedProjects.filter((project) => project.featured)
  const otherProjects = orderedProjects.filter((project) => !project.featured)

  return (
    <div className="projects-page">
      <header className="projects-page__intro">
        <p className="page-placeholder__eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p>Explore selected work across web development, automation, and applied AI.</p>
      </header>

      <section className="projects-section" aria-labelledby="top-projects-heading">
        <div className="projects-section__heading">
          <div>
            <p className="page-placeholder__eyebrow">Featured</p>
            <h2 id="top-projects-heading">Top Projects</h2>
          </div>
        </div>
        <div className="project-grid project-grid--featured">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="projects-section" aria-labelledby="other-projects-heading">
        <div className="projects-section__heading">
          <div>
            <p className="page-placeholder__eyebrow">More work</p>
            <h2 id="other-projects-heading">Other Projects</h2>
          </div>
        </div>
        {otherProjects.length > 0 ? (
          <div className="project-grid">
            {otherProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        ) : (
          <p className="projects-empty-state">No additional projects are ready to display yet.</p>
        )}
      </section>
    </div>
  )
}

export default ProjectsPage
