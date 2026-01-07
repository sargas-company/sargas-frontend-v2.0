import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { RecentWorkButton } from '../ui/buttons/RecentWorkButton'

import ai4u from '../../assets/case_studies/ai4u.png'
import astrology from '../../assets/case_studies/astrology.png'
import black from '../../assets/case_studies/black_e-com.png'
import dios from '../../assets/case_studies/dios.png'
import localService from '../../assets/case_studies/local_service.png'
import mexStar from '../../assets/case_studies/mex_star.png'
import sophia from '../../assets/case_studies/sophia.png'
import tangle from '../../assets/case_studies/tangle.png'
import taycan from '../../assets/case_studies/taycan.png'
import webild from '../../assets/case_studies/webild.png'
import iketo from '../../assets/case_studies/iketo.png'
import edtech from '../../assets/case_studies/ed_tech.png'


type MarqueeColumnProps = {
	images: string[]
	reverse?: boolean
	speed?: number
}

const MarqueeColumn = ({ images, reverse = false, speed = 26 }: MarqueeColumnProps) => {
	const MULTIPLIER = 20
	const loopImages = Array.from({ length: MULTIPLIER }).flatMap(() => images)

	return (
		<div className='relative flex-1 overflow-hidden rounded-[22px]'>
			<div
				className='animate-vertical-marquee flex flex-col gap-4'
				style={{
					animationDuration: `${speed}s`,
					animationDirection: reverse ? 'reverse' : 'normal',
				}}
			>
				{loopImages.map((src, index) => (
					<div
						key={index}
						className='relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[22px]'
					>
						<img
							src={src}
							alt='Recent work preview'
							loading='lazy'
							className='pointer-events-none h-full w-full object-cover select-none'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default MarqueeColumn

const leftColumnImages = [
	`${ai4u}`,
	`${webild}`,
	`${astrology}`,
	`${taycan}`,
	`${dios}`,
	`${tangle}`
]

const rightColumnImages = [
	`${localService}`,
	`${sophia}`,
	`${mexStar}`,
	`${iketo}`,
	`${black}`,
	`${edtech}`,
]

const AboutSectionFrame = ({ children }: { children: ReactNode }) => {
	return (
		<div className='relative w-full max-w-[1440px] rounded-[36px] border-8 border-white/40'>
			<div className='relative aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-[#181818]'>
				{children}
			</div>
		</div>
	)
}

const AboutSectionContent = () => {
	return (
		<motion.div
			className='relative h-full'
			initial={{ opacity: 0, y: 80 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 1.6,
				duration: 1.4,
				ease: 'easeInOut',
			}}
		>
			<div className='relative flex h-full flex-col gap-4 px-5 md:flex-row md:gap-5'>
				<div className='pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/15 to-transparent' />

				<MarqueeColumn images={leftColumnImages} speed={500} />
				<MarqueeColumn images={rightColumnImages} reverse speed={500} />
			</div>

			<div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
				<RecentWorkButton />
			</div>
		</motion.div>
	)
}

export const AboutSection = () => {
	return (
		<section
			className='relative isolate flex h-auto min-h-[60vh] w-full items-center justify-center'
		>
			<AboutSectionFrame>
				<AboutSectionContent />
			</AboutSectionFrame>
		</section>
	)
}
