import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { PlusCircleIcon } from '../ui/icons/PlusCircleIcon'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'

import avatar2 from '../../assets/avatars/avatar_2.jpg'
import avatar4 from '../../assets/avatars/avatar_4.jpg'

import { PhoneIcon } from '../ui/icons/PhoneIcon'
import { AnalyticsIcon } from '../ui/icons/AnalyticsIcon'
import { MonitorIcon } from '../ui/icons/MonitorIcon'
import { ArrowLoopIcon } from '../ui/icons/ArrowLoopIcon'
import { BulbIcon } from '../ui/icons/BulbIcon'
import { GearIcon } from '../ui/icons/GearIcon'
import { SparkPlusIcon } from '../ui/icons/SparkPlusIcon'
import { BoxIcon } from '../ui/icons/BoxIcon'
import { UserFocusIcon } from '../ui/icons/UserFocusIcon'
import { BenefitCardCustom } from '../ui/BenefitCardCustom.tsx'

const retainerDetails = {
	list: [
		'Reserved monthly capacity',
		'Weekly planning & priority alignment',
		'Async updates + 1–2 sync calls/week',
		'Continuous delivery (staging + prod)',
		'Code reviews & best practices',
		'Flexible month-to-month engagement',
	],
	content: [
		'Sargas',
		'Agency',
		'is',
		'an',
		'excellent',
		'development',
		'team',
		'highly',
		'skilled',
		'committed',
		'and',
		'strong',
		'problem',
		'solvers',
		'We',
		'would',
		'definitely',
		'work',
		'with',
		'them',
		'again.',
	],
	devTitle: ['Dedicated', 'Developer'],
	teamTitle: ['Dedicated', 'Team'],
	teamDescription: [
		'A',
		'cross-functional',
		'team',
		'reserved',
		'for',
		'your',
		'product',
		'each',
		'month',
		'(usually',
		'2',
		'core',
		'engineers',
		'+',
		'lead',
		'support).',
		'We',
		'manage',
		'the',
		'setup',
		'-',
		'you',
		'focus',
		'on',
		'priorities',
		'and',
		'results.',
	],
	position: 'CEO of KlickTipp',
	name: 'Mario Wolosz',
	img: avatar4,
}

const fixedDetails = {
	list: [
		'Scope & deliverables defined upfront',
		'Fixed budget & timeline',
		'Milestones & release plan',
		'QA + production launch',
		'Weekly updates & demos',
		'Change requests scoped separately',
	],
	content: [
		'Sargas',
		'Agency',
		'OÜ',
		'has',
		'delivered',
		'a',
		'fully',
		'functional',
		'web',
		'app',
		'that',
		'is',
		'aligned',
		'with',
		'existing',
		'mobile',
		'platforms.',
		'The',
		'team',
		'has',
		'improved',
		'consistency',
		'across',
		'platforms,',
		'enhancing',
		'the',
		'UX.',
	],
	priceDescription: ['Fixed', '-', 'scope', 'project.', 'Milestone', '-', 'based', 'delivery.'],

	name: 'Egor Antonyuk',
	position: 'Product Owner, Clowder',
	img: avatar2,
}

const advantages = [
	{ title: 'Senior engineering', icon: PhoneIcon },
	{ title: 'Systems thinking', icon: MonitorIcon },
	{ title: 'Developer-friendly', icon: ArrowLoopIcon },
	{ title: 'Clear process', icon: AnalyticsIcon },
	{ title: 'Product mindset', icon: BulbIcon },
	{ title: 'Reliable partner', icon: GearIcon },
	{ title: 'Fast execution', icon: SparkPlusIcon },
	{ title: 'Thoughtful feedback', icon: BoxIcon },
	{ title: 'Smooth handoff', icon: UserFocusIcon },
]

function useViewportWidth() {
	const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return width
}

