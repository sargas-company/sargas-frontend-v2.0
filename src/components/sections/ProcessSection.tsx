import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { AnimateRightWave } from '../ui/icons/wave/AnimateRightIcon.tsx'
import { AnimateLeftWave } from '../ui/icons/wave/AnimateLeftWave.tsx'
import { CommentsSectionUpwork } from './CommentsSectionUpwork.tsx'

const ProcessSection = () => {
	return (
		<section className='md:pb-50 pb-20' id='process'>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Process, Explained!' />
				<h2 className='mb-15 whitespace-pre-wrap break-words text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
					Here's how it works
				</h2>
			</div>

			<div className='grid xl:grid-cols-3 md:grid-cols-2 xl:auto-rows-auto relative mb-5 box-border h-min w-full flex-wrap justify-center gap-3 overflow-visible p-0 font-sans text-[12px]'>
				<div className='pointer-events-none absolute inset-0 hidden lg:block'>
					<AnimateRightWave
						size={200}
						className='absolute left-[60%] top-[11%] z-20 rotate-[90deg]'
					/>
					<AnimateLeftWave
						size={250}
						className='absolute bottom-[68%] right-[59%] z-20 rotate-[340deg]'
					/>
					<AnimateLeftWave
						size={250}
						className='absolute bottom-[10%] right-[45%] z-20 rotate-[340deg]'
					/>
					<AnimateLeftWave
						size={250}
						className='absolute bottom-[33%] right-[5%] z-20 rotate-[130deg]'
					/>
				</div>

				<motion.div
					initial={{ x: '100%', y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xl:col-start-1 xl:row-start-1 md:col-start-1 md:row-start-1 relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					initial={{ x: 0, y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: 0, y: 0, rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xl:col-start-2 xl:row-start-1 md:col-start-2 md:row-start-1 relative flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
				>
					<div className='flex h-full flex-col items-start justify-between gap-6'>
						<p className='text-[72px] font-light leading-[90px] tracking-[-0.06em] text-black'>
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
					className='xl:col-start-3 xl:row-start-1 md:col-start-1 md:row-start-2 relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					initial={{ x: '50%', y: 0, rotate: 0, opacity: 1, zIndex: 2 }}
					whileInView={{ x: '-14%', y: 0, rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xl:col-start-2 xl:row-start-2 md:col-start-2 md:row-start-3  relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					initial={{ x: '-50%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='xl:col-start-3 xl:row-start-2 md:col-start-2 md:row-start-2 relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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

			</div>

			<CommentsSectionUpwork />
		</section>
	)
}

export default ProcessSection
