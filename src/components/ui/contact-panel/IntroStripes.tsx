import { motion } from 'framer-motion'

export const IntroStripes = () => {
	const ease = [0.22, 0.01, 0.86, 1] as const

	return (
		<div className='pointer-events-none absolute inset-0 z-40 overflow-hidden rounded-[34px]'>
			<motion.div
				className='absolute inset-y-0 right-0 z-[1] rounded-l-[30px] bg-[#1682ff]'
				initial={{
					x: '0%',
					width: '0%',
					opacity: 1,
				}}
				animate={{
					x: 0,
					width: ['0%', '60%', '100%'],
				}}
				transition={{
					x: {
						duration: 1,
						ease,
					},
					width: {
						duration: 1,
						times: [0, 0.15, 0.45],
						ease,
					},
				}}
				style={{
					willChange: 'transform, width',
				}}
			/>

			<motion.div
				className='absolute inset-y-0 right-0 z-[2] rounded-l-[30px] bg-[#363a41]'
				initial={{
					x: '0%',
					width: '0%',
					opacity: 1,
				}}
				animate={{
					x: 0,
					width: ['0%', '50%', '100%'],
				}}
				transition={{
					x: {
						duration: 1,
						ease: ease,
					},
					width: {
						duration: 1,
						times: [0, 0.2, 0.5],
						ease: ease,
					},
				}}
				style={{
					willChange: 'transform, width',
				}}
			/>

			<motion.div
				className='absolute inset-y-0 right-0 z-[3] rounded-l-[30px] bg-[rgba(24,24,24)]'
				initial={{
					x: '0%',
					width: '0%',
					opacity: 1,
				}}
				animate={{
					x: 0,
					width: ['0%', '30%', '100%'],
				}}
				transition={{
					x: {
						duration: 1,
						ease: ease,
					},
					width: {
						duration: 1,
						times: [0, 0.25, 0.55],
						ease: ease,
					},
				}}
				style={{
					willChange: 'transform, width',
				}}
			/>
		</div>
	)
}
