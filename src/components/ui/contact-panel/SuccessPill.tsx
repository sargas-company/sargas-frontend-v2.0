import { motion } from 'framer-motion'

type SuccessPillProps = {
	text?: string
}

export function SuccessPill({ text = 'Thank you! We’ll be in touch soon' }: SuccessPillProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(8px)' }}
			animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
			exit={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(8px)' }}
			transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
			className='mt-15 relative inline-flex h-[64px] min-w-[520px] items-center justify-between rounded-full border border-[#2F7BFF] bg-[rgba(28,52,102,0.24)] px-7 text-white shadow-[0_0_0_1px_rgba(47,123,255,0.18),0_0_28px_rgba(47,123,255,0.12)] backdrop-blur-xl'
		>
			<div className='pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(47,123,255,0.14)_0%,rgba(47,123,255,0.06)_45%,rgba(47,123,255,0.12)_100%)]' />

			<span className='relative z-10 pr-6 text-[18px] font-medium tracking-[-0.02em] text-white/95'>
				{text}
			</span>

			<motion.div
				initial={{ opacity: 0, scale: 0.72 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.12, duration: 0.22 }}
				className='relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#2F7BFF] bg-[rgba(47,123,255,0.08)]'
			>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4 8.2L6.6 10.8L12 5.4'
						stroke='#2F7BFF'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</motion.div>
		</motion.div>
	)
}
