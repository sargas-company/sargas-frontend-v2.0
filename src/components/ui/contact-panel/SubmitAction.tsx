import { motion } from 'framer-motion'
import { useState } from 'react'

type SubmitActionProps = {
	disabled?: boolean
	loading?: boolean
}

const spring = {
	type: 'spring' as const,
	stiffness: 340,
	damping: 28,
	mass: 0.7,
}

export function SubmitAction({ disabled, loading }: SubmitActionProps) {
	const [hovered, setHovered] = useState(false)

	const interactive = !disabled && !loading
	const showHover = interactive && hovered

	return (
		<motion.button
			type='submit'
			disabled={disabled || loading}
			onHoverStart={() => {
				if (interactive) setHovered(true)
			}}
			onHoverEnd={() => setHovered(false)}
			whileTap={interactive ? { scale: 0.985 } : {}}
			className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
		>
			<motion.span
				initial={false}
				animate={{
					width: showHover ? 50 : 0,
					opacity: showHover ? 1 : 0,
					scale: showHover ? 1 : 0.82,
					marginRight: showHover ? 12 : 0,
				}}
				transition={spring}
				className='hidden sm:flex h-[50px] items-center justify-center overflow-hidden rounded-full bg-[rgb(41,91,193)] text-white shadow-[0_8px_24px_rgba(41,91,193,0.28)]'
			>
				<motion.span
					initial={false}
					animate={{
						x: showHover ? 0 : -6,
						opacity: showHover ? 1 : 0,
					}}
					transition={{ duration: 0.2 }}
					className='text-[24px] leading-none'
				>
					→
				</motion.span>
			</motion.span>

			<motion.span
				layout
				initial={false}
				animate={{
					x: showHover ? 3 : 0,
					backgroundColor: showHover ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.06)',
				}}
				transition={spring}
				className='xs:w-full sm:w-auto inline-flex h-[58px] items-center rounded-full px-7 text-[18px] font-semibold text-white xs:justify-center'
			>
				<motion.span
					initial={false}
					animate={loading ? { opacity: [1, 0.6, 1] } : { opacity: 1 }}
					transition={loading ? { duration: 0.9, repeat: Infinity } : { duration: 0.2 }}
				>
					{loading ? 'Sending...' : 'Submit'}
				</motion.span>
			</motion.span>

			<motion.span
				initial={false}
				animate={{
					width: showHover ? 0 : 50,
					opacity: showHover ? 0 : 1,
					scale: showHover ? 0.82 : 1,
					marginLeft: showHover ? 0 : 12,
				}}
				transition={spring}
				className='xs:hidden sm:flex h-[50px] items-center justify-center overflow-hidden rounded-full bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.08)]'
			>
				<motion.span
					initial={false}
					animate={{
						x: showHover ? 6 : 0,
						opacity: showHover ? 0 : 1,
					}}
					transition={{ duration: 0.2 }}
					className='text-[24px] leading-none'
				>
					→
				</motion.span>
			</motion.span>
		</motion.button>
	)
}
