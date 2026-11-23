function ExperienceCard({ entry }) {
  return (
    <article className={`experience-card${entry.emphasis === 'primary' ? ' experience-card--focus' : ''}`}>
      <div className="experience-card__heading">
        <div>
          <p className="experience-card__type">{entry.type}</p>
          <h3>{entry.title}</h3>
          {entry.organization && <p className="experience-card__organization">{entry.organization}</p>}
        </div>
        {entry.period && <p className="experience-card__period">{entry.period}</p>}
      </div>
      {entry.description && <p className="experience-card__description">{entry.description}</p>}
      {entry.technologies?.length > 0 && (
        <ul className="experience-card__technologies" aria-label={`${entry.title} technologies`}>
          {entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      )}
    </article>
  )
}

export default ExperienceCard
