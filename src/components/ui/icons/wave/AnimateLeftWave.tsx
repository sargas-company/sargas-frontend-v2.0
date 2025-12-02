import { motion } from 'framer-motion'

type IconProps = {
	size?: number | string
	color?: string
	strokeWidth?: number
	className?: string
	duration?: number
	delay?: number
}

export const AnimateLeftWave = ({
	size = '100%',
	color = 'rgb(255, 55, 0)',
	className = '',
	strokeWidth = 1,
	duration = 3,
	delay = 2.8,
}: IconProps) => {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 247 69'
			className={className}
			fill='none'
		>
			<motion.path
				d='M 10.716 56.236 C 10.716 56.236 38.876 9.087 88.573 3.406 C 138.271 -2.276 172.885 11.384 233.016 57.669
           M 10.586 50.115 C 14.483 50.115 17.643 53.285 17.643 57.197 C 17.643 61.108 14.483 64.279 10.586 64.279
           C 6.688 64.279 3.529 61.108 3.529 57.197 C 3.529 53.285 6.688 50.115 10.586 50.115 Z
           M 232.886 50.115 C 236.783 50.115 239.943 53.285 239.943 57.197 C 239.943 61.108 236.783 64.279 232.886 64.279
           C 228.988 64.279 225.829 61.108 225.829 57.197 C 225.829 53.285 228.988 50.115 232.886 50.115 Z'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
				initial={{ pathLength: 0, opacity: 1 }}
				whileInView={{ pathLength: 1, opacity: 1 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{
					duration,
					delay,
					ease: 'easeInOut',
				}}
			/>
		</motion.svg>
	)
}
