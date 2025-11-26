import { RootLayout } from './layout'
import { HeroSection } from './components/HeroSection'
import { Background } from './components/layout/Background'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />

      <RootLayout>
        <HeroSection />
      </RootLayout>
    </div>
  )
}

export default App
