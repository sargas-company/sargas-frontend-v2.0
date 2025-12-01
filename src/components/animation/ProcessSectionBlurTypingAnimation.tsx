import { motion } from 'framer-motion'
import type { JSX } from 'react'

type BlurTypingTextProps = {
	text: string
	initialDelay?: number
	wordDelay?: number
	duration?: number
	as?: keyof JSX.IntrinsicElements
	className?: string
	wordClassName?: string
	viewportOnce?: boolean
	viewportAmount?: number
}

export const BlurTypingText = ({
	text,
	initialDelay = 0,
	wordDelay = 0.06,
	duration = 0.25,
	className,
	wordClassName,
	viewportOnce = true,
	viewportAmount = 0.5,
}: BlurTypingTextProps) => {
	const words = text.split(' ')

	const wrapperClasses = ['inline-block leading-tight', className].filter(Boolean).join(' ')

	const wordClasses = ['inline-block mr-[0.25em]', wordClassName].filter(Boolean).join(' ')

	return (
		<span className={wrapperClasses}>
			{words.map((word, index) => (
				<motion.span
					key={`${word}-${index}`}
					initial={{ opacity: 0, filter: 'blur(10px)', y: 10, x: -5 }}
					whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0, x: 0 }}
					viewport={{ once: viewportOnce, amount: viewportAmount }}
					transition={{
						type: 'tween',
						duration,
						ease: 'easeOut',
						delay: initialDelay + index * wordDelay,
					}}
					className={wordClasses}
				>
					{word}
				</motion.span>
			))}
		</span>
	)
}
