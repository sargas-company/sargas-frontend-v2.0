import { motion, type Variants } from 'framer-motion'

type MultiStepInfoButtonProps = {
	title: string
	img?: string | null
	link?: string
	variant?: 'black' | 'white'
}

const letterVariants: Variants = {
	rest: {
		y: 0,
		opacity: 1,
	},
	hover: (i: number) => ({
		y: [0, -18, -18, 18, 0],
		opacity: [1, 1, 0, 0, 1],
		transition: {
			duration: 0.2,
			ease: [0.42, 0, 0.58, 1],
			delay: i * 0.02,
			repeat: 0,
			times: [0, 0.3, 0.3, 0.7, 1],
		},
	}),
}

export const MultiStepInfoButton = ({
	title,
	img,
	link,
	variant = 'black',
}: MultiStepInfoButtonProps) => {
	const letters = Array.from(title)

	const bgClass =
		variant === 'white'
			? 'bg-[linear-gradient(#ffffff,#e5e5e5)]'
			: 'bg-[linear-gradient(#292929_24%,#1b1b1b)]'

	const paddingClass = img ? 'p-1 pr-6' : 'px-6 py-[13.5px]'

	const textColor = variant === 'white' ? 'text-black font-semibold' : 'text-white'
	const button = (
		<motion.button
			type='button'
			className={`flex min-h-10 cursor-pointer items-center justify-start gap-3 rounded-full ${bgClass} border-1 border-[#d9d9d9] shadow-[inset_0_0.125rem_0.125rem_#ffffff4d,0_0.25rem_0.375rem_#00000024] transition-transform duration-150 ease-out ${paddingClass} `}
			initial='rest'
			animate='rest'
			whileHover='hover'
		>
			{img && (
				<img
					src={img}
					className='full h-[33.5px] w-[33.5px] rounded-full object-cover'
					alt=''
				/>
			)}

			<span className={`flex overflow-hidden text-xs font-medium ${textColor}`}>
				{letters.map((char, index) =>
					char === ' ' ? (
						<span key={index} className='inline-block w-[0.35em]' />
					) : (
						<motion.span
							key={index}
							className='inline-block'
							variants={letterVariants}
							custom={index}
						>
							{char}
						</motion.span>
					)
				)}
			</span>
		</motion.button>
	)

	if (link) {
		return (
			<a href={link} className='inline-block'>
				{button}
			</a>
		)
	}

	return button
}
