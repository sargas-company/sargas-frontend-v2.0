import { motion } from 'framer-motion'
import { RecentWorkIcon } from '../icons/RecentWorkIcon'

const tooltipVariants = {
	initial: {
		opacity: 0,
		rotate: -35,
		x: -60,
		y: -18,
	},

	inView: {
		opacity: 1,
		rotate: 21,
		x: 50,
		y: 7,
		transition: {
			duration: 0.5,
			//ease: [0.23, 0.9, 0.32, 1],
			delay: 0.2,
		},
	},
	hover: {
		x: 56,
		y: 3,
		rotate: 21,
		transition: {
			duration: 0.5,
			// ease: [0.23, 0.9, 0.32, 1],
		},
	},
}

const RecentWorkTooltip = () => {
	return (
		<motion.div
			variants={tooltipVariants}
			className='pointer-events-none absolute -top-[66px] left-[-42px] inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] leading-[1.2] font-semibold text-white'
			style={{ willChange: 'transform, opacity' }}
		>
			<span className='absolute bottom-[-7px] left-1/2 block h-4 w-4 -translate-x-1/2 rotate-45 bg-black' />
			See Recent Work
		</motion.div>
	)
}

const RecentWorkBadge = () => {
	return (
		<div className='flex h-9 w-9 items-center justify-center rounded-full text-black'>
			<RecentWorkIcon className='h-full w-full' />
		</div>
	)
}

export const RecentWorkButton = () => {
	return (
		<motion.a
			href='#work'
			className='group relative flex h-32 w-32 items-center justify-center rounded-full border border-white/80 bg-white/75 text-black backdrop-blur-[2px] transition-colors duration-600 hover:bg-white'
			initial='initial'
			whileInView='inView'
			whileHover='hover'
			viewport={{ once: true, amount: 0.6 }}
		>
			<RecentWorkTooltip />

			<span className='absolute inset-0 rounded-full border border-white/60' />
			<RecentWorkBadge />
		</motion.a>
	)
}
