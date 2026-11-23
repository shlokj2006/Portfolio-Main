import { Link } from 'react-router-dom'
import { projects } from '../content/projects.js'

const features = [
  {
    title: 'Live GPS tracking',
    description: 'Drivers share van coordinates during an active trip. The server validates and stores an accepted point before broadcasting it to authorized viewers.',
  },
  {
    title: 'Assigned-van visibility',
    description: 'Parents can monitor a van assigned to their linked student. The server checks school and student relationships before granting a live-trip subscription.',
  },
  {
    title: 'Pickup proximity alerts',
    description: 'A notification is created for linked parents when a fresh location update places an active morning-pickup van near a saved pickup point.',
  },
  {
    title: 'Pickup and drop-off records',
    description: 'Student movement events are OTP-verified, tied to an authorized trip, and timestamped on the server.',
  },
  {
    title: 'Driver trip controls',
    description: 'Drivers start and end trips for vans assigned to them and record student movement during those trips.',
  },
  {
    title: 'Admin dashboard and audit history',
    description: 'Administrators can review fleet and student totals, active trip progress, and timestamped student activity records.',
  },
]

const roleGroups = [
  {
    title: 'Admin',
    description: 'Oversees school transportation operations, fleet and student information, active trips, and student activity history.',
  },
  {
    title: 'Driver',
    description: 'Manages assigned trips, shares van location, and records verified student pickup and drop-off events.',
  },
  {
    title: 'Parent',
    description: 'Views linked student transportation status, monitors the assigned van, receives pickup approach alerts, and reviews activity history.',
  },
]

const technologyGroups = [
  { title: 'Frontend and mapping', technologies: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'OpenStreetMap'] },
  { title: 'Backend API', technologies: ['Node.js', 'Express.js'] },
  { title: 'Data storage', technologies: ['MongoDB', 'Mongoose'] },
  { title: 'Realtime and access', technologies: ['Socket.IO', 'JWT authentication', 'Role-based authorization'] },
]

const architectureSteps = [
  {
    title: 'Driver device',
    description: 'The driver starts an assigned trip and shares browser GPS coordinates through the authenticated location API.',
  },
  {
    title: 'Express API',
    description: 'The Node.js service validates coordinates, timestamps, and driver/van/trip ownership before accepting a location update.',
  },
  {
    title: 'MongoDB persistence',
    description: 'Accepted GPS points and student events are stored with server-received or occurred-at timestamps.',
  },
  {
    title: 'Authorized realtime updates',
    description: 'After persistence, Socket.IO broadcasts location and student-event updates to rooms authorized by server-side account and assignment checks.',
  },
  {
    title: 'Parent map and alerts',
    description: 'Parents see updates for linked students and assigned trips. Fresh morning-trip GPS points can trigger saved-pickup-point alerts.',
  },
]

