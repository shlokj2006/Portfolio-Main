import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import CommandPalette from './CommandPalette.jsx'
import { CommandPaletteProvider } from './CommandPaletteContext.jsx'

function SiteLayout() {
  return (
    <CommandPaletteProvider>
      <div className="site-shell">
        <ScrollProgress />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="site-main" tabIndex={-1}>
          <div className="page-container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
      <CommandPalette />
    </CommandPaletteProvider>
  )
}

export default SiteLayout
