import { Route, Routes, useLocation } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import EventHubPage from '../pages/EventHubPage.jsx'
import AIContentAutomationPage from '../pages/AIContentAutomationPage.jsx'
import ExperiencePage from '../pages/ExperiencePage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import FeedbackPage from '../pages/FeedbackPage.jsx'
import CertificationsPage from '../pages/CertificationsPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import ResumePage from '../pages/ResumePage.jsx'
import SchoolVanPage from '../pages/SchoolVanPage.jsx'

const routeMetadata = {
  '/': ['Shlok Jaiswal | Full-Stack Developer & AI Automation Enthusiast', 'Portfolio of Shlok Jaiswal, a Computer Science student building full-stack web applications and AI-assisted automation workflows.'],
  '/projects': ['Projects | Shlok Jaiswal', 'Explore Shlok Jaiswal’s selected projects in web development, event management, school transportation monitoring, and AI automation.'],
  '/projects/eventhub': ['EventHub Case Study | Shlok Jaiswal', 'A MERN-stack event platform for event discovery, bookings, and administration, with role-based access and email verification.'],
  '/projects/school-van': ['School Van Monitoring System | Shlok Jaiswal', 'A school transportation monitoring system with authorized live van tracking, student activity records, and pickup alerts.'],
  '/projects/ai-content-automation': ['AI Content Automation Pipeline | Shlok Jaiswal', 'An n8n workflow for AI-assisted content generation, human review, and distribution with connected tracking and notifications.'],
  '/experience': ['Experience | Shlok Jaiswal', 'Professional, leadership, and project experience of Shlok Jaiswal, a Computer Science student focused on software and AI automation.'],
  '/certifications': ['Certifications | Shlok Jaiswal', 'Browse Shlok Jaiswal’s course completion and participation certificates, organized by provider.'],
  '/contact': ['Contact | Shlok Jaiswal', 'Contact Shlok Jaiswal about project enquiries, collaboration, or technology, using the available contact options.'],
  '/resume': ['Resume | Shlok Ashish Jaiswal', 'Resume overview for Shlok Ashish Jaiswal, a Computer Science student specializing in Data Science and building full-stack applications and automation workflows.'],
  '/feedback': ['Portfolio Feedback | Shlok Jaiswal', 'Share feedback about Shlok Jaiswal’s portfolio through the feedback form.'],
}

function RouteSEO() {
  const { pathname } = useLocation()
  const [title, description] = routeMetadata[pathname] ?? ['Page Not Found | Shlok Jaiswal', 'The requested page could not be found.']
  return <SEO title={title} description={description} path={pathname} noindex={!routeMetadata[pathname] || pathname === '/feedback'} />
}

function App() {
  return (
    <>
      <RouteSEO />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="projects/eventhub" element={<EventHubPage />} />
          <Route path="projects/ai-content-automation" element={<AIContentAutomationPage />} />
          <Route path="projects/school-van" element={<SchoolVanPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
