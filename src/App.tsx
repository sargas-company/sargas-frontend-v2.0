import { RootLayout } from './layout'
import { HeroSection } from './components/HeroSection'
import './index.css'

function App() {

  return (
    <>
      <RootLayout>
        <>
          <HeroSection />
        </>
      </RootLayout>
    </>
  )
}

export default App
