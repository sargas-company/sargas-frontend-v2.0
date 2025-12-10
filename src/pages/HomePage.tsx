import { HeroSection } from '../components/sections/HeroSection'
import { IntroTextSection } from '../components/sections/IntroTextSection'
import { AboutSection } from '../components/sections/AboutSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import ProcessSection from '../components/sections/ProcessSection.tsx'
import ProjectsSection from '../components/sections/ProjectsSection.tsx'
import { PricingSection } from '../components/sections/PricingSection.tsx'
import FAQSection from '../components/sections/FAQSection.tsx'
import AboutUsProjectsSection from '../components/sections/AboutUsProjectsSection'
import { RetainerAlternativeSection } from '../components/sections/RetainerAlternativeSection.tsx'

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<IntroTextSection />
			{/*<MultiStepInfoSection />*/}
			{/*<QuestionAnswerSection/>*/}
			<AboutUsProjectsSection />
			<ProcessSection />
			<BenefitsSection />
			{/*<ProjectsSection />*/}
			<PricingSection />
			{/*<RetainerAlternativeSection />*/}
			<FAQSection />
		</>
	)
}

export default HomePage
