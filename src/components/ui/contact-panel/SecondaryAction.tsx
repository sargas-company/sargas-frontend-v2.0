import { motion } from 'framer-motion'

type SecondaryActionProps = {
	onClick?: () => void
}

export function SecondaryAction({ onClick }: SecondaryActionProps) {
	return (
		<motion.button
			type='button'
			onClick={onClick}
			whileHover={{ y: -2, scale: 1.01 }}
			whileTap={{ scale: 0.98 }}
			className='inline-flex h-[54px] cursor-pointer items-center rounded-full border border-white/15 px-7 text-[16px] font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition'
		>
			<motion.span
				className='inline-flex items-center gap-2'
				whileHover={{ x: 2 }}
				transition={{ duration: 0.2 }}
			>
				<a href='https://calendly.com/contact-sargas/60-minute-meeting' target='_blank'>
					Book an intro call
				</a>
			</motion.span>
		</motion.button>
	)
}
