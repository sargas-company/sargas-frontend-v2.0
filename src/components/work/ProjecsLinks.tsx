import { BenefitCard } from '../ui/BenefitCard'
import { SectionTitle } from '../ui/SectionTitle'

type ProjecsLinksProps = {
	links: {
		title: string
		chips: string[]
		link: string
		img: string
	}[]
}

export const ProjectsLinks = ({ links }: ProjecsLinksProps) => {
	return (
		<div className='flex flex-col gap-6 pb-10 md:gap-7 md:pb-14 xl:gap-12 xl:pb-20'>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='See also' />
				<h2 className='text-[28px] leading-[1.4em] tracking-[-.04em] md:text-[32px] xl:text-[48px]'>
					More <span className='text-black/50'>Projects</span>
				</h2>
			</div>
			<div className='flex flex-col gap-8 md:flex-row md:gap-10 xl:gap-15'>
				{links.map((item, index) => {
					return <BenefitCard {...item} key={index} />
				})}
			</div>
		</div>
	)
}
