import { HeroSection } from '../components/sections/HeroSection'
import { IntroTextSection } from '../components/sections/IntroTextSection'
import { AboutSection } from '../components/sections/AboutSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import ProcessSection from '../components/sections/ProcessSection.tsx'
import ProjectsSection from '../components/sections/ProjectsSection.tsx'

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<IntroTextSection />
			<ProcessSection />
			<BenefitsSection />
			<ProjectsSection />
		</>
	)
}

export default HomePage
