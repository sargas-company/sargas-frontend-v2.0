import { motion } from 'framer-motion'

const closeButtonVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: -8,
		rotate: -90,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		rotate: 0,
		transition: {
			duration: 0.4,
			delay: 0.12,
			ease: [0.22, 1, 0.36, 1] as const,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		y: -6,
		rotate: 90,
		transition: {
			duration: 0.2,
			ease: [0.4, 0, 1, 1] as const,
		},
	},
}

type CloseButtonProps = {
	handle: (value: boolean) => void
}

export const CloseButton = ({ handle }: CloseButtonProps) => {
	return (
		<motion.button
			type='button'
			aria-label='Close panel'
			variants={closeButtonVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			whileHover={{
				scale: 1.06,
				rotate: 90,
			}}
			whileTap={{
				scale: 0.94,
			}}
			onClick={() => handle(false)}
			className='absolute top-10 right-10 z-50 flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10 hover:text-white'
		>
			<span className='relative block h-9 w-9'>
				<motion.span
					className='absolute top-1/2 left-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current'
					initial={{ rotate: 0 }}
					animate={{ rotate: 45 }}
					transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
				/>
				<motion.span
					className='absolute top-1/2 left-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current'
					initial={{ rotate: 0 }}
					animate={{ rotate: -45 }}
					transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
				/>
			</span>
		</motion.button>
	)
}
