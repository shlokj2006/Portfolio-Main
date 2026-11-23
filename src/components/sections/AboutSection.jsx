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
