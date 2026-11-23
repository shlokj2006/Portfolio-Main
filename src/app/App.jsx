import { Route, Routes } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import EventHubPage from '../pages/EventHubPage.jsx'
import AIContentAutomationPage from '../pages/AIContentAutomationPage.jsx'
import ExperiencePage from '../pages/ExperiencePage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import CertificationsPage from '../pages/CertificationsPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import ResumePage from '../pages/ResumePage.jsx'
import SchoolVanPage from '../pages/SchoolVanPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
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
  )
}

export default App
