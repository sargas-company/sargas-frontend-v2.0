import React from 'react'
import { BlurTypingText } from '../animation/ProcessSectionBlurTypingAnimation.tsx'
import { motion } from 'framer-motion'
import clutchLogo from '../../assets/clutchLogo.png'
import avatar1 from '../../assets/avatars/avatar_1.jpg'
import avatar2 from '../../assets/avatars/avatar_2.jpg'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation.tsx'
import { BenefitCardCustom } from '../ui/BenefitCardCustom.tsx'

type CardStat = {
	title: string
	size: string | number
	period: string
}

type TestimonialProps = {
	quote: string
	name: string
	role: string
	avatarSrc: string
	siteUrl?: string
	initialDelay?: number
	className?: string
	cardStat?: CardStat
}

type StatCardPropsLogo = {
	icon?: React.ReactNode
	rate: string
}

type StatCardProps = {
	data: CardStat
}

const cards: CardStat[] = [
	{
		title: 'Web App & UX/UI Redesign for Community Engagement Co',
		size: '10k - 49k',
		period: 'Jun 2023 - Ongoing',
	},
	{
		title: 'Website/Platform Development & UI/UX Design',
		size: '10k - 49k',
		period: 'Jan 2023 - March 2025',
	},
]

const StatCardLogo = ({ icon, rate }: StatCardPropsLogo) => {
	return (
		<div className='flex xl:w-[190px] items-center justify-between rounded-[1rem] bg-[linear-gradient(165deg,#fff,#fff_25%)] p-3 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] saturate-[1.4] backdrop-blur-[12px] sm:p-6'>
			<div className='flex h-full w-full flex-col items-center justify-center gap-3'>
				<div className='flex shrink-0 items-center justify-start'>{icon}</div>

				<div className='flex justify-center'>
					<div className='flex flex-col flex-wrap items-center gap-2'>
						<span className='text-[28px] font-semibold leading-none text-black sm:text-[34px] md:text-[38px]'>
							{rate}
						</span>

						<div className='flex shrink-0 gap-1'>
							{[...Array(5)].map((_, i) => (
								<HeroSectionLetterAnimation initialDelay={0.5} delayRate={i * 0.07} key={i}>
									<img
										src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
										alt=''
										className='h-4 w-4'
									/>
								</HeroSectionLetterAnimation>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const StatCard = ({ data: { title, size, period } }: StatCardProps) => {
	return (
		<div className='flex h-full max-w-[420px] items-center justify-between rounded-[1rem] bg-[linear-gradient(165deg,#fff,#fff_25%)] px-12 py-6 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] saturate-[1.4] backdrop-blur-[12px]'>
			<div className='flex h-full w-full flex-col items-center justify-center gap-3'>
				<div className='flex h-full w-full flex-col items-start justify-between text-[15px]'>
					<ul className='h-full w-full'>
						<li className='mb-2 mt-2 text-sm font-semibold text-black/80 md:text-base'>
							{title}
						</li>

						<li className='flex items-center'>
							<span className='pb-5 text-[20px]'>$</span>
							<span className='mt-1 text-[40px] font-semibold text-black/80'>{size}</span>
							<span className='pl-1 pt-4'>(size)</span>
						</li>

						<li>
							<div className='flex items-center justify-between text-sm font-normal text-black/60 md:text-base'>
								<span>Costs</span>
								<span className='mt-1 text-[22px] font-bold text-black/80'>5.0</span>
							</div>
							<div className='flex items-center justify-between text-sm font-normal text-black/60 md:text-base'>
								<span>Quality</span>
								<span className='mt-1 text-[22px] font-bold text-black/80'>5.0</span>
							</div>
							<div className='flex items-center justify-between text-sm font-normal text-black/60 md:text-base'>
								<span>Schedule</span>
								<span className='mt-1 text-[22px] font-bold text-black/80'>5.0</span>
							</div>
						</li>

						<div className='mt-4 flex items-center justify-between text-sm font-semibold text-black/60 md:text-base'>
							<span>{period}</span>
						</div>
					</ul>
				</div>
			</div>
		</div>
	)
}

const Testimonial: React.FC<TestimonialProps> = ({
	quote,
	name,
	role,
	avatarSrc,
	siteUrl = '',
	className,
	initialDelay = 0,
	cardStat = {
		title: '',
		size: 0,
		period: '',
	},
}) => {
	return (
		<div
			className={[
				'relative flex flex-col flex-1 gap-5',
				'items-start',
				className
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
				className='gap-15 mt-6 flex w-full items-center xs:hidden lg:flex'
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
				<StatCardLogo
					icon={<img
						src={clutchLogo}
						alt=''
						className='w-[100px]'
					/>}
					rate='5.0' />

				<StatCard data={cardStat} />
			</motion.div>

			<motion.div
				className='mt-3 flex items-center gap-4'
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
				<BenefitCardCustom href={siteUrl}>
					<div className='h-[64px] w-[64px] overflow-hidden rounded-full bg-black/10'>
						<img
							width={200}
							height={200}
							src={avatarSrc}
							alt={name}
							className='h-full w-full object-cover'
						/>
					</div>

					<div className='flex flex-col'>
						<span className='text-[16px] font-medium leading-tight text-black'>{name}</span>
						<span className='text-[14px] leading-tight text-black/60'>{role}</span>
					</div>
				</BenefitCardCustom>
			</motion.div>
		</div>
	)
}

export const CommentsSectionClutch: React.FC = () => {
	return (
		<section className='mt-15 relative w-full sm:flex sm:justify-center'>
			<div className='relative flex lg:w-full xs:w-full sm:w-fit gap-16'>
				<Testimonial
					quote="Sargas Agency OÜ has delivered a fully functional web app that is aligned with existing mobile platforms. The team has improved consistency across platforms, enhancing the UX. Sargas Agency OÜ's flexibility and ability to adapt quickly to the client's processes and requirements are impressive."
					name='Egor Antonyuk'
					role='Product Owner, Clowder'
					siteUrl='https://clowder.com/'
					avatarSrc={avatar2}
					className='mt-[80px]'
					cardStat={cards[0]}
					initialDelay={0.1}
				/>

				<Testimonial
					quote='Thanks to Sargas, the client experienced high traffic and user engagement. The website also received positive feedback from users regarding its new features and overall performance. The team was highly communicative and responsive; their members regularly updated the client about their progress.'
					name='Priyadarshan Joshi'
					role='CEO, Upnexo Technologies Private Limited'
					avatarSrc={avatar1}
					className='mt-[160px] xs:hidden lg:block'
					cardStat={cards[1]}
					initialDelay={0.4}
				/>
			</div>
		</section>
	)
}
