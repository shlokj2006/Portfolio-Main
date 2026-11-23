import { useId, useState } from 'react'
import { skills } from '../../content/skills.js'

const skillsByName = new Map(skills.map((skill) => [skill.name, skill]))

function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const panelId = useId()

  return (
    <article className={`service-card${service.emphasis === 'primary' ? ' service-card--focus' : ''}`}>
      <h3 className="service-card__title">
        <button
          className="service-card__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          <span>{service.title}</span>
          <span className="service-card__icon" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
        </button>
      </h3>
      <p className="service-card__description">{service.description}</p>
      <div className="service-card__details" id={panelId} hidden={!isExpanded}>
        <div className="service-card__detail-group">
          <h4>Capabilities</h4>
          <ul>
            {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>
        <div className="service-card__detail-group">
          <h4>Relevant technologies</h4>
          <ul className="service-card__technology-list" aria-label={`${service.title} technologies`}>
            {service.technologies.map((technology) => {
              const isLearning = skillsByName.get(technology)?.learningStatus

              return (
                <li key={technology}>
                  {technology}{isLearning && <span className="service-card__learning-label"> (Currently Learning)</span>}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ServiceCard
