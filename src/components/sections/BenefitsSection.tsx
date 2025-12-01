import { SectionTitle } from '../ui/SectionTitle'
import { BenefitCard } from '../ui/BenefitCard'
import StridaImg from '../../assets/Strida.avif'
import BravoImg from '../../assets/Bravo.avif'
import NitroImg from '../../assets/Nitro.avif'
import FargoImg from '../../assets/Fargo.avif'

const benefits = [
	{
		title: 'Strida',
		chips: ['portfolio', 'sidebar'],
		link: '/work/strida',
		img: StridaImg,
	},
	{
		title: 'Bravo',
		chips: ['UI/UX', 'App'],
		link: '/work/bravo',
		img: BravoImg,
	},
	{
		title: 'Nitro',
		chips: ['Design System', 'Web'],
		link: '/work/nitro',
		img: NitroImg,
	},
	{
		title: 'Fargo',
		chips: ['SaaS', 'Web'],
		link: '/work/fargo',
		img: FargoImg,
	},
]

export const BenefitsSection = () => {
	return (
		<div className='flex flex-col items-center gap-6 py-10 md:gap-7 md:py-14 xl:gap-12 xl:py-30'>
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
