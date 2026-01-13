import { useScroll, useTransform } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { useRef } from 'react'
import { DesignSystemsIcon } from '../ui/icons/DesignSystemsIcon'
import { UIUXIcon } from '../ui/icons/UIUXIcon'
import { ResearchIcon } from '../ui/icons/ResearchIcon'
import { PrototypingIcon } from '../ui/icons/PrototypingIcon'
import { StrategyIcon } from '../ui/icons/StrategyIcon'
import { IntroChip } from '../ui/IntroChip'
import { IntroTextSectionWordAnimation } from '../animation/IntroTextSectionWordAnimation'
import { SecurityIcon } from '../ui/icons/SecurityIcon.tsx'

import aws from '../../assets/tech/aws.svg'
import docker from '../../assets/tech/docker.svg'
import javascript from '../../assets/tech/javascript.svg'
import n8n from '../../assets/tech/n8n.svg'
import nestjs from '../../assets/tech/nestjs.svg'
import nextJs from '../../assets/tech/nextjs.svg'
import nginx from '../../assets/tech/nginx.svg'
import nodejs from '../../assets/tech/nodejs.svg'
import reactjs from '../../assets/tech/reactjs.svg'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation.tsx'

const Content = [
	'We',
	'help',
	'B2B',
	'teams',
	'and',
	'startups',
	'build',
	'AI-ready',
	'SaaS',
	'platforms',
	'marketplaces',
	'and',
	'internal',
	'tools',
	'with',
	'production-grade',
	'APIs',
	'and',
	'automation',
	'that',
	'removes',
	'manual',
	'work',
]

const technologies = [
	{
		src: aws,
		alt: 'aws',
		width: '50px',
	},
	{
		src: docker,
		alt: 'docker',
		width: '50px',
	},
	{
		src: javascript,
		alt: 'javascript',
		width: '50px',
	},
	{
		src: nodejs,
		alt: 'nodejs',
		width: '50px',
	},
	{
		src: nestjs,
		alt: 'nestjs',
		width: '50px',
	},
	{
		src: nextJs,
		alt: 'nextJs',
		width: '50px',
	},
	{
		src: n8n,
		alt: 'n8n',
		width: '90px',
	},
	{
		src: nginx,
		alt: 'nginx',
		width: '50px',
	},
	{
		src: reactjs,
		alt: 'reactjs',
		width: '50px',
	},
]

const chips = [
	{
		title: 'API & Integrations',
		icon: DesignSystemsIcon,
		bg: '#ff5e00',
		rotation: 7,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[209px] left-[26%] -translate-x-1/2
      md:bottom-auto md:top-[6px] md:left-[-86px] md:translate-x-0
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
		title: 'UX for SaaS / Product UX',
		icon: UIUXIcon,
		bg: '#474747',
		rotation: 4,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[137px] left-[25%] -translate-x-1/2
      md:bottom-auto md:top-[43%] md:left-[-111px] md:translate-x-0 md:-translate-y-1/2
      xl:top-1/2 xl:left-[-157px]
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
		title: 'Automation',
		icon: ResearchIcon,
		bg: '#05a7ff',
		rotation: -4,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[64px] left-[30%] -translate-x-1/2
      md:bottom-[35px] md:left-[-60px] md:translate-x-0
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
		title: 'Security',
		icon: SecurityIcon,
		bg: '#52ff69',
		rotation: -8,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[220px] left-[75%] -translate-x-1/2
      md:bottom-auto md:top-[17px] md:right-[-40px] md:left-auto md:translate-x-0
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
		rotation: -2,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[139px] left-[67%] -translate-x-1/2
      md:bottom-auto md:top-[48%] md:right-[-56px] md:left-auto md:translate-x-0 md:-translate-y-1/2
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
		title: 'Architecture Strategy',
		icon: StrategyIcon,
		bg: '#ffd500',
		rotation: 6,
		positionClass: `
      lg:absolute lg:block xs:hidden
      bottom-[63px] left-[71%] -translate-x-1/2
      md:bottom-[26px] md:left-auto md:right-[-100px] md:translate-x-0
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
			<div className='md:pb-27 lg:pb-35 xl:pb-50  xl:py-18 xl:mb-15 xl:mt-15 flex min-h-[62vh] md:min-h-[75vh] flex-col items-center justify-center gap-6 py-10 md:gap-7 md:py-10 xl:gap-0'>
				<SectionTitle title='Hello!' />
				<div className='relative flex h-min max-w-[940px] flex-col gap-[260px] pb-[30px] md:gap-12 md:px-[96px] md:py-12 xl:px-[120px]'>
					<p className='font-inter-display text-center text-[28px] font-normal leading-[1.4em] tracking-[-0.04em] text-black md:text-[32px] xl:text-[44px]'>
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
				<div className='mt-5 flex flex-row items-center flex-wrap justify-center sm:flex-nowrap'>
					{technologies.map((item, index) => (
						<HeroSectionLetterAnimation
							initialDelay={0.5}
							delayRate={index * 0.07}
							key={index}
						>
							<img
								width={item.width}
								height='auto'
								className='ml-4 mb-4'
								src={item.src}
								alt={item.alt}
							/>
						</HeroSectionLetterAnimation>
					))}
				</div>
			</div>
		</div>
	)
}
