import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { PlusCircleIcon } from '../ui/icons/PlusCircleIcon'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'
import devImg from '../../assets/dev.avif'
import dev1Img from '../../assets/dev_01.avif'
import { PhoneIcon } from '../ui/icons/PhoneIcon'
import { AnalyticsIcon } from '../ui/icons/AnalyticsIcon'
import { MonitorIcon } from '../ui/icons/MonitorIcon'
import { ArrowLoopIcon } from '../ui/icons/ArrowLoopIcon'
import { BulbIcon } from '../ui/icons/BulbIcon'
import { GearIcon } from '../ui/icons/GearIcon'
import { SparkPlusIcon } from '../ui/icons/SparkPlusIcon'
import { BoxIcon } from '../ui/icons/BoxIcon'
import { UserFocusIcon } from '../ui/icons/UserFocusIcon'

const monthlyDetails = {
	list: [
		'Unlimited design requests',
		'Fast turnaround',
		'Fixed monthly rate',
		'Async communication',
		'Flexible scope',
		'Pause anytime',
	],
	content: [
		'Astrid’s',
		'minimalist',
		'design',
		'approach',
		'transformed',
		'our',
		'brand.',
		'The',
		'simplicity',
		'and',
		'clarity',
		'she',
		'brought',
		'to',
		'our',
		'identity',
		'made',
		'us',
		'stand',
		'out',
		'in',
		'a',
		'crowded',
		'market.',
		'Our',
		'customers',
		'immediately',
		'noticed',
		'the',
		'difference.',
	],
	name: 'Helena Moreau',
	position: 'Creative Director at Studio Novo',
	img: dev1Img,
}

const customDetails = {
	list: [
		'Tailored scope & deliverables',
		'One-off fee or milestone billing',
		'End-to-end collaboration',
		'High-impact execution',
		'Workshops & reviews',
		'Full documentation & assets',
	],
	content: [
		'Effortless',
		'process.',
		'Exceptional',
		'results.',
		'Working',
		'with',
		'Joris',
		'felt',
		'like',
		'having',
		'an',
		'in-house',
		'designer',
		'on',
		'speed',
		'dial.',
	],
	name: 'Tom Richter',
	position: 'Founder & CEO at Corelytics',
	img: devImg,
}

