import { Link } from 'react-router-dom'
import { siteConfig } from '../../content/siteConfig.js'

function AvailabilityStatus() {
  const { availability } = siteConfig

  if (!availability?.isOpen) return null

  const opportunityTypes = availability.opportunityTypes ?? []

  return (
    <aside className="availability-status" aria-label="Opportunity availability">
      <div className="availability-status__details">
        <p className="availability-status__message">
          <span className="availability-status__indicator" aria-hidden="true" />
          <strong>{availability.message}</strong>
          {availability.period && <span className="availability-status__period">{availability.period}</span>}
        </p>
        {opportunityTypes.length > 0 && (
          <ul className="availability-status__types" aria-label="Open to">
            {opportunityTypes.map((type) => <li key={type}>{type}</li>)}
          </ul>
        )}
      </div>
      <Link className="availability-status__link" to="/contact">
        {availability.ctaText || 'Contact me'}
        <span aria-hidden="true">↗</span>
      </Link>
    </aside>
  )
}

export default AvailabilityStatus