function SchoolVanPage() {
  const project = projects.find((item) => item.id === 'school-van')

  if (!project) return null

  return (
    <article className="case-study" aria-labelledby="school-van-title">
      <header className="case-study__hero">
        <div className="case-study__hero-copy">
          <p className="page-placeholder__eyebrow">Project case study · Child transportation safety</p>
          <h1 id="school-van-title">{project.title}</h1>
          <p className="case-study__summary">
            A real-time transportation monitoring system that connects school administrators, drivers, and parents through van tracking and verified student movement records.
          </p>
          <ul className="case-study__tags" aria-label="Project type and stack">
            <li>Full-stack web application</li>
            <li>GPS and realtime monitoring</li>
          </ul>
          {project.githubUrl && (
            <nav className="case-study__hero-actions" aria-label="School Van project links">
              <a className="case-study__button case-study__button--primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="case-study__section" aria-labelledby="school-van-problem">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">01 · Context</p>
          <h2 id="school-van-problem">Problem Statement</h2>
        </div>
        <div className="case-study__panel case-study__narrative">
          <p className="case-study__hackathon-id">PS000121</p>
          <h3>Enhancing Child Safety and Transparency in School Transportation: A Van Monitoring System</h3>
          <p>
            Schools need a practical way to share van location and student pickup or drop-off status with the people responsible for each trip. The project is intended for existing schools, including rural settings where internet connectivity can be unreliable.
          </p>
          <p className="case-study__connectivity-note">
            The application reports stale or offline location states and refreshes data after reconnection. Offline tracking or queued synchronization is not claimed; live GPS and realtime updates require connectivity.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="school-van-solution">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">02 · Approach</p>
          <h2 id="school-van-solution">Solution Overview</h2>
        </div>
        <div className="case-study__panel case-study__narrative">
          <p>
            The system gives each role a focused view of school transportation: drivers share trip location and record student movement, parents monitor linked students and receive pickup approach alerts, and administrators review fleet activity and trip progress. GPS updates and student events are saved by the backend before authorized realtime updates are sent to connected users.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="school-van-features">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">03 · Capabilities</p>
          <h2 id="school-van-features">Key Features</h2>
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

      <section className="case-study__section" aria-labelledby="school-van-roles">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">04 · People</p>
          <h2 id="school-van-roles">User Roles</h2>
        </div>
        <div className="case-study__overview-grid">
          {roleGroups.map((role) => (
            <article className="case-study__panel" key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="school-van-stack">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">05 · Tools</p>
          <h2 id="school-van-stack">Technology Stack</h2>
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

      <section className="case-study__section" aria-labelledby="school-van-architecture">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">06 · Data flow</p>
          <h2 id="school-van-architecture">System Architecture and Realtime Flow</h2>
          <p className="case-study__section-intro">
            The flow below reflects the current API and Socket.IO contracts: driver location enters through the authenticated API, is validated and persisted, then reaches authorized parent and admin sessions.
          </p>
        </div>
        <ol className="case-study__architecture-flow">
          {architectureSteps.map((step) => (
            <li className="case-study__panel" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="case-study__panel case-study__architecture-note">
          <h3>Student event and alert flow</h3>
          <p>
            Pickup and drop-off events are OTP-verified and recorded against an authorized active trip. For pickup alerts, the backend evaluates fresh GPS updates against saved pickup points for assigned students on active morning trips, persists an alert, then notifies linked parent sessions.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="school-van-implementation">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">07 · Build</p>
          <h2 id="school-van-implementation">My Implementation and Technical Decisions</h2>
        </div>
        <div className="case-study__panel case-study__narrative">
          <p>
            I implemented trip-scoped driver workflows, including starting and ending assigned trips, submitting GPS updates, and recording student pickup and drop-off events. The backend checks driver, van, trip, school, and parent/student relationships rather than relying on client-side role visibility alone.
          </p>
          <p>
            Accepted location updates are checked for valid coordinates and ordering, stored with device and server timestamps, then broadcast. Parent subscriptions are authorized server-side, and clients refetch current state after reconnecting so socket events are not treated as the sole source of truth.
          </p>
        </div>
      </section>

      <section className="case-study__section" aria-labelledby="school-van-learning">
        <div className="case-study__section-heading">
          <p className="page-placeholder__eyebrow">08 · Reflection</p>
          <h2 id="school-van-learning">Challenges and Lessons Learned</h2>
        </div>
        <div className="case-study__overview-grid">
          <div className="case-study__panel">
            <h3>Reliable realtime updates</h3>
            <p>
              GPS data can arrive late, out of order, or stop arriving. The implementation validates timestamps, stores accepted updates before broadcasting, and exposes stale/offline state so a connected map does not imply that a location is current.
            </p>
          </div>
          <div className="case-study__panel">
            <h3>Privacy and recovery</h3>
            <p>
              Location visibility depends on server-verified trip and student relationships. Reconnection triggers a fresh API read; this improves recovery from interrupted connections but is not offline data synchronization.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study__section case-study__navigation" aria-labelledby="school-van-context">
        <div>
          <p className="page-placeholder__eyebrow">09 · Hackathon</p>
          <h2 id="school-van-context">Hackathon Context and Project Links</h2>
          <p className="case-study__section-intro">
            Problem statement PS000121: “Enhancing Child Safety and Transparency in School Transportation: A Van Monitoring System.”
          </p>
        </div>
        <Link className="case-study__back-link" to="/projects">Back to all projects</Link>
      </section>
    </article>
  )
}

export default SchoolVanPage
