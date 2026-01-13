import React from 'react'
import { BlurTypingText } from '../animation/ProcessSectionBlurTypingAnimation.tsx'
import { motion } from 'framer-motion'
import UpIcon from '../../assets/others/upwork-logo.svg'
import avatar3 from '../../assets/avatars/avatar_3.jpg'
import avatar4 from '../../assets/avatars/avatar_4.jpg'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation.tsx'
import { BenefitCardCustom } from '../ui/BenefitCardCustom.tsx'

type CardStat = {
	title: string
	earned: string | number
	rate: string | number
	hours: string | number
	period: string
}

type TestimonialProps = {
	quote: string
	name: string
	role: string
	siteUrl?: string
	avatarSrc: string
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
		title: 'Integrations between KlickTipp and other tools (n8n/Nest.js)',
		earned: '20,224.00',
		rate: 35,
		hours: '600+',
		period: 'Aug 16, 2024 - Nov 27, 2024',
	},
	{
		title: 'SaaS application development | Nest.js, Next.js',
		earned: '63,420.00',
		rate: 35,
		hours: '1,500+',
		period: 'Nov 7, 2023 - Jan 30, 2025',
	},
]

const StatCardLogo = ({ icon, rate }: StatCardPropsLogo) => {
	return (
		<div className='flex w-[190px] items-center justify-between rounded-[1rem] bg-[linear-gradient(165deg,#fff,#fff_25%)] p-3 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] saturate-[1.4] backdrop-blur-[12px] sm:p-6'>
			<div className='mb-2.5 flex h-full w-full flex-col items-center justify-center gap-3'>
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

const StatCard = ({ data: { title, earned, rate, hours, period } }: StatCardProps) => {
	return (
		<div className='flex h-full max-w-[420px] items-center justify-between rounded-[1rem] bg-[linear-gradient(165deg,#fff,#fff_25%)] px-12 py-6 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] saturate-[1.4] backdrop-blur-[12px]'>
			<div className='flex h-full w-full flex-col items-center justify-center gap-3'>
				<div className='flex h-full w-full flex-col items-start justify-between text-[15px]'>
					<ul className='h-full w-full'>
						<div className='mb-2 mt-2 flex items-center justify-between text-sm font-semibold text-black/70 md:text-base'>
							<span>{title}</span>
						</div>

						<li className='flex items-center'>
							<span className='pb-5 text-[20px]'>$</span>
							<span className='mt-1 text-[40px] font-semibold text-black/80'>{earned}</span>
							<span className='pt-5'>(earned)</span>
						</li>

						<li>
							<div className='flex items-center justify-between text-sm font-normal text-black/60 md:text-base'>
								<span>Rate per hour</span>

								<span className='flex items-center'>
									<span className='text-[20px]'>$</span>
									<span className='mt-1 text-[22px] font-bold text-black/80'>{rate}</span>
								</span>
							</div>

							<div className='flex items-center justify-between text-sm font-normal text-black/60 md:text-base'>
								<span>Spent hours</span>
								<span className='mt-1 text-[22px] font-bold text-black/80'>{hours}</span>
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
	siteUrl = '',
	avatarSrc,
	className,
	initialDelay = 0,
	cardStat = {
		title: '',
		earned: '',
		rate: '',
		hours: '',
		period: '',
	},
}) => {
	return (
		<div
			className={[
				'relative flex flex-col flex-1',
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
						className='text-[28px] xs:text-[24px] leading-[1.6] tracking-[-0.03em]'
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
				className='gap-15 mt-6 flex w-full items-center xs:hidden xl:flex'
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
					icon={
						<img
							src={UpIcon}
							style={{ marginBottom: '-16px' }}
							alt=''
							className='w-[100px]'
						/>
					}
					rate='5.0'
				/>

				<StatCard data={cardStat} />
			</motion.div>

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

export const CommentsSectionUpwork: React.FC = () => {
	return (
		<section className='relative w-full sm:flex sm:justify-center'>
			<div className='relative flex lg:w-full xs:w-full sm:w-fit gap-16'>

				<Testimonial
					quote='Sargas Agency is an excellent development team - highly skilled, committed, and strong problem solvers. We would definitely work with them again.'
					name='Mario Wolosz'
					role='CEO of KlickTipp'
					avatarSrc={avatar4}
					siteUrl='https://www.klicktipp.com'
					className='mt-[80px]'
					initialDelay={0.1}
					cardStat={cards[0]}
				/>

				<Testimonial
					quote='Sargas Agency delivered high-quality work quickly across multiple areas of our platform, including frontend, backend, and a browser extension. The team was highly flexible, adapting seamlessly to changes in scope, code standards, and team processes - a critical factor in a fast-moving startup environment. We’d be happy to work with them again.'
					name='Verified Client'
					role='Product Founder'
					avatarSrc={avatar3}
					className='mt-[160px] xs:hidden lg:flex'
					initialDelay={0.4}
					cardStat={cards[1]}
				/>
			</div>
		</section>
	)
}