export const PricingSection = () => {
	const [isRetainer, setIsCustom] = useState(false)
	const width = useViewportWidth()
	const [isAnimated, setIsAnimated] = useState(false)

	let priceShift: number
	let labelShiftCustom: number
	let labelShiftMonthly: number

	if (width >= 1200) {
		priceShift = 140
		labelShiftCustom = -195
		labelShiftMonthly = 20
	} else if (width >= 810) {
		priceShift = 120
		labelShiftCustom = -160
		labelShiftMonthly = 14
	} else {
		priceShift = 100
		labelShiftCustom = -125
		labelShiftMonthly = 15
	}

	const items = isRetainer ? retainerDetails.list : fixedDetails.list
	const content = isRetainer ? retainerDetails.content : fixedDetails.content

	return (
		<div
			className='md:pb-27 lg:pb-35 xl:pb-50 xl:gap-15 flex flex-col gap-6 pb-20 md:gap-9 xl:pb-[160px]'
			id='pricing'
		>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Pricing' />
				<h2 className='whitespace-pre-wrap break-words text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
					Fixed Price / Retainer
				</h2>
			</div>

			<motion.div
				transition={{ type: 'spring', stiffness: 280, damping: 30, mass: 0.4 }}
				className='relative flex-col lg:flex-row flex flex-wrap justify-start gap-[60px] rounded-[24px] bg-white/50 p-6 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_0_rgba(0,0,0,0.1)] md:p-9 xl:p-[60px]'
			>
				<div className='flex flex-1 flex-col justify-between gap-8'>
					<div className='flex flex-col gap-6'>
						<div
							className='flex w-min cursor-pointer items-center gap-4'
							onClick={() => setIsCustom((prev) => !prev)}
						>
							<span
								className={[
									'text-[16px] md:text-[18px]',
									isRetainer ? 'text-black' : 'text-[#FF3700]',
								].join(' ')}
							>
								Fixed
							</span>

							<button
								type='button'
								className='relative flex h-[24px] w-[44px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#FF5E00] shadow-[0_0_0_3px_rgba(255,255,255,0.25),12px_16px_16px_0_rgba(0,0,0,0.1)] focus:outline-none'
							>
								<motion.span
									initial={false}
									animate={{ x: isRetainer ? 20 : 0 }}
									transition={{
										type: 'spring',
										stiffness: 280,
										damping: 30,
										mass: 0.4,
									}}
									className='absolute left-[2px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.2)]'
								/>
							</button>

							<span
								className={[
									'text-[16px] md:text-[18px]',
									isRetainer ? 'text-[#FF3700]' : 'text-black',
								].join(' ')}
							>
								Retainer
							</span>
						</div>
						<div className='relative'>
							{isRetainer && (
								<div className='flex items-end'>
									<motion.span
										className='relative z-10 text-[38px] leading-[1.25em] tracking-[-0.06em] text-black md:text-[50px] lg:text-[65px]'
										animate={{ x: isRetainer ? 0 : priceShift }}
										transition={{ type: 'spring', stiffness: 400, damping: 40 }}
									>
										$6,500
									</motion.span>

									<motion.span
										className='relative z-0 text-[32px] ml-1 leading-[1.25em] tracking-[-0.06em] text-black/25 md:text-[45px] lg:text-[60px]'
										animate={{ x: isRetainer ? labelShiftMonthly : labelShiftCustom }}
										transition={{ type: 'spring', stiffness: 400, damping: 40 }}
									>
										/mo
									</motion.span>
								</div>
							)}

							{isRetainer && (
								<div className='mb-10 flex items-end text-lg leading-[1.5em] tracking-[-.02em] md:text-xl'>
									{retainerDetails.devTitle.map((word, wordIndex) => (
										<span
											key={`${wordIndex}-${isRetainer ? 'c' : 'a'}`}
											className='mr-[0.3em] inline-block whitespace-nowrap'
										>
											{word.split('').map((letter, letterIndex) => (
												<HeroSectionLetterAnimation
													initialDelay={0.1}
													delayRate={wordIndex * 0.07}
													key={`${wordIndex}-${letterIndex}-${isRetainer ? 'c' : 'a'}`}
												>
													{letter}
												</HeroSectionLetterAnimation>
											))}
										</span>
									))}
								</div>
							)}

							<div className='flex items-end'>
								<motion.span
									className='relative z-10 text-[38px] leading-[1.25em] tracking-[-0.06em] text-black md:text-[50px] lg:text-[65px]'
									animate={{ x: isRetainer ? 0 : priceShift }}
									transition={{ type: 'spring', stiffness: 400, damping: 40 }}
								>
									{isRetainer ? '$13,000' : '$5,000'}
								</motion.span>

								<motion.span
									className='relative z-0 text-[32px] xs:ml-5 sm:ml-4 md:ml-3 ml-1 leading-[1.25em] tracking-[-0.06em] text-black/25 md:text-[45px] lg:text-[60px]'
									animate={{ x: isRetainer ? labelShiftMonthly : labelShiftCustom }}
									transition={{ type: 'spring', stiffness: 400, damping: 40 }}
								>
									{isRetainer ? '/mo' : 'from'}
								</motion.span>
							</div>

							{isRetainer && (
								<div className='flex flex-col justify-end text-lg leading-[1.5em] tracking-[-.02em] md:text-xl'>
									<span className='mb-4'>
										{retainerDetails.teamTitle.map((word, wordIndex) => (
											<span
												key={`${wordIndex}-${isRetainer ? 'c' : 'a'}`}
												className='mr-[0.3em] inline-block'
											>
												{word.split('').map((letter, letterIndex) => (
													<HeroSectionLetterAnimation
														initialDelay={0.1}
														delayRate={wordIndex * 0.07}
														key={`${wordIndex}-${letterIndex}-${isRetainer ? 'c' : 'a'}`}
													>
														{letter}
													</HeroSectionLetterAnimation>
												))}
											</span>
										))}
									</span>

									<span>
										{retainerDetails.teamDescription.map((word, wordIndex) => (
											<span
												key={`${wordIndex}-${isRetainer ? 'c' : 'a'}`}
												className='mr-[0.3em] inline-block'
											>
												{word.split('').map((letter, letterIndex) => (
													<HeroSectionLetterAnimation
														initialDelay={0.1}
														delayRate={wordIndex * 0.07}
														key={`${wordIndex}-${letterIndex}-${isRetainer ? 'c' : 'a'}`}
													>
														{letter}
													</HeroSectionLetterAnimation>
												))}
											</span>
										))}
									</span>
								</div>
							)}

							{!isRetainer && (
								<div className='flex items-end text-lg leading-[1.5em] tracking-[-.02em] md:text-xl flex-wrap'>
									{fixedDetails.priceDescription.map((word, wordIndex) => (
										<span
											key={`${wordIndex}-${isRetainer ? 'c' : 'a'}`}
											className='mr-[0.3em] inline-block whitespace-nowrap'
										>
											{word.split('').map((letter, letterIndex) => (
												<HeroSectionLetterAnimation
													initialDelay={0.1}
													delayRate={wordIndex * 0.07}
													key={`${wordIndex}-${letterIndex}-${isRetainer ? 'c' : 'a'}`}
												>
													{letter}
												</HeroSectionLetterAnimation>
											))}
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					<div className='flex flex-col items-center gap-2 pt-9 md:items-start'>
						<div>
							<HeroSectionButton
								title={isRetainer ? 'Book Free Discovery Call' : 'Get a Free Project Quote'}
								href='https://calendly.com/contact-sargas/60-minute-meeting'
								icon={<ArrowRightIcon />}
								withOutline
							/>
						</div>
					</div>
				</div>

				<div className='xl:p-15 flex h-min min-w-[248px] flex-1 rotate-1 flex-col items-center justify-center gap-6 rounded-xl bg-white/75 p-6 md:p-9'>
					<div className='flex w-full flex-col gap-9'>
						<h4 className='text-lg leading-[1.6em] tracking-[-0.02em] md:text-xl xl:text-2xl'>
							<strong>What&apos;s included</strong>
						</h4>

						<ul className='flex flex-col gap-4 md:gap-5'>
							{items.map((item) => (
								<li
									key={item}
									className='flex items-center gap-3 text-[16px] leading-[1.6em] tracking-[-0.01em] text-black/60'
								>
									<span className='flex items-center justify-center'>
										<PlusCircleIcon />
									</span>

									<span className='flex flex-wrap'>
										{item.split(' ').map((word, wordIndex) => (
											<span
												key={`${item}-${wordIndex}`}
												className='mr-[0.35em] inline-block'
											>
												{word.split('').map((letter, letterIndex) => {
													const globalIndex = wordIndex * 20 + letterIndex
													if (isAnimated) {
														return (
															<span key={`${wordIndex}-${letterIndex}`}>
																{letter}
															</span>
														)
													} else {
														return (
															<HeroSectionLetterAnimation
																initialDelay={0}
																delayRate={globalIndex * 0.04}
																key={`${wordIndex}-${letterIndex}`}
																animCallback={() => setIsAnimated(true)}
															>
																{letter}
															</HeroSectionLetterAnimation>
														)
													}
												})}
											</span>
										))}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className='flex flex-col gap-9 pt-16'>
						<p className='pr-12 text-lg leading-[1.5em] tracking-[-.02em] md:text-xl'>
							{content.map((word, wordIndex) => (
								<span
									key={`${wordIndex}-${isRetainer ? 'c' : 'a'}`}
									className='mr-[0.3em] inline-block'
								>
									{word.split('').map((letter, letterIndex) => (
										<HeroSectionLetterAnimation
											initialDelay={0.1}
											delayRate={wordIndex * 0.07}
											key={`${wordIndex}-${letterIndex}-${isRetainer ? 'c' : 'a'}`}
										>
											{letter}
										</HeroSectionLetterAnimation>
									))}
								</span>
							))}
						</p>
						<BenefitCardCustom href='https://clowder.com/'>
							<div className='flex items-center gap-4'>
								<img
									src={isRetainer ? retainerDetails.img : fixedDetails.img}
									alt='dev'
									className='h-[65px] w-[65px] rounded-full object-cover'
								/>
								<div className='tracking-0 leading-[1.7em]'>
									<p>{isRetainer ? retainerDetails.name : fixedDetails.name}</p>
									<p className='text-black/50'>
										{isRetainer ? retainerDetails.position : fixedDetails.position}
									</p>
								</div>
							</div>
						</BenefitCardCustom>
					</div>
				</div>
			</motion.div>

			<div className='grid w-full auto-rows-fr grid-cols-1 justify-center gap-9 pt-6 md:grid-cols-2 xl:grid-cols-3 xl:pt-0'>
				{advantages.map((item, index) => {
					return (
						<div key={index} className='flex items-center gap-2'>
							<item.icon />
							<span className='tracking-0 whitespace-nowrap leading-[1.7em] text-black/50'>
								{item.title}
							</span>
							<div className='relative h-px w-full bg-black/10'></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
