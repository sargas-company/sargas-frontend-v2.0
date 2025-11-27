import { RootLayout } from './layout'
import { HeroSection } from './components/HeroSection'
import { Background } from './components/layout/Background'
import './index.css'
import { AboutSection } from './components/sections/AboutSection'
import ProcessSection from './components/sections/ProcessSection'

function App() {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			<Background />

			<RootLayout>
				<HeroSection />
				<AboutSection />
				<ProcessSection />
			</RootLayout>
		</div>
	)
}

export default App
