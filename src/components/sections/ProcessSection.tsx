import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { CommentsSectionUpwork } from './CommentsSectionUpwork.tsx'

const ProcessSection = () => {
	return (
		<section className='md:pb-27 lg:pb-35 xl:pb-50 pb-20' id='process'>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Process, Explained!' />
				<h2 className='lg:mb-15 mb-5 whitespace-pre-wrap break-words text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
					Here's how it works
				</h2>
			</div>

			<div className='xs:grid-cols-1 25xl:grid-cols-3 25xl:auto-rows-auto relative mb-5 box-border grid h-min w-full flex-wrap place-items-center justify-center gap-3 overflow-visible p-0 font-sans text-[12px] md:grid-cols-2 lg:grid-cols-2'>
				<motion.div
					initial={{ x: '100%', y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:hidden 25xl:block 25xl:col-start-1 25xl:row-start-1 xs:col-start-1 xs:row-start-1 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] sm:h-[454px] sm:max-w-[464px] lg:col-start-1 lg:row-start-1'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] font-light leading-[90px] tracking-[-0.06em] text-black'>
							<strong className='font-normal'>1</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Share your needs
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Share your idea, goals, or problem - even if it’s still raw. <br />
								We help shape it into a clear direction.
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 0, y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:block 25xl:hidden 25xl:col-start-1 25xl:row-start-1 xs:col-start-1 xs:row-start-1 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:col-start-1 md:row-start-1 md:h-[340px] md:max-w-[340px] lg:col-start-1 lg:row-start-1 lg:h-[400px] lg:max-w-[400px]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[50px] font-light leading-[90px] tracking-[-0.06em] text-black md:text-[50px] lg:text-[60px] xl:text-[72px]'>
							<strong className='font-normal'>1</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Share your needs
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Share your idea, goals, or problem - even if it’s still raw. <br />
								We help shape it into a clear direction.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: 0, y: 30, rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='25xl:col-start-2 25xl:row-start-1 xs:col-start-1 xs:row-start-2 25xl:h-[454px] 25xl:max-w-[464px] xs:h-[324px] xs:max-w-[324px] relative flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:col-start-2 md:row-start-2 md:h-[340px] md:max-w-[340px] lg:col-start-2 lg:row-start-1 lg:h-[400px] lg:max-w-[400px]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[50px] font-light leading-[90px] tracking-[-0.06em] text-black lg:text-[60px] xl:text-[72px]'>
							<strong className='font-normal'>2</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Proposal & timeline
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								We analyze your needs and propose the best way forward - scope, timeline,
								and possible engagement options.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ x: '-100%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:hidden 25xl:block 25xl:col-start-3 25xl:row-start-1 xs:col-start-1 xs:row-start-3 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] sm:h-[454px] sm:max-w-[464px] lg:col-start-1 lg:row-start-2'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] font-light leading-[90px] tracking-[-0.06em] text-black'>
							<strong className='font-normal'>3</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Contract & kickoff
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Once the approach is clear, we finalize the collaboration model and kick
								things off.
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 0, y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:block 25xl:hidden 25xl:col-start-3 25xl:row-start-1 xs:col-start-1 xs:row-start-3 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:col-start-1 md:row-start-3 md:h-[340px] md:max-w-[340px] lg:col-start-1 lg:row-start-2 lg:h-[400px] lg:max-w-[400px]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[50px] font-light leading-[90px] tracking-[-0.06em] text-black lg:text-[60px] xl:text-[72px]'>
							<strong className='font-normal'>3</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Contract & kickoff
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Once the approach is clear, we finalize the collaboration model and kick
								things off.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ x: '50%', y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: '-7%', y: '-8%', rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:hidden 25xl:block 25xl:col-start-2 25xl:row-start-2 xs:col-start-1 xs:row-start-5 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] sm:h-[454px] sm:max-w-[464px] lg:col-start-2 lg:row-start-3'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] font-light leading-[90px] tracking-[-0.06em] text-black'>
							<strong className='font-normal'>5</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Work starts
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Development starts with clear priorities, predictable progress, and ongoing
								communication.
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: '-7%', y: '-8%', rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:block 25xl:hidden 25xl:col-start-2 25xl:row-start-2 xs:col-start-1 xs:row-start-5 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:col-start-1 md:row-start-5 md:h-[340px] md:max-w-[340px] lg:col-start-2 lg:row-start-3 lg:h-[400px] lg:max-w-[400px]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[50px] font-light leading-[90px] tracking-[-0.06em] text-black lg:text-[60px] xl:text-[72px]'>
							<strong className='font-normal'>5</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Work starts
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								Development starts with clear priorities, predictable progress, and ongoing
								communication.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ x: '-50%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:hidden 25xl:block 25xl:col-start-3 25xl:row-start-2 xs:col-start-1 xs:row-start-4 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] sm:h-[454px] sm:max-w-[464px] lg:col-start-2 lg:row-start-2'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] font-light leading-[90px] tracking-[-0.06em] text-black'>
							<strong className='font-normal'>4</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Onboarding
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								We onboard the developer or team into your workflow, tools, and
								communication process.
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 0, y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xs:block 25xl:hidden 25xl:col-start-3 25xl:row-start-2 xs:col-start-1 xs:row-start-4 xs:h-[324px] xs:max-w-[324px] relative mt-16 flex overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:col-start-2 md:row-start-4 md:h-[340px] md:max-w-[340px] lg:col-start-2 lg:row-start-2 lg:h-[400px] lg:max-w-[400px]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[50px] font-light leading-[90px] tracking-[-0.06em] text-black lg:text-[60px] xl:text-[72px]'>
							<strong className='font-normal'>4</strong>
						</p>
						<div className='flex flex-col gap-2'>
							<h3 className='text-[24px] leading-[1.6] tracking-[-0.02em] text-black'>
								Onboarding
							</h3>
							<p className='text-[16px] leading-[1.7] text-black/50'>
								We onboard the developer or team into your workflow, tools, and
								communication process.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<CommentsSectionUpwork />
		</section>
	)
}

export default ProcessSection
