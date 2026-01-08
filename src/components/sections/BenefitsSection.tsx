import { SectionTitle } from '../ui/SectionTitle'
import { BenefitCard } from '../ui/BenefitCard'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

const benefits = [
	{
		title: 'Webild',
		chips: ['AI', 'SaaS', 'Prompt-to-Website', 'Builder'],
		link: '/work/webild',
		img: Webild,
	},
	{
		title: 'Graffiti Chronicles',
		chips: ['Cultural Heritage', 'Digital Exhibition'],
		link: '/work/graffiti',
		img: Sophia,
	},
	{
		title: 'Local Services App',
		chips: ['React Native', 'Marketplace', 'Maps', 'Mobile App'],
		link: '/work/local-service',
		img: Services,
	},
	{
		title: 'AI Bots Builder',
		chips: ['AI Agents', 'Automation', 'SaaS', 'Integrations'],
		link: '/work/ai-bots',
		img: Ai4u,
	},
]

export const BenefitsSection = () => {
	return (
		<div
			className='md:pb-54 xl:pb-50 flex flex-col items-center gap-6 pb-20 md:gap-7 xl:gap-12'
			id='work'
		>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Projects' />
				<h2 className='whitespace-pre-wrap break-words text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
					Recent Case Studies
				</h2>
			</div>
			<div className='relative flex h-min w-full flex-col items-start justify-start gap-8 p-0 md:grid md:auto-rows-[minmax(0,1fr)] md:grid-cols-[repeat(2,minmax(50px,1fr))] md:justify-center md:gap-[60px]'>
				{benefits.map((benefit, index) => {
					return <BenefitCard {...benefit} key={index} />
				})}
			</div>
		</div>
	)
}
