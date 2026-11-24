import { Link } from 'react-router-dom'
import { siteConfig } from '../../content/siteConfig.js'

const currentYear = new Date().getFullYear()

const footerNavigation = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
  { to: '/feedback', label: 'Feedback' },
]

function Footer() {
  const { contact } = siteConfig

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <strong>Shlok Jaiswal</strong>
          <span>Personal portfolio</span>
        </div>
        <nav className="site-footer__navigation" aria-label="Footer navigation">
          {footerNavigation.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <nav className="site-footer__social" aria-label="Contact and social links">
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>Phone</a>
          {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {contact.github && <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>}
        </nav>
        <small className="site-footer__copyright">© {currentYear} Shlok Jaiswal</small>
      </div>
    </footer>
  )
}

export default Footer
