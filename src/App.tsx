import { RootLayout } from './layout'
import { HeroSection } from './components/HeroSection'
import { IntroTextSection } from './components/IntroTextSection'
import { Background } from './components/layout/Background'
import './index.css'
import { AboutSection } from './components/sections/AboutSection'

function App() {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			<Background />

			<RootLayout>
				<HeroSection />
				<AboutSection />
        		<IntroTextSection />
				<div className='h-[1000px]'>s</div>
			</RootLayout>
		</div>
	)
}

export default App
