import CertificationCard from '../components/certifications/CertificationCard.jsx'
import { certificationGroups } from '../content/certifications.js'

function CertificationsPage() {
  const visibleGroups = certificationGroups.filter((group) => group.certificates.length > 0)

  return (
    <div className="certifications-page">
      <header className="certifications-page__intro">
        <p className="page-placeholder__eyebrow">Learning and recognition</p>
        <h1>Certifications</h1>
        <p>Certificates of course completion and participation, grouped by provider.</p>
      </header>

      {visibleGroups.map((group) => (
        <section className="certification-group" key={group.id} aria-labelledby={`certification-group-${group.id}`}>
          <header className="certification-group__heading">
            <h2 id={`certification-group-${group.id}`}>{group.title}</h2>
            <span>{group.certificates.length} {group.certificates.length === 1 ? 'certificate' : 'certificates'}</span>
          </header>
          <div className="certification-grid">
            {group.certificates.map((certificate) => (
              <CertificationCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CertificationsPage
