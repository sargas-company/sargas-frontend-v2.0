import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Background } from '../layout/Background'
import noiseImage from '../../assets/noise.webp'
import { XIcon } from '../ui/icons/XIcon'
import { LinkedInIcon } from '../ui/icons/LinkedInIcon'
import { InstagramIcon } from '../ui/icons/InstagramIcon'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { IconAt } from '../ui/icons/IconAt.tsx'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon.tsx'
import { HeroSectionButton } from '../ui/HeroSectionButton.tsx'

type SocialLink = {
	label: string
	href: string
	render: (className: string) => React.ReactNode
}

const socialLinks: SocialLink[] = [
	{
		label: 'Email',
		href: 'mailto:hello@hanzostudio.com',
		render: (className: string) => <IconAt className={className} size={18} color={'white'} />,
	},
	{
		label: 'X',
		href: 'https://x.com',
		render: (className: string) => <XIcon className={className} size={18} />,
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com',
		render: (className: string) => <LinkedInIcon className={className} size={18} />,
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com',
		render: (className: string) => <InstagramIcon className={className} size={18} />,
	},
]

const useViewportHeight = () => {
	const [height, setHeight] = useState<number | null>(null)

	useEffect(() => {
		const handleResize = () => setHeight(window.innerHeight)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return height
}

export const FooterSection = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	const viewportHeight = useViewportHeight()

	const endOffset = useMemo(() => {
		if (!viewportHeight) return 1160
		const computed = 0.857 * viewportHeight - 91.3
		return Math.min(1760, Math.max(680, computed))
	}, [viewportHeight])

	const contentY = useTransform(scrollYProgress, [0, 1], [-360, endOffset])
	const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
	return (
		<section
			ref={sectionRef}
			className='relative isolate -mx-[calc(50vw-50%)] h-[100vh] max-h-[100vh] min-h-screen w-screen px-2 py-2 text-white md:px-2 md:py-2'
		>

			<div className='relative mx-auto h-full max-h-[100vh] w-full max-w-[100vw] overflow-hidden rounded-[25px] bg-black md:max-h-[100vh] md:max-w-[100vw]'>
				<div className='pointer-events-none absolute inset-0 z-0 opacity-8 mix-blend-screen'>
					<Background variant='section' />
				</div>
				<div className='pointer-events-none absolute inset-0 z-10 opacity-5 mix-blend-screen' style={{ backgroundImage: `url(${noiseImage})`, backgroundSize: '220px' }} />
				<div className='pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(140%_160%_at_15%_15%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(130%_130%_at_82%_18%,rgba(255,255,255,0.12),transparent_52%),linear-gradient(120deg,rgba(255,255,255,0.18),transparent_42%)] opacity-35 mix-blend-screen' />

				<motion.div
					style={{ y: contentY, opacity: contentOpacity }}
					className='relative flex min-h-[80vh] flex-col justify-between gap-8 px-6 py-12 text-center md:min-h-[85vh] md:px-16 md:py-16'
				>
					<div className='mt-4 space-y-8 md:mt-2'>
						<div className='flex items-center justify-center'>
							<SectionTitle
								title='2 spots available'
								textColor={'text-white/60'}
								lineColor={'rgba(255, 255, 255, 0.5)'}
							/>
						</div>

						<div className='space-y-5'>
							<h2 className='text-4xl leading-none tracking-tight md:text-8xl'>
								<span className='text-white'>Let&apos;s</span>{' '}
								<span className='font-medium text-neutral-400'>Connect</span>
							</h2>
							<div>
								<p className='mx-auto max-w-2xl text-base leading-relaxed tracking-tight text-white/80 md:text-xl'>
									Feel free to contact me if having any questions.
								</p>
								<p className='mx-auto max-w-2xl text-base leading-relaxed tracking-tight text-white/80 md:text-xl'>
									I&apos;m available for new projects or just for chatting.
								</p>
							</div>
						</div>

						<HeroSectionButton title='	Book a free intro call' icon={<ArrowRightIcon />} withOutline />
					</div>
				</motion.div>

				<div className='relative z-10 flex flex-col gap-5 items-center justify-between pt-2 pb-10 md:px-35 md:flex-row'>
					<div className='flex flex-col items-center gap-1 text-sm text-white/70 md:gap-3.5'>
						<span className='h-[0.5px] w-full bg-white' />
						<span className='px-4 whitespace-nowrap text-white'>© Hanzo Studio, 2025</span>
						<span className='h-[0.5px] w-full bg-white' />
					</div>

					<div className='flex items-center gap-3 md:gap-4'>
						{socialLinks.map((item) => (
							<a
								key={item.label}
								href={item.href}
								aria-label={item.label}
								className='flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/5 md:h-12 md:w-12'
							>
								{item.render('h-5 w-5 text-white')}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
