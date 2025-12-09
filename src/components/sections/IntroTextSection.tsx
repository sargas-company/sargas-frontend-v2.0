import { useScroll, useTransform } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { useRef } from 'react'
import { DesignSystemsIcon } from '../ui/icons/DesignSystemsIcon'
import { UIUXIcon } from '../ui/icons/UIUXIcon'
import { ResearchIcon } from '../ui/icons/ResearchIcon'
import { AnimationIcon } from '../ui/icons/AnimationIcon'
import { PrototypingIcon } from '../ui/icons/PrototypingIcon'
import { StrategyIcon } from '../ui/icons/StrategyIcon'
import { IntroChip } from '../ui/IntroChip'
import { IntroTextSectionWordAnimation } from '../animation/IntroTextSectionWordAnimation'

const Content = [
	'We',
	'help',
	'startups',
	'and',
	'enterprise',
	'to',
	'establish',
	'an',
	'emotional',
	'connection',
	'between',
	'their',
	'products',
	'and',
	'happy',
	'engaged',
	'customer',
]

const chips = [
	{
		title: 'Design systems',
		icon: DesignSystemsIcon,
		bg: '#ff5e00',
		rotation: 3,
		positionClass: `
      absolute
      bottom-[209px] left-[26%] -translate-x-1/2
      md:bottom-auto md:top-[6px] md:left-[-36px] md:translate-x-0
      xl:top-[62px] xl:left-[-120px]
    `,
		animation: {
			fromX: -200,
			fromY: -60,
			initialRotateOffset: 8,
			delay: 0.1,
			duration: 0.7,
		},
	},
	{
		title: 'UI/UX',
		icon: UIUXIcon,
		bg: '#474747',
		rotation: 4,
		positionClass: `
      absolute
      bottom-[137px] left-[25%] -translate-x-1/2
      md:bottom-auto md:top-[43%] md:left-[-21px] md:translate-x-0 md:-translate-y-1/2
      xl:top-1/2 xl:left-[-57px]
    `,
		animation: {
			fromX: -200,
			fromY: 0,
			initialRotateOffset: -8,
			delay: 0.3,
			duration: 0.7,
		},
	},
	{
		title: 'Research',
		icon: ResearchIcon,
		bg: '#05a7ff',
		rotation: -4,
		positionClass: `
      absolute
      bottom-[64px] left-[30%] -translate-x-1/2
      md:bottom-[55px] md:left-[1px] md:translate-x-0
      xl:bottom-[52px] xl:left-[-75px]
    `,
		animation: {
			fromX: -200,
			fromY: 40,
			initialRotateOffset: -10,
			delay: 0.5,
			duration: 0.7,
		},
	},
	{
		title: 'Animation',
		icon: AnimationIcon,
		bg: '#52ff69',
		rotation: -5,
		positionClass: `
      absolute
      bottom-[220px] left-[75%] -translate-x-1/2
      md:bottom-auto md:top-[7px] md:right-[-20px] md:left-auto md:translate-x-0
      xl:top-[51px] xl:right-[-92px]
    `,
		animation: {
			fromX: 200,
			fromY: -40,
			initialRotateOffset: -10,
			delay: 0.7,
			duration: 0.7,
		},
	},
	{
		title: 'Prototyping',
		icon: PrototypingIcon,
		bg: '#ff45ab',
		rotation: -4,
		positionClass: `
      absolute
      bottom-[139px] left-[67%] -translate-x-1/2
      md:bottom-auto md:top-[42%] md:right-[-46px] md:left-auto md:translate-x-0 md:-translate-y-1/2
      xl:top-1/2 xl:right-[-98px]
    `,
		animation: {
			fromX: 200,
			fromY: -40,
			initialRotateOffset: -10,
			delay: 0.9,
			duration: 0.7,
		},
	},
	{
		title: 'Strategy',
		icon: StrategyIcon,
		bg: '#ffd500',
		rotation: 4,
		positionClass: `
      absolute
      bottom-[63px] left-[71%] -translate-x-1/2
      md:bottom-[76px] md:left-auto md:right-[-3px] md:translate-x-0
      xl:bottom-[52px] xl:right-[-78px]
    `,
		animation: {
			fromX: 200,
			fromY: 60,
			initialRotateOffset: 10,
			delay: 1.1,
			duration: 0.7,
		},
	},
]

export const IntroTextSection = () => {
	const ref = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start center', 'end end'],
	})

	const wordProgress = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, Content.length])

	return (
		<div className='relative' ref={ref}>
			<div
				className='absolute inset-0 -z-10'
				style={{
					background: `
        linear-gradient(
          45deg,
          #ffffff 0% 20%,
          #ffffff80 28%,
          #d9d9d9 36% 46%,
          #ffffff80 54%,
          #d9d9d9 60% 100%
        )
      `,
					WebkitMask: 'radial-gradient(50% 50%, #000 0%, transparent 100%)',
					mask: 'radial-gradient(50% 50%, #000 0%, transparent 100%)',
				}}
			/>
			<div className='flex min-h-[75vh] flex-col items-center justify-center gap-6 py-10 md:gap-7 md:py-10 xl:gap-0 xl:py-18'>
				<SectionTitle title='Hello!' />
				<div className='relative flex h-min max-w-[940px] flex-col gap-[260px] pb-[280px] md:gap-12 md:px-[96px] md:py-12 xl:px-[120px]'>
					<p className='font-inter-display text-center text-[28px] leading-[1.4em] font-normal tracking-[-0.04em] text-black md:text-[32px] xl:text-[44px]'>
						{Content.map((word, index) => (
							<IntroTextSectionWordAnimation
								key={index}
								content={word}
								index={index}
								progress={wordProgress}
							/>
						))}
					</p>

					{chips.map((chip) => (
						<IntroChip key={chip.title} chip={chip} />
					))}
				</div>
			</div>
		</div>
	)
}
