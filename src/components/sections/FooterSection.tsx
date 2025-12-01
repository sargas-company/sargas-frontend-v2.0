import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Background } from '../layout/Background'
import { XIcon } from '../ui/icons/XIcon'
import { LinkedInIcon } from '../ui/icons/LinkedInIcon'
import { InstagramIcon } from '../ui/icons/InstagramIcon'

type SocialLink = {
	label: string
	href: string
	render: (className: string) => React.ReactNode
}

const socialLinks: SocialLink[] = [
	{
		label: 'Email',
		href: 'mailto:hello@hanzostudio.com',
		render: (className: string) => <span className={`text-lg font-semibold ${className}`}>@</span>,
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
			className='relative isolate w-screen -mx-[calc(50vw-50%)] min-h-screen max-h-[100vh] h-[100vh] px-2 py-2 text-white md:px-2 md:py-2'
		>
			<div className='relative mx-auto w-full h-full max-w-[100vw] max-h-[100vh] overflow-hidden rounded-[25px] bg-black md:max-w-[100vw]  md:max-h-[100vh] '>
				<div className='pointer-events-none absolute inset-0 -z-10 opacity-40'>
					<Background variant='section' />
				</div>
				<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_10%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(120%_120%_at_80%_20%,rgba(255,255,255,0.06),transparent_50%),linear-gradient(120deg,rgba(255,255,255,0.18),transparent_32%)] opacity-70' />

				<motion.div
					style={{ y: contentY, opacity: contentOpacity }}
					className='relative flex min-h-[90vh] flex-col justify-between gap-8 px-6 py-12 text-center md:min-h-[75vh] md:px-16 md:py-16'
				>
					<div className='mt-4 space-y-6 md:mt-2'>
						<div className='flex items-center justify-center gap-4 text-sm font-medium text-white/60 md:text-base'>
							<span className='h-px w-16 bg-white/20' />
							<span className='italic'>2 spots available</span>
							<span className='h-px w-16 bg-white/20' />
						</div>
						<div className='space-y-2'>
							<h2 className='text-4xl font-semibold leading-none tracking-tight md:text-6xl'>
								<span className='text-white'>Let&apos;s</span>{' '}
								<span className='font-medium text-neutral-400'>Connect</span>
							</h2>
							<p className='mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg'>
								Feel free to contact me if having any questions. I&apos;m available for new projects
								or just for chatting.
							</p>
						</div>
						<div className='flex flex-col items-center gap-10'>
							<button className='group relative inline-flex items-center justify-center rounded-full bg-neutral-700/70 px-3 py-2 shadow-[0_12px_38px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-neutral-600/70'>
							<span className='inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition duration-300 group-hover:-translate-y-0.5 md:px-7 md:py-3.5 md:text-base'>
								Book a free intro call
								<span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-semibold text-black'>
									→
								</span>
							</span>
							</button>

							<div className='flex flex-col items-center gap-4 text-sm text-white/70'>
								<div className='flex items-center gap-3'>
									<span className='h-px w-16 bg-white/20 md:w-20' />
									<span className='whitespace-nowrap'>© Hanzo Studio, 2025</span>
									<span className='h-px w-16 bg-white/20 md:w-20' />
								</div>
							</div>
						</div>
					</div>


				</motion.div>

				<div className='relative z-10 flex items-center justify-center pb-10 pt-2'>
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
