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
// import usImg from '../../assets/us_timezone.png'
// import esImg from '../../assets/es_timezone.webp'
// import plImg from '../../assets/pl_timezone.webp'

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

// const timezones = [
// 	// {
// 	// 	country: 'United States',
// 	// 	code: 'US',
// 	// 	img: usImg,
// 	// 	addressLine1: '136 Madison Avenue,',
// 	// 	addressLine2: 'New York',
// 	// 	utcOffset: 'UTC -6',
// 	// 	timeZone: 'America/New_York',
// 	// },
// 	// {
// 	// 	country: 'Spain',
// 	// 	code: 'ES',
// 	// 	img: esImg,
// 	// 	addressLine1: '147 Carrer de Alaba,',
// 	// 	addressLine2: 'Barcelona',
// 	// 	utcOffset: 'UTC -1',
// 	// 	timeZone: 'Europe/Madrid',
// 	// },
// 	// {
// 	// 	country: 'Poland',
// 	// 	code: 'PL',
// 	// 	img: plImg,
// 	// 	addressLine1: '126/134 Marszałkowska',
// 	// 	addressLine2: 'Warsaw',
// 	// 	utcOffset: 'UTC -1',
// 	// 	timeZone: 'Europe/Warsaw',
// 	// },
// ]


// const useTimeByZone = (zones: string[]) => {
// 	const zonesKey = zones.join('|')
//
// 	const [times, setTimes] = useState<Record<string, string>>({})
//
// 	useEffect(() => {
// 		let mounted = true
//
// 		const update = () => {
// 			if (!mounted) return
// 			const now = new Date()
// 			const next: Record<string, string> = {}
//
// 			for (const zone of zones) {
// 				try {
// 					next[zone] = new Intl.DateTimeFormat('en-GB', {
// 						hour: '2-digit',
// 						minute: '2-digit',
// 						hour12: false,
// 						timeZone: zone,
// 					}).format(now)
// 				} catch (e) {
//
// 					next[zone] = '--:--'
// 				}
// 			}
//
// 			if (mounted) setTimes(next)
// 		}
//
// 		update()
// 		const id = setInterval(update, 60_000)
//
// 		return () => {
// 			mounted = false
// 			clearInterval(id)
// 		}
// 	}, [zonesKey])
//
// 	return times
// }

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

	// const zones = useMemo(() => timezones.map((t) => t.timeZone), [])

	// const timeByZone = useTimeByZone(zones)

	return (
		<section
			ref={sectionRef}
			className='relative isolate -mx-[calc(50vw-50%)] h-full max-h-none min-h-screen w-screen px-2 py-2 text-white md:h-[100vh] md:max-h-[100vh] md:px-2 md:py-2'
			id='cta'
		>
			<div className='relative mx-auto h-full max-h-none w-full max-w-[100vw] overflow-hidden rounded-[25px] bg-black md:h-[100vh] md:max-h-[100vh] md:max-w-[100vw]'>
				<div className='pointer-events-none absolute inset-0 z-0 opacity-8 mix-blend-screen'>
					<Background variant='section' />
				</div>
				<div
					className='pointer-events-none absolute inset-0 z-10 opacity-5 mix-blend-screen'
					style={{ backgroundImage: `url(${noiseImage})`, backgroundSize: '220px' }}
				/>
				<div className='pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(140%_160%_at_15%_15%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(130%_130%_at_82%_18%,rgba(255,255,255,0.12),transparent_52%),linear-gradient(120deg,rgba(255,255,255,0.18),transparent_42%)] opacity-35 mix-blend-screen' />

				<motion.div
					style={{ y: contentY, opacity: contentOpacity }}
					className='relative flex min-h-[80vh] flex-col px-6 py-12 text-center md:min-h-[85vh] md:px-16 md:py-16'
				>
					<div className='mt-4 translate-y-[-50px] space-y-8 md:mt-2'>
						<div className='flex items-center justify-center'>
							<SectionTitle
								title='We are available'
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

						<HeroSectionButton
							title='	Book a free intro call'
							icon={<ArrowRightIcon />}
							withOutline
						/>
					</div>
					{/*<div className='mx-auto flex w-full max-w-[1440px] flex-col justify-center gap-[1.5rem] md:flex-row'>*/}
					{/*	{timezones.map((item, index) => {*/}
					{/*		return (*/}
					{/*			<div*/}
					{/*				key={index}*/}
					{/*				className='w-full flex-1 basis-0 rounded-[1.5rem] bg-[linear-gradient(327deg,#a5a5a580,#3f3f3f_22%_78%,#a5a5a580)] p-px shadow-[0_0.1875rem_0.25rem_#0000001a,inset_0_0.125rem_0.25rem_#5a5a5a26] backdrop-blur-[1.25rem]'*/}
					{/*			>*/}
					{/*				<div className='flex h-full justify-between gap-1 rounded-[1.5rem] bg-[linear-gradient(#3f3f3f,#252525)] p-6 shadow-[0_0.1875rem_0.25rem_#0000001a,inset_0_0.25rem_0.125rem_#5a5a5a26]'>*/}
					{/*					<div className='flex flex-col justify-between'>*/}
					{/*						<p className='text-left text-sm font-semibold'>{item.country}</p>*/}
					{/*						<p className='text-left text-xs font-medium'>*/}
					{/*							{item.addressLine1}*/}
					{/*							<br />*/}
					{/*							{item.addressLine2}*/}
					{/*						</p>*/}
					{/*					</div>*/}
					{/*					<div className='flex flex-col justify-between'>*/}
					{/*						<p className='flex items-center justify-end gap-2'>*/}
					{/*							<span className='text-xs text-[#909090]'>{item.code}</span>*/}
					{/*							<img*/}
					{/*								src={item.img}*/}
					{/*								alt={item.code}*/}
					{/*								className='h-[12px] w-[18px]'*/}
					{/*							/>*/}
					{/*						</p>*/}
					{/*						<p className='flex items-center gap-2 text-right text-sm font-semibold'>*/}
					{/*							{timeByZone[item.timeZone] ?? '--:--'}*/}
					{/*							<span className='ml-1 text-xs text-[#909090]'>*/}
					{/*								({item.utcOffset})*/}
					{/*							</span>*/}
					{/*						</p>*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		)*/}
					{/*	})}*/}
					{/*</div>*/}
				</motion.div>

				<div className='relative z-10 mt-45 flex flex-col items-center justify-between gap-5 pt-2 pb-10 md:mt-0 md:flex-row md:px-35'>
					<div className='flex flex-col items-center gap-1 text-sm text-white/70 md:gap-3.5'>
						<span className='h-[0.5px] w-full bg-white' />
						<span className='px-4 whitespace-nowrap text-white'>© Sargas Agency, 2025</span>
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
