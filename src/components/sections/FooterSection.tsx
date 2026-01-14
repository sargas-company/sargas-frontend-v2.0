import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
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

// iOS-safe viewport height (visualViewport) + rAF throttling
const useIOSViewportHeight = () => {
	const [h, setH] = useState(0)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const vv = window.visualViewport
		const get = () => Math.round(vv?.height ?? window.innerHeight)

		let raf = 0
		const onResize = () => {
			cancelAnimationFrame(raf)
			raf = requestAnimationFrame(() => setH(get()))
		}

		onResize()
		vv?.addEventListener('resize', onResize)
		window.addEventListener('orientationchange', onResize)

		return () => {
			vv?.removeEventListener('resize', onResize)
			window.removeEventListener('orientationchange', onResize)
			cancelAnimationFrame(raf)
		}
	}, [])

	return h
}

export const FooterSection = () => {
	const sectionRef = useRef<HTMLElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	// сглаживаем прогресс
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 24,
		mass: 0.7,
	})

	const vh = useIOSViewportHeight()

	// фиксируем vh пока футер в кадре (toolbar iOS)
	const inView = useInView(sectionRef, { amount: 0.2 })
	const lockedVhRef = useRef<number | null>(null)

	useEffect(() => {
		if (!vh) return
		if (inView) {
			if (lockedVhRef.current == null) lockedVhRef.current = vh
		} else {
			lockedVhRef.current = null
		}
	}, [inView, vh])

	const stableVh = lockedVhRef.current ?? vh

	// вниз двигаем чуть-чуть (чтобы не наезжать на нижний блок)
	const endOffset = useMemo(() => {
		if (!stableVh) return 120
		const computed = stableVh * 0.18
		return Math.min(200, Math.max(110, computed))
	}, [stableVh])

	/**
	 * КЛЮЧЕВОЕ:
	 * - В середине прогресса (0.5) -> y = 0 (контент ровно по центру)
	 * - В начале чуть сверху, в конце чуть ниже
	 */
	const contentY = useTransform(smoothProgress, [0, 0.5, 1], [-120, 0, endOffset])
	const contentOpacity = useTransform(smoothProgress, [0, 0.25, 1], [0, 1, 1])

	const isMailto = (href: string) => /^\s*mailto:/i.test(String(href ?? ''))

	return (
		<section
			ref={sectionRef as any}
			id='cta'
			className='relative isolate -mx-[calc(50vw-50%)] w-screen px-2 py-2 text-white min-h-[100svh]'
		>
			<div className='relative mx-auto w-full max-w-[100vw] overflow-hidden rounded-[25px] bg-black flex min-h-[calc(100svh-16px)] flex-col'>
				{/* фон */}
				<div className='pointer-events-none absolute inset-0 z-0 opacity-8 mix-blend-screen'>
					<Background variant='section' />
				</div>

				<div
					className='pointer-events-none absolute inset-0 z-10 opacity-5 mix-blend-screen'
					style={{ backgroundImage: `url(${noiseImage})`, backgroundSize: '220px' }}
				/>

				<div className='pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(140%_160%_at_15%_15%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(130%_130%_at_82%_18%,rgba(255,255,255,0.12),transparent_52%),linear-gradient(120deg,rgba(255,255,255,0.18),transparent_42%)] opacity-35 mix-blend-screen' />

				{/* контент: ✅ центр делаем ЛЭЙАУТОМ */}
				<motion.div
					style={{
						y: contentY,
						opacity: contentOpacity,
						translateZ: 0,
					}}
					className='relative z-10 flex flex-1 items-center justify-center px-6 py-12 text-center md:px-16 md:py-16 will-change-transform'
				>
					{/* ✅ УБРАЛИ translate-y-[-50px], он ломал центр */}
					<div className='space-y-8'>
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
									I&apos;m available for new projects or just for chatting.
								</p>
							</div>
						</div>

						<HeroSectionButton
							title='Book a free intro call'
							href='https://calendly.com/contact-sargas/60-minute-meeting'
							icon={<ArrowRightIcon />}
							withOutline
						/>
					</div>
				</motion.div>

				{/* bottom */}
				<div className='relative z-10 mt-auto flex flex-col items-center justify-between gap-5 pb-10 pt-2 md:flex-row md:px-35'>
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
