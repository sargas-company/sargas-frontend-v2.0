import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { RecentWorkButton } from '../ui/buttons/RecentWorkButton'

type MarqueeColumnProps = {
	images: string[]
	reverse?: boolean
	speed?: number
	delay?: number
}

const MarqueeColumn = ({ images, reverse = false, speed = 26, delay = 0 }: MarqueeColumnProps) => {
	const loopImages = [...images, ...images]

	return (
		<div className='relative flex-1 overflow-hidden rounded-[22px]'>
			<motion.div
				className='flex flex-col gap-4'
				animate={{ y: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
				transition={{
					duration: speed,
					ease: 'linear',
					repeat: Infinity,
					repeatType: 'loop' as const,
					repeatDelay: 0,
					delay,
				}}
			>
				{loopImages.map((src, index) => (
					<div
						key={`${src}-${index}`}
						className='relative aspect-[4/3] w-full overflow-hidden rounded-[22px]'
					>
						<img
							src={src}
							alt='Recent work preview'
							loading='lazy'
							className='h-full w-full object-cover'
						/>
					</div>
				))}
			</motion.div>
		</div>
	)
}

const leftColumnImages = [
	'https://framerusercontent.com/images/670uUrkwoRnzhCl9b3kEMwUmgE4.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png?width=1600&height=1200',
	'https://framerusercontent.com/images/670uUrkwoRnzhCl9b3kEMwUmgE4.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png?width=1600&height=1200',
]

const rightColumnImages = [
	'https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg?width=1120&height=840',
	'https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg?width=1120&height=840',
]

const AboutSectionFrame = ({ children }: { children: ReactNode }) => {
	return (
		<div className='relative w-full max-w-[1440px] rounded-[36px] border-8 border-white/40'>
			<div className='relative aspect-[9/16] w-full overflow-hidden rounded-[36px] bg-[#181818]'>
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
				<MarqueeColumn images={leftColumnImages} speed={60} />
				<MarqueeColumn images={rightColumnImages} reverse speed={60} />
			</div>

			<div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
				<RecentWorkButton />
			</div>
		</motion.div>
	)
}

export const AboutSection = () => {
	return (
		<section className='relative isolate flex min-h-screen w-full items-center justify-center'>
			<AboutSectionFrame>
				<AboutSectionContent />
			</AboutSectionFrame>
		</section>
	)
}
