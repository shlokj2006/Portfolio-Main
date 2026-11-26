import { Link } from 'react-router-dom'
import profilePhoto from '../../../assets/images/Profilephoto.jpg'
import AvailabilityStatus from './AvailabilityStatus.jsx'
import DeveloperTerminal from '../terminal/DeveloperTerminal.jsx'

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">Full-Stack Developer · AI Automation Enthusiast</p>
        <h1 id="hero-title">Engineering Web Experiences. Automating What Comes Next.</h1>
        <p className="hero-description">
          I’m Shlok Jaiswal, a Computer Science student building full-stack web
          experiences and exploring AI automation to solve practical problems.
        </p>
        <div className="hero-actions">
          <Link className="hero-button hero-button--primary" to="/projects">
            View Projects
          </Link>
          <Link className="hero-button hero-button--secondary" to="/contact">
            Contact Me
          </Link>
        </div>
        <AvailabilityStatus />
      </div>

      <div className="hero-art hero-art--photo">
        <div className="hero-art__orbit hero-art__orbit--outer" aria-hidden="true" />
        <div className="hero-art__orbit hero-art__orbit--inner" aria-hidden="true" />
        <div className="hero-art__glow" aria-hidden="true" />
        <img
          className="hero-art__photo"
          src={profilePhoto}
          alt="Portrait of Shlok Jaiswal."
          width="1280"
          height="720"
          fetchPriority="high"
        />
      </div>
      <DeveloperTerminal />
    </section>
  )
}

export default HeroSection
