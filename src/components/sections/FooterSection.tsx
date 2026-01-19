import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Background } from '../layout/Background'
import noiseImage from '../../assets/noise.webp'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { IconAt } from '../ui/icons/IconAt.tsx'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon.tsx'
import { HeroSectionButton } from '../ui/HeroSectionButton.tsx'
import { WAIcon } from '../ui/icons/WAIcon.tsx'
import { TGIcon } from '../ui/icons/TGIcon.tsx'
import { LnIcon } from '../ui/icons/lnIcon.tsx'

type SocialLink = {
	label: string
	href: string
	render: (className: string) => React.ReactNode
}

const socialLinks: SocialLink[] = [
	{
		label: 'Telegram',
		href: 'https://telegram.me/vadym_chervonchenko',
		render: (className: string) => <TGIcon color='#fff' className={className} size={20} />,
	},
	{
		label: 'WhatsApp',
		href: 'https://wa.me/380993013514',
		render: (className: string) => <WAIcon color='#fff' className={className} size={20} />,
	},
	{
		label: 'LinkedIn',
		href: 'https://ua.linkedin.com/in/vadym-chervonchenko-118053167',
		render: (className: string) => <LnIcon color='#fff' className={className} size={20} />,
	},
	{
		label: 'Email',
		href: 'mailto:contact@sargas.io',
		render: (className: string) => <IconAt className={className} size={20} color={'white'} />,
	},
]

// ✅ iPhone/jank fix: use visualViewport height + rAF + small debounce
const useViewportHeight = () => {
	const [height, setHeight] = useState<number | null>(null)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const vv = window.visualViewport
		const getH = () => Math.round(vv?.height ?? window.innerHeight)

		let raf = 0
		let t: any = null

		const schedule = () => {
			cancelAnimationFrame(raf)
			raf = requestAnimationFrame(() => {
				clearTimeout(t)
				t = setTimeout(() => setHeight(getH()), 100)
			})
		}

		setHeight(getH())

		vv?.addEventListener('resize', schedule)
		vv?.addEventListener('scroll', schedule) // iOS can change viewport on scroll (toolbar)
		window.addEventListener('orientationchange', schedule)

		return () => {
			vv?.removeEventListener('resize', schedule)
			vv?.removeEventListener('scroll', schedule)
			window.removeEventListener('orientationchange', schedule)
			cancelAnimationFrame(raf)
			clearTimeout(t)
		}
	}, [])

	return height
}

export const FooterSection = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	// ✅ smooth progress to reduce micro-jitters
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 25,
		mass: 0.8,
	})

	const viewportHeight = useViewportHeight()

	const endOffset = useMemo(() => {
		if (!viewportHeight) return 1160
		const computed = 0.857 * viewportHeight - 91.3
		return Math.min(1760, Math.max(680, computed))
	}, [viewportHeight])

	const contentY = useTransform(smoothProgress, [0, 1], [-360, endOffset])
	const contentOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 1])

	const isMailto = (href: string) => /^\s*mailto:/i.test(String(href ?? ''))

	return (
		<section
			ref={sectionRef}
			className='relative isolate -mx-[calc(50vw-50%)] h-full max-h-none min-h-screen w-screen px-2 py-2 text-white md:h-[100vh] md:max-h-[100vh] md:px-2 md:py-2'
			id='cta'
		>
			<div className='relative mx-auto h-full max-h-none w-full max-w-[100vw] overflow-hidden rounded-[25px] bg-black md:h-[100vh] md:max-h-[100vh] md:max-w-[100vw]'>
				<div className='opacity-8 pointer-events-none absolute inset-0 z-0 mix-blend-screen'>
					<Background variant='section' />
				</div>

				<div
					className='pointer-events-none absolute inset-0 z-10 opacity-5 mix-blend-screen'
					style={{ backgroundImage: `url(${noiseImage})`, backgroundSize: '220px' }}
				/>

				<div className='pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(140%_160%_at_15%_15%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(130%_130%_at_82%_18%,rgba(255,255,255,0.12),transparent_52%),linear-gradient(120deg,rgba(255,255,255,0.18),transparent_42%)] opacity-35 mix-blend-screen' />

				<motion.div
					style={{
						y: contentY,
						opacity: contentOpacity,
						translateZ: 0, // ✅ keep GPU path on iOS
					}}
					className='relative flex min-h-[60vh] flex-col px-6 py-12 text-center md:min-h-[85vh] md:px-16 md:py-16 will-change-transform'
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
							<h2 className='text-6xl leading-none tracking-tight md:text-6xl lg:text-8xl'>
								<span className='text-white'>Let&apos;s</span>{' '}
								<span className='font-medium text-neutral-400'>Connect</span>
							</h2>

							<div>
								<p className='mx-auto max-w-2xl text-base leading-relaxed tracking-tight text-white/80 md:text-xl'>
									Feel free to contact me if having any questions.
								</p>
								<p className='mx-auto max-w-2xl text-base leading-relaxed tracking-tight text-white/80 md:text-xl'>
									We are available for new projects or just for chatting.
								</p>
							</div>
						</div>

						<HeroSectionButton
							title='	Book a free intro call'
							href='https://calendly.com/contact-sargas/60-minute-meeting'
							icon={<ArrowRightIcon />}
							withOutline
						/>
					</div>
				</motion.div>

				<div className='mt-45 md:px-35 relative z-10 flex flex-col items-center justify-between gap-5 pb-10 pt-2 md:mt-0 md:flex-row'>
					<div className='flex flex-col items-center gap-1 text-sm text-white/70 md:gap-3.5'>
						<span className='h-[0.5px] w-full bg-white' />
						<span className='whitespace-nowrap px-4 text-white'>© Sargas Agency, 2025</span>
						<span className='h-[0.5px] w-full bg-white' />
					</div>

					<div className='flex items-center gap-3 md:gap-4'>
						{socialLinks.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target={!isMailto(item.href) ? '_blank' : undefined}
								rel={!isMailto(item.href) ? 'noreferrer' : undefined}
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
