import { motion } from 'framer-motion'

type IconProps = {
	size?: number | string
	color?: string
	strokeWidth?: number
	className?: string
	duration?: number
	delay?: number
}

export const AnimateRightWave = ({
	size = '100%',
	color = 'rgb(255, 55, 0)',
	className = '',
	strokeWidth = 1,
	duration = 3,
	delay = 0.5,
}: IconProps) => {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 106 179'
			className={className}
			fill='none'
		>
			<motion.path
				d='M 95.993 11.704 C 43.708 8.765 57.558 98.411 77.749 93.631 C 97.94 88.852 48.295 23.589 19.858 39.508 C -8.579 55.425 10.736 95.485 15.297 103.641 C 19.859 111.796 46.874 150.721 92.134 170.369
           M 92.468 163.464 C 96.205 163.464 99.234 166.488 99.234 170.219 C 99.234 173.949 96.205 176.974 92.468 176.974 C 88.731 176.974 85.702 173.949 85.702 170.219 C 85.702 166.488 88.731 163.464 92.468 163.464 Z
           M 95.851 4.728 C 99.588 4.728 102.617 7.752 102.617 11.483 C 102.617 15.214 99.588 18.238 95.851 18.238 C 92.114 18.238 89.085 15.214 89.085 11.483 C 89.085 7.752 92.114 4.728 95.851 4.728 Z'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinejoin='round'
				strokeLinecap='round'
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
