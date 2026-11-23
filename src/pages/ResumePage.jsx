import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import resumePdf from '../../assets/Shlok_Jaiswal_Resume.pdf'
import { aboutProfile } from '../content/about.js'
import { certificationGroups } from '../content/certifications.js'
import { roles } from '../content/experience.js'
import { projects } from '../content/projects.js'
import { skills } from '../content/skills.js'

const resumeProjectIds = [
  'eventhub',
  'school-van',
  'ai-content-automation-pipeline',
]

const selectedProjects = resumeProjectIds
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter(Boolean)

const resumeCertificationIds = ['programming-in-java', 'ai-agents-n8n']
const selectedCertifications = certificationGroups
  .flatMap((group) => group.certificates)
  .filter((certificate) => resumeCertificationIds.includes(certificate.id))

const skillGroups = [
  {
    title: 'Programming',
    names: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Full-stack development',
    names: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    title: 'AI/ML and Data Science',
    names: ['Data Science fundamentals', 'Machine Learning', 'OpenAI APIs', 'NumPy', 'Pandas', 'TensorFlow'],
  },
]

const selectedSkills = skillGroups.map((group) => ({
  ...group,
  skills: group.names
    .map((name) => skills.find((skill) => skill.name === name))
    .filter(Boolean),
}))

function ResumePage() {
  const [resumeAvailable, setResumeAvailable] = useState(true)

  useEffect(() => {
    let isCurrent = true
    fetch(resumePdf, { method: 'HEAD' })
      .then((response) => {
        if (isCurrent) setResumeAvailable(response.ok)
      })
      .catch(() => {
        if (isCurrent) setResumeAvailable(false)
      })

    return () => { isCurrent = false }
  }, [])

  return (
    <article className="resume-page" aria-labelledby="resume-name">
      <header className="resume-page__header">
        <p className="page-placeholder__eyebrow">Resume overview</p>
        <h1 id="resume-name">Shlok Ashish Jaiswal</h1>
        <p className="resume-page__headline">Full-Stack Developer | AI &amp; Automation Enthusiast</p>
        <p className="resume-page__summary">
          Computer Science student specializing in Data Science, building full-stack applications and AI-assisted
          automation workflows. Interested in applying software engineering, AI/ML, and automation to practical problems.
        </p>
      </header>

      <section className="resume-page__section" aria-labelledby="resume-education">
        <h2 id="resume-education">Education</h2>
        <div className="resume-page__education">
          <div>
            <h3>B.Tech in Computer Science – Data Science</h3>
            <p>{aboutProfile.education.institution}</p>
          </div>
          <p className="resume-page__education-highlight">
            GPA {aboutProfile.education.gpa} <span aria-hidden="true">·</span> {aboutProfile.education.distinction}
          </p>
        </div>
      </section>

      <section className="resume-page__section" aria-labelledby="resume-skills">
        <h2 id="resume-skills">Technical Skills</h2>
        <div className="resume-page__skills">
          {selectedSkills.map((group) => (
            <div className="resume-page__skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-page__section" aria-labelledby="resume-experience">
        <h2 id="resume-experience">Experience &amp; Leadership</h2>
        <div className="resume-page__projects">
          {roles.map((role) => (
            <article className="resume-page__project" key={role.id}>
              <h3>{role.title}</h3>
              <p>{role.organization}</p>
              <p>{role.type} · {role.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-page__section" aria-labelledby="resume-projects">
        <h2 id="resume-projects">Top Projects</h2>
        <div className="resume-page__projects">
          {selectedProjects.map((project) => (
            <article className="resume-page__project" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.id === 'eventhub'
                ? 'MERN event management and booking platform with role-based workflows.'
                : project.id === 'school-van'
                  ? 'School transportation monitoring with live GPS and student movement tracking.'
                  : 'n8n workflow for AI content generation, human review, and distribution.'}
              </p>
              {project.technologies.length > 0 && (
                <p className="resume-page__project-technologies">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="resume-page__section" aria-labelledby="resume-certifications">
        <h2 id="resume-certifications">Top Certifications</h2>
        <div className="resume-page__certifications">
          {selectedCertifications.map((certificate) => (
            <article className="resume-page__certificate" key={certificate.id}>
              <img src={certificate.asset} alt={`Certificate image for ${certificate.title}`} loading="lazy" />
              <div>
                <h3>{certificate.title}</h3>
                {certificate.score && <p>{certificate.score}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-page__section resume-page__interests" aria-labelledby="resume-interests">
        <h2 id="resume-interests">Career Interests</h2>
        <ul>
          <li>Full-Stack Development</li>
          <li>AI/ML</li>
          <li>Automation</li>
        </ul>
      </section>

      <nav className="resume-page__actions" aria-label="Resume actions">
        <Link className="resume-page__action resume-page__action--primary" to="/contact">Contact</Link>
        <Link className="resume-page__action resume-page__action--secondary" to="/">Back to Portfolio</Link>
        {resumeAvailable
          ? <a className="resume-page__action resume-page__action--secondary" href={resumePdf} download="Shlok_Jaiswal_Resume.pdf">Download Resume</a>
          : <button className="resume-page__action resume-page__action--secondary" type="button" disabled>Resume temporarily unavailable</button>}
      </nav>
      {!resumeAvailable && <p className="resume-page__download-error" role="status">Please use Contact to request a copy of the resume.</p>}
    </article>
  )
}

export default ResumePage
