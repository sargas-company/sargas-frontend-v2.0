import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type LetterAnimationProps = {
	children: ReactNode
	delayRate: number
	initialDelay: number
	animCallback?: () => void
}

export const HeroSectionLetterAnimation = ({
	children,
	delayRate = 0,
	initialDelay = 0,
	animCallback,
}: LetterAnimationProps) => {
	return (
		<motion.span
			initial={{ opacity: 0, filter: 'blur(10px)', y: 10, x: -5 }}
			animate={{ opacity: 1, filter: 'blur(0px)', y: 0, x: 0 }}
			transition={{
				type: 'tween',
				duration: 0.2,
				ease: 'easeOut',
				delay: initialDelay + delayRate,
			}}
			className='inline-block'
			onAnimationComplete={animCallback ? animCallback : () => {}}
		>
			{children}
		</motion.span>
	)
}
