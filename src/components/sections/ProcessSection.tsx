// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
//
// type Step = {
// 	id: number
// 	title: string
// 	description: string
// }
//
// const steps: Step[] = [
// 	{
// 		id: 1,
// 		title: 'Subscribe',
// 		description: 'Pick a plan that matches your needs and kickoff the partnership.',
// 	},
// 	{
// 		id: 2,
// 		title: 'Request',
// 		description: 'Submit design tasks anytime; we keep the queue flowing smoothly.',
// 	},
// 	{
// 		id: 3,
// 		title: 'Deliver',
// 		description: 'Receive polished work, iterate quickly, and launch with confidence.',
// 	},
// ]
//
// const cardVariants = {
// 	hidden: { opacity: 0, y: 24 },
// 	visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
// }
//
// const listVariants = {
// 	hidden: {},
// 	visible: { transition: { staggerChildren: 0.1 } },
// }

import { motion } from 'framer-motion'

const ProcessSection = () => {
	// const containerRef = useRef<HTMLDivElement | null>(null)
	// const { scrollYProgress } = useScroll({
	// 	target: containerRef,
	// 	offset: ['start end', 'end start'],
	// })
	// const parallaxY = useTransform(scrollYProgress, [0, 1], [12, -12])

	return (
		<section className=''>
			{/*<div className='w-full max-w-5xl space-y-12'>*/}
			{/*	<motion.div*/}
			{/*		ref={containerRef}*/}
			{/*		initial={{ opacity: 0, y: 40 }}*/}
			{/*		whileInView={{ opacity: 1, y: 0 }}*/}
			{/*		viewport={{ once: true, amount: 0.4 }}*/}
			{/*		transition={{ duration: 0.7, ease: 'easeOut' }}*/}
			{/*		className='space-y-10'*/}
			{/*	>*/}
			{/*		<div className='space-y-3 text-center'>*/}
			{/*			<div className='mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black'>*/}
			{/*				<div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />*/}
			{/*				<span>Our Process, Explained</span>*/}
			{/*			</div>*/}
			{/*			<h2 className='text-4xl font-semibold tracking-tight md:text-5xl'>*/}
			{/*				Here&apos;s how it works*/}
			{/*			</h2>*/}
			{/*		</div>*/}

			{/*		<motion.div*/}
			{/*			style={{ y: parallaxY }}*/}
			{/*			variants={listVariants}*/}
			{/*			initial='hidden'*/}
			{/*			whileInView='visible'*/}
			{/*			viewport={{ once: true, amount: 0.5 }}*/}
			{/*			className='grid gap-4 md:grid-cols-3'*/}
			{/*		>*/}
			{/*			{steps.map((step) => (*/}
			{/*				<motion.article*/}
			{/*					key={step.id}*/}
			{/*					variants={cardVariants}*/}
			{/*					whileHover={{ y: -6, scale: 1.03 }}*/}
			{/*					transition={{ duration: 0.2, ease: 'easeOut' }}*/}
			{/*					className='group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur'*/}
			{/*				>*/}
			{/*					<div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-base font-semibold text-white transition-colors duration-200 group-hover:border-white/60 group-hover:bg-white group-hover:text-black'>*/}
			{/*						{step.id}*/}
			{/*					</div>*/}
			{/*					<h3 className='mb-2 text-xl font-semibold text-white'>{step.title}</h3>*/}
			{/*					<p className='text-sm leading-relaxed text-white/70'>{step.description}</p>*/}
			{/*				</motion.article>*/}
			{/*			))}*/}
			{/*		</motion.div>*/}
			{/*	</motion.div>*/}
			{/*</div>*/}

			{/*<div className='relative box-border flex h-min w-full flex-none flex-row items-start justify-start gap-6 overflow-visible p-0 font-sans text-[12px]'>*/}
			{/*	<div className='relative flex h-[454px] w-[464px] rotate-[-9deg] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'>*/}
			{/*		<div className='flex h-full flex-col items-start justify-between gap-6'>*/}
			{/*			<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>*/}
			{/*				<strong className='font-normal'>1</strong>*/}
			{/*			</p>*/}
			{/*			<div className='flex flex-col gap-2'>*/}
			{/*				<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>*/}
			{/*					Subscribe*/}
			{/*				</h3>*/}
			{/*				<p className='text-[16px] leading-[1.7] text-black/50'>*/}
			{/*					Choose a plan and request as <br />*/}
			{/*					many designs as you need.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}

			{/*	<div className='relative flex h-[454px] w-[464px] rotate-[9deg] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'>*/}
			{/*		<div className='flex h-full flex-col items-start justify-between gap-6'>*/}
			{/*			<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>*/}
			{/*				<strong className='font-normal'>2</strong>*/}
			{/*			</p>*/}
			{/*			<div className='flex flex-col gap-2'>*/}
			{/*				<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>*/}
			{/*					Request*/}
			{/*				</h3>*/}
			{/*				<p className='text-[16px] leading-[1.7] text-black/50'>*/}
			{/*					Choose a plan and request as <br />*/}
			{/*					many designs as you need.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}

			{/*	<div className='relative flex h-[454px] w-[464px] rotate-[5deg] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'>*/}
			{/*		<div className='flex h-full flex-col items-start justify-between gap-6'>*/}
			{/*			<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>*/}
			{/*				<strong className='font-normal'>3</strong>*/}
			{/*			</p>*/}
			{/*			<div className='flex flex-col gap-2'>*/}
			{/*				<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>*/}
			{/*					Get Your Designs*/}

			{/*				</h3>*/}
			{/*				<p className='text-[16px] leading-[1.7] text-black/50'>*/}
			{/*					Choose a plan and request as <br />*/}
			{/*					many designs as you need.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}

			<div className='relative box-border flex h-min w-full flex-none flex-row items-start justify-center gap-6 overflow-visible p-0 font-sans text-[12px]'>
				{/* Card 1 */}
				<motion.div
					initial={{ x: '100%', y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0.5,
						duration: 1.5,

					}}
					viewport={{ once: true, amount: 0.4 }}
					className='relative flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] mt-16'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>
							<strong className='font-normal'>1</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Subscribe
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Choose a plan and request as <br />
								many designs as you need.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Card 2 */}
				<motion.div
					initial={{ x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: 0, y: 0, rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1.5,

					}}
					viewport={{ once: true, amount: 0.4 }}
					className='relative flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6 '>
						<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>
							<strong className='font-normal'>2</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Request
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Choose a plan and request as <br />
								many designs as you need.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Card 3 */}
				<motion.div
					initial={{ x: '-100%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1.5,

					}}
					viewport={{ once: true, amount: 0.4 }}
					className='relative flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] mt-16'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] leading-[90px] font-light tracking-[-0.06em] text-black'>
							<strong className='font-normal'>3</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Get Your Designs
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Choose a plan and request as <br />
								many designs as you need.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default ProcessSection

//function getStyledElement(el) {
//   const clone = el.cloneNode(true);
//   const all = el.getElementsByTagName("*");
//   const cloneAll = clone.getElementsByTagName("*");
//
//   const apply = (source, target) => {
//     const cs = getComputedStyle(source);
//     for (let i = 0; i < cs.length; i++) {
//       const prop = cs[i];
//       target.style.setProperty(prop, cs.getPropertyValue(prop));
//     }
//   };
//
//   apply(el, clone);
//
//   for (let i = 0; i < all.length; i++) {
//     apply(all[i], cloneAll[i]);
//   }
//
//   return clone.outerHTML;
// }
//
// copy(getStyledElement($0));
