import { projectExperience, roles } from '../../content/experience.js'
import ExperienceCard from '../experience/ExperienceCard.jsx'

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <header className="experience-section__intro">
        <p className="page-placeholder__eyebrow">Career history and projects</p>
        <h1 id="experience-title">Experience</h1>
        <p>Internship and leadership roles alongside project work in software and AI automation.</p>
      </header>

      <div className="experience-group" aria-labelledby="experience-roles-title">
        <h3 className="experience-group__title" id="experience-roles-title">Roles & leadership</h3>
        <div className="experience-grid">
          {roles.map((role) => <ExperienceCard key={role.id} entry={role} />)}
        </div>
      </div>

      <div className="experience-group" aria-labelledby="experience-projects-title">
        <h3 className="experience-group__title" id="experience-projects-title">Project experience</h3>
        <div className="experience-grid">
          {projectExperience.map((project) => (
            <ExperienceCard key={project.id} entry={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
