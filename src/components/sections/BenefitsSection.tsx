import { SectionTitle } from '../ui/SectionTitle'
import { BenefitCard } from '../ui/BenefitCard'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'



const benefits = [
	{
		title: 'Strida',
		chips: ['portfolio', 'sidebar'],
		link: '/work/strida',
		img: Webild,
	},
	{
		title: 'Bravo',
		chips: ['UI/UX', 'App'],
		link: '/work/bravo',
		img: Sophia,
	},
	{
		title: 'Nitro',
		chips: ['Design System', 'Web'],
		link: '/work/nitro',
		img: Services,
	},
	{
		title: 'Fargo',
		chips: ['SaaS', 'Web'],
		link: '/work/fargo',
		img: Ai4u,
	},
]

export const BenefitsSection = () => {
	return (
		<div
			className='flex flex-col items-center gap-6 pb-20 md:gap-7 md:pb-54 xl:gap-12 xl:pb-50'
			id='work'
		>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Projects' />
				<h2 className='text-[28px] leading-[1.4] tracking-[-0.04em] break-words whitespace-pre-wrap md:text-[48px]'>
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
