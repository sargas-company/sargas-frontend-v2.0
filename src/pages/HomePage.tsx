import { HeroSection } from '../components/sections/HeroSection'
import { IntroTextSection } from '../components/sections/IntroTextSection'
import { AboutSection } from '../components/sections/AboutSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<IntroTextSection />
			<BenefitsSection />
		</>
	)
}

export default HomePage
