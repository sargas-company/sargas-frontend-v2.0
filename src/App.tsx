import { RootLayout } from './layout'
import { IntroSection } from './components/IntroSection'
import './index.css'

function App() {

  return (
    <>
      <RootLayout>
        <main className="flex-1">
          <IntroSection />
        </main>
      </RootLayout>
    </>
  )
}

export default App
