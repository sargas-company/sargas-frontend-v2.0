import React from 'react'
import { BlurTypingText } from '../animation/ProcessSectionBlurTypingAnimation.tsx'
import { motion } from 'framer-motion'

type TestimonialProps = {
	quote: string
	name: string
	role: string
	avatarSrc: string
	initialDelay?: number
	className?: string
}

const Testimonial: React.FC<TestimonialProps> = ({
	quote,
	name,
	role,
	avatarSrc,
	className,
	initialDelay = 0,
}) => {
	return (
		<div
			className={[
				'relative flex flex-1 flex-col gap-5',
				'items-start',
				className,
				'lg:pr-[96px]',
			].join(' ')}
		>
			<div className='flex'>
				<p className='max-w-[640px] text-[28px] leading-[1.6] tracking-[-0.03em] text-black'>
					<BlurTypingText
						text={quote}
						initialDelay={initialDelay}
						wordDelay={0.03}
						className='text-[28px] leading-[1.6] tracking-[-0.03em]'
					/>
				</p>

				<strong
					className={[
						'pointer-events-none relative text-[40px] lg:text-[48px]',
						'leading-none text-black/15',
						'right-[-28px] lg:right-[-40px]',
					].join(' ')}
				>
					&quot;
				</strong>
			</div>

			<motion.div
				className='mt-8 flex items-center gap-4'
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					type: 'tween',
					duration: 0.6,
					ease: 'easeOut',
					delay: initialDelay + 0.2,
				}}
			>
				<div className='h-[64px] w-[64px] overflow-hidden rounded-full bg-black/10'>
					<img src={avatarSrc} alt={name} className='h-full w-full object-cover' />
				</div>
				<div className='flex flex-col'>
					<span className='text-[16px] leading-tight font-medium text-black'>{name}</span>
					<span className='text-[14px] leading-tight text-black/60'>{role}</span>
				</div>
			</motion.div>
		</div>
	)
}

export const CommentsSection: React.FC = () => {
	return (
		<section className='relative w-full'>
			<div className='relative flex w-full max-w-[1600px] flex-col gap-16 lg:flex-row lg:gap-24'>
				<div className='pointer-events-none absolute inset-y-6 left-1/2 hidden w-px bg-black/10 lg:block' />

				<Testimonial
					quote='Working with Joris was a game-changer. He instantly understood our vision and translated it into a sleek, intuitive product. The process felt effortless, and the results exceeded our expectations.'
					name='Sophie Lemaire'
					role='Product Lead at Loomi'
					avatarSrc='https://framerusercontent.com/images/GQYbkjoIOqJZo9gC9bpE4YLn18.png?scale-down-to=512&width=1536&height=1024'
					className='mt-[80px]'
					initialDelay={0.1}
				/>

				<Testimonial
					quote='Joris brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been incredible.'
					name='Milan Bakker'
					role='Founder of Drifted Studio'
					avatarSrc='https://framerusercontent.com/images/TjQr3Mj8oNK6Ndfogb5IMNxXGg.png?scale-down-to=512&width=1536&height=1024'
					className='mt-[160px]'
					initialDelay={0.4}
				/>
			</div>
		</section>
	)
}