const advantages = [
	{ title: 'Senior-level quality', icon: PhoneIcon },
	{ title: 'Systems thinking', icon: MonitorIcon },
	{ title: 'Developer-friendly', icon: ArrowLoopIcon },
	{ title: 'Clear process', icon: AnalyticsIcon },
	{ title: 'On-brand, every time', icon: BulbIcon },
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
	const [isCustom, setIsCustom] = useState(false)
	const width = useViewportWidth()
	const [isAnimated, setIsAnimated] = useState(false)

	let priceShift: number
	let labelShiftCustom: number
	let labelShiftMonthly: number

	if (width >= 1200) {
		priceShift = 140
		labelShiftCustom = -210
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

	const items = isCustom ? customDetails.list : monthlyDetails.list
	const content = isCustom ? customDetails.content : monthlyDetails.content

	return (
		<div
			className='flex flex-col gap-6 py-10 md:gap-9 md:py-14 xl:gap-15 xl:pt-[120px] xl:pb-[160px]'
			id='pricing'
		>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Pricing' />
				<h2 className='text-[28px] leading-[1.4] tracking-[-0.04em] break-words whitespace-pre-wrap md:text-[48px]'>
					Fixed Price, Zero Limits
				</h2>
			</div>

			<motion.div
				layout
				transition={{ type: 'spring', stiffness: 280, damping: 30, mass: 0.4 }}
				className='relative flex flex-wrap justify-start gap-[60px] rounded-[24px] bg-white/50 p-6 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_0_rgba(0,0,0,0.1)] md:p-9 xl:p-[60px]'
			>
				<div className='flex flex-1 flex-col justify-between gap-8'>
					<div className='flex flex-col gap-6'>
						<div className='flex items-center gap-4'>
							<span
								className={[
									'text-[16px] md:text-[18px]',
									isCustom ? 'text-black' : 'text-[#FF3700]',
								].join(' ')}
							>
								Monthly
							</span>

							<button
								type='button'
								onClick={() => setIsCustom((prev) => !prev)}
								className='relative flex h-[24px] w-[44px] items-center justify-center overflow-hidden rounded-full bg-[#FF5E00] shadow-[0_0_0_3px_rgba(255,255,255,0.25),12px_16px_16px_0_rgba(0,0,0,0.1)] focus:outline-none'
							>
								<motion.span
									initial={false}
									animate={{ x: isCustom ? 20 : 0 }}
									transition={{
										type: 'spring',
										stiffness: 280,
										damping: 30,
										mass: 0.4,
									}}
									className='absolute top-1/2 left-[2px] h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.2)]'
								/>
							</button>

							<span
								className={[
									'text-[16px] md:text-[18px]',
									isCustom ? 'text-[#FF3700]' : 'text-black',
								].join(' ')}
							>
								Custom
							</span>
						</div>
						<div className='relative'>
							<div className='flex items-end'>
								<motion.span
									className='relative z-10 text-[44px] leading-[1.25em] tracking-[-0.06em] text-black md:text-[56px] lg:text-[72px]'
									animate={{ x: isCustom ? priceShift : 0 }}
									transition={{ type: 'spring', stiffness: 400, damping: 40 }}
								>
									{isCustom ? '$11,500' : '$7,500'}
								</motion.span>

								<motion.span
									className='relative z-0 -ml-4 text-[44px] leading-[1.25em] tracking-[-0.06em] text-black/25 md:text-[56px] lg:text-[72px]'
									animate={{ x: isCustom ? labelShiftCustom : labelShiftMonthly }}
									transition={{ type: 'spring', stiffness: 400, damping: 40 }}
								>
									{isCustom ? 'from' : '/mo'}
								</motion.span>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center gap-2 pt-9 md:items-start'>
						<div className='flex items-center gap-2'>
							<div className='h-1.5 w-1.5 rounded-full bg-[#0cb300]' />
							<div className='tracking-0 text-xs leading-[1.5em] text-black/50'>
								Booking Open — 2 Spots Left
							</div>
						</div>
						<div>
							<HeroSectionButton
								title='Book Free Discovery Call'
								icon={<ArrowRightIcon />}
								withOutline
							/>
						</div>
					</div>
				</div>

				<div className='flex h-min min-w-[248px] flex-1 rotate-1 flex-col items-center justify-center gap-6 rounded-xl bg-white/75 p-6 md:p-9 xl:p-15'>
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
									key={`${wordIndex}-${isCustom ? 'c' : 'a'}`}
									className='mr-[0.3em] inline-block'
								>
									{word.split('').map((letter, letterIndex) => (
										<HeroSectionLetterAnimation
											initialDelay={0.1}
											delayRate={wordIndex * 0.07}
											key={`${wordIndex}-${letterIndex}-${isCustom ? 'c' : 'a'}`}
										>
											{letter}
										</HeroSectionLetterAnimation>
									))}
								</span>
							))}
						</p>
						<div className='flex items-center gap-4'>
							<img
								src={isCustom ? customDetails.img : monthlyDetails.img}
								alt='dev'
								className='h-[65px] w-[65px] rounded-full object-cover'
							/>
							<div className='tracking-0 leading-[1.7em]'>
								<p>{isCustom ? customDetails.name : monthlyDetails.name}</p>
								<p className='text-black/50'>
									{isCustom ? customDetails.position : monthlyDetails.position}
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>

			<div className='grid w-full auto-rows-fr grid-cols-1 justify-center gap-9 pt-6 md:grid-cols-2 xl:grid-cols-3 xl:pt-0'>
				{advantages.map((item, index) => {
					return (
						<div key={index} className='flex items-center gap-2'>
							<item.icon />
							<span className='tracking-0 leading-[1.7em] whitespace-nowrap text-black/50'>
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
