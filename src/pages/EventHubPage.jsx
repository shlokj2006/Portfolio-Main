import { Link } from 'react-router-dom'
import { projects } from '../content/projects.js'

const features = [
  {
    title: 'Account access and verification',
    description: 'User registration and login use JWT authentication, bcrypt password hashing, and email OTP verification.',
  },
  {
    title: 'Role-based experiences',
    description: 'Admin and regular-user roles support different event-management and attendee workflows.',
  },
  {
    title: 'Event management',
    description: 'Admins can create and manage events for users to browse.',
  },
  {
    title: 'Event booking',
    description: 'Users can book events through the platform and follow booking status changes.',
  },
  {
    title: 'Booking status management',
    description: 'Booking status is managed as part of the event reservation workflow.',
  },
  {
    title: 'Manual payment handling',
    description: 'Admins handle payment manually. The project does not use a third-party payment gateway.',
  },
]

const technologyGroups = [
  { title: 'Frontend', technologies: ['React.js'] },
  { title: 'Backend', technologies: ['Node.js', 'Express.js'] },
  { title: 'Database', technologies: ['MongoDB', 'MongoDB Atlas'] },
  { title: 'Authentication & verification', technologies: ['JWT', 'bcrypt', 'Email OTP'] },
]

function EventHubPage() {
  const project = projects.find((item) => item.id === 'eventhub')

  if (!project) return null

  return (
    <article className="case-study" aria-labelledby="eventhub-title">
      <header className="case-study__hero">
        <div className="case-study__hero-copy">
          <p className="page-placeholder__eyebrow">Project case study · Event management</p>
          <h1 id="eventhub-title">{project.title}</h1>
          <p className="case-study__summary">
            A MERN-stack platform for event discovery, booking, and administration, with role-aware access and email verification.
          </p>
          <ul className="case-study__tags" aria-label="Project type and stack">
            {project.technologies.map((technology) => <li key={technology}>{technology} Stack</li>)}
            <li>{project.category}</li>
          </ul>
          <nav className="case-study__hero-actions" aria-label="EventHub project links">
            {project.demoUrl && (
              <a className="case-study__button case-study__button--primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a className="case-study__button case-study__button--secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            )}
          </nav>
        </div>
      </header>

      <section className="case-study__section" aria-labelledby="eventhub-overview">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">01 · Context</p>
          <h2 id="eventhub-overview">Overview</h2>
        </div>
        <div className="case-study__overview-grid">
          <div className="case-study__panel">
            <h3>Problem addressed</h3>
            <p>
              Event operations and attendee reservations involve related but distinct workflows. EventHub brings event
              publishing, browsing, booking, and booking-status handling together in one application.
            </p>
          </div>
          <div className="case-study__panel">
            <h3>Intended users</h3>
            <p>
              The platform is designed for administrators responsible for event operations and attendees who need to find
              events and manage their bookings.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="eventhub-features">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">02 · Capabilities</p>
          <h2 id="eventhub-features">Key Features</h2>
        </div>
        <div className="case-study__feature-grid">
          {features.map((feature) => (
            <article className="case-study__panel case-study__feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="eventhub-stack">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">03 · Tools</p>
          <h2 id="eventhub-stack">Technology Stack</h2>
        </div>
        <div className="case-study__stack-grid">
          {technologyGroups.map((group) => (
            <section className="case-study__panel" key={group.title} aria-label={group.title}>
              <h3>{group.title}</h3>
              <ul className="case-study__tags">
                {group.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="eventhub-architecture">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">04 · Structure</p>
          <h2 id="eventhub-architecture">System Architecture</h2>
          <p className="case-study__section-intro">
            High-level view based on the verified stack and feature set. Implementation details such as endpoints, data schemas,
            token storage, and the email provider are not included here.
          </p>
        </div>
        <ol className="case-study__architecture-flow">
          <li className="case-study__panel">
            <h3>React application</h3>
            <p>Provides the event browsing, account, admin, and booking experiences for users.</p>
          </li>
          <li className="case-study__panel">
            <h3>Express API on Node.js</h3>
            <p>Supports application workflows and JWT-based authentication across admin and regular-user roles.</p>
          </li>
          <li className="case-study__panel">
            <h3>MongoDB</h3>
            <p>Provides the application database, with MongoDB Atlas included in the verified stack.</p>
          </li>
          <li className="case-study__panel">
            <h3>Verification and payments</h3>
            <p>Email OTP supports account verification. Payment handling is manual through admins, without a payment gateway.</p>
          </li>
        </ol>
      </section>

      <section className="case-study__section" aria-labelledby="eventhub-implementation">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">05 · Build</p>
          <h2 id="eventhub-implementation">My Implementation</h2>
        </div>
        <div className="case-study__panel case-study__narrative">
          <p>
            I built EventHub as a full-stack event and booking application. Account creation and login are supported by
            password hashing with bcrypt, JWT authentication, and email OTP verification. Admins can create and manage
            events, while regular users browse and book them. Booking status is handled within that workflow, and payment
            review remains a manual admin task rather than a third-party checkout integration.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="eventhub-learning">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">06 · Reflection</p>
          <h2 id="eventhub-learning">Challenges and Learning</h2>
        </div>
        <div className="case-study__overview-grid">
          <div className="case-study__panel">
            <h3>Engineering consideration</h3>
            <p>
              The feature set requires clear boundaries between administrator controls and regular-user actions, especially
              across event management, bookings, and manual payment handling.
            </p>
          </div>
          <div className="case-study__panel">
            <h3>Learning</h3>
            <p>
              EventHub brings authentication, role-aware workflows, and booking status together in one product.</p>
          </div>
        </div>
      </section>

      <section className="case-study__section case-study__navigation" aria-labelledby="eventhub-navigation">
        <div>
          <p className="page-placeholder__eyebrow">07 · Continue exploring</p>
          <h2 id="eventhub-navigation">Project Navigation</h2>
          <p className="case-study__section-intro">Explore other work in the portfolio.</p>
        </div>
        <Link className="case-study__back-link" to="/projects">Back to all projects</Link>
      </section>
    </article>
  )
}

export default EventHubPage
