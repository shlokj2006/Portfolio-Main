import { aboutProfile } from '../../content/about.js'

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-section__intro">
        <p className="page-placeholder__eyebrow">About</p>
        <h2 id="about-title">From data to useful software.</h2>
        <p>{aboutProfile.introduction}</p>
      </div>

      <div className="about-section__layout">
        <div className="about-section__details">
          <article className="about-card about-card--education">
            <p className="about-card__eyebrow">Education</p>
            <h3>{aboutProfile.education.qualification}</h3>
            <p>{aboutProfile.education.institution}</p>
            <div className="about-card__facts">
              <span>{aboutProfile.education.dates}</span>
              <span>GPA {aboutProfile.education.gpa}</span>
              <span>{aboutProfile.education.distinction}</span>
            </div>
          </article>

          <article className="about-card">
            <p className="about-card__eyebrow">Experience & leadership</p>
            <ul className="about-role-list">
              {aboutProfile.roles.map((role) => (
                <li key={role.title}>
                  <h3>{role.title}</h3>
                  <p>{role.organization}</p>
                </li>
              ))}
            </ul>
          </article>

          <div className="about-section__supporting">
            <article className="about-card">
              <p className="about-card__eyebrow">Current focus</p>
              <ul className="about-tag-list">
                {aboutProfile.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </article>
            <article className="about-card">
              <p className="about-card__eyebrow">Outside the screen</p>
              <ul className="about-interest-list">
                {aboutProfile.interests.map((interest) => (
                  <li key={interest.name}>
                    <h3>{interest.name}</h3>
                    <p>{interest.description}</p>
                    {interest.link && (
                      <a
                        className="about-interest-list__link"
                        href={interest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Explore artwork by ${interest.linkLabel} on Instagram (opens in a new tab)`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                        <span>{interest.linkLabel}</span>
                        <span className="about-interest-list__link-label">Explore my artwork</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
