import { HeroSection } from '../components/sections/HeroSection'
import { IntroTextSection } from '../components/sections/IntroTextSection'
import { AboutSection } from '../components/sections/AboutSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import ProcessSection from '../components/sections/ProcessSection.tsx'
import { PricingSection } from '../components/sections/PricingSection.tsx'
import FAQSection from '../components/sections/FAQSection.tsx'
import AboutUsProjectsSection from '../components/sections/AboutUsProjectsSection'
import ContactPanel from '../components/ui/contact-panel/ContactPanel'
import { useState } from 'react'

export const HomePage = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<ContactPanel open={open} setOpen={setOpen} />
			<HeroSection setOpen={setOpen} />
			<AboutSection />
			<IntroTextSection />
			<AboutUsProjectsSection />
			<ProcessSection />
			<BenefitsSection />
			<PricingSection />
			<FAQSection />
		</>
	)
}

export default HomePage
