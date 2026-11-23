import { useId, useState } from 'react'

function CertificationCard({ certificate }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const previewId = useId()
  const isPdf = certificate.format === 'pdf'

  return (
    <article className={`certification-card${certificate.featured ? ' certification-card--featured' : ''}`}>
      {isPdf ? (
        <div className="certification-card__document" aria-hidden="true">
          <span>PDF</span>
          <span>Certificate document</span>
        </div>
      ) : (
        <a
          className="certification-card__image-link"
          href={certificate.asset}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full certificate: ${certificate.title}`}
        >
          <img
            className="certification-card__image"
            src={certificate.asset}
            alt={`Certificate: ${certificate.title}`}
            loading="lazy"
          />
        </a>
      )}

      <div className="certification-card__content">
        <div className="certification-card__heading">
          <div>
            {certificate.featured && <p className="certification-card__eyebrow">Featured result</p>}
            <h3>{certificate.title}</h3>
          </div>
          {certificate.score && <span className="certification-card__score">{certificate.score}</span>}
        </div>
        <p className="certification-card__provider">{certificate.provider}</p>
        <ul className="certification-card__meta" aria-label="Certificate details">
          {certificate.date && <li>{certificate.date}</li>}
          {certificate.duration && <li>{certificate.duration}</li>}
          {certificate.type && <li>{certificate.type}</li>}
        </ul>

        {certificate.details?.length > 0 && (
          <details className="certification-card__details">
            <summary>Credential details</summary>
            <dl>
              {certificate.details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </details>
        )}

        <div className="certification-card__actions">
          {isPdf && (
            <button
              className="certification-card__preview-toggle"
              type="button"
              aria-expanded={previewOpen}
              aria-controls={previewId}
              onClick={() => setPreviewOpen((open) => !open)}
            >
              {previewOpen ? 'Hide preview' : 'Preview certificate'}
            </button>
          )}
          <a href={certificate.asset} target="_blank" rel="noreferrer">
            {isPdf ? 'Open PDF in new tab' : 'View certificate'}
          </a>
        </div>

        {isPdf && previewOpen && (
          <iframe
            className="certification-card__pdf-preview"
            id={previewId}
            src={certificate.asset}
            title={`PDF preview: ${certificate.title}`}
            loading="lazy"
          />
        )}
      </div>
    </article>
  )
}

export default CertificationCard
