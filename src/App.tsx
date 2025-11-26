import { RootLayout } from './layout'
import {AboutSection} from './components/AboutSection.tsx'
import './index.css'

function App() {

  return (
    <>
      <RootLayout>
        <main className="flex-1">
          <AboutSection />
        </main>
      </RootLayout>
    </>
  )
}

export default App
