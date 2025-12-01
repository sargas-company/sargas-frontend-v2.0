import { motion, MotionValue, useTransform } from 'framer-motion'

type WordProps = {
	content: string
	index: number
	progress: MotionValue<number>
}

export const IntroTextSectionWordAnimation = ({ content, index, progress }: WordProps) => {
	const opacity = useTransform(progress, (v) => {
		const distance = v - index

		if (distance >= 1) return 1
		if (distance <= 0) return 0.2

		return 0.2 + distance * (1 - 0.2)
	})

	return (
		<motion.span style={{ opacity }} className='inline-block'>
			{content}&nbsp;
		</motion.span>
	)
}
