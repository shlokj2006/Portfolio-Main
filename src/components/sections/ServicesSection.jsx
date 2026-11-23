import { Link } from 'react-router-dom'
import { services } from '../../content/services.js'
import ServiceCard from '../services/ServiceCard.jsx'

function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <header className="services-section__intro">
        <p className="page-placeholder__eyebrow">What I can help with</p>
        <h2 id="services-title">Services</h2>
        <p>Explore development, automation, and data-focused solution areas.</p>
      </header>

      <div className="services-grid">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>

      <Link className="services-contact-link" to="/contact">Discuss a project</Link>
    </section>
  )
}

export default ServicesSection
