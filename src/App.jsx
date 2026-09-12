import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

import HeroSection from './components/sections/HeroSection'
import DemoSection from './components/sections/DemoSection'
import OverviewSection from './components/sections/OverviewSection'
import MultimodalSection from './components/sections/MultimodalSection'
import RepresentativeTasksSection from './components/sections/RepresentativeTasksSection'
import DownloadSection from './components/sections/DownloadSection'

/**
 * App is only a composition shell.
 *
 * To add a new page section later:
 *   1. create  src/components/sections/XxxSection.jsx
 *   2. add its content to src/data/site.js
 *   3. drop  <XxxSection />  into the <main> list below
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        <HeroSection />
        <DemoSection />
        <OverviewSection />
        <MultimodalSection />
        <RepresentativeTasksSection />
        <DownloadSection />
        {/* Future sections go here, one per line, in page order. */}
      </main>

      <Footer />
    </div>
  )
}
