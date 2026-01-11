import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { CommentsSectionUpwork } from './CommentsSectionUpwork.tsx'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const ProcessSection = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')


	return (
		<section className='md:pb-50 pb-20' id='process'>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Process, Explained!' />
				<h2 className='mb-15 whitespace-pre-wrap break-words text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
					Here's how it works
				</h2>
			</div>

			<div className='place-items-center grid xs:grid-cols-1 lg:grid-cols-2 25xl:grid-cols-3 25xl:auto-rows-auto relative mb-5 box-border h-min w-full flex-wrap justify-center gap-3 overflow-visible p-0 font-sans text-[12px]'>
				<motion.div
					initial={{ x: '100%', y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='25xl:col-start-1 25xl:row-start-1 lg:col-start-1 lg:row-start-1 xs:col-start-1 xs:row-start-1 relative mt-16 flex sm:h-[454px] sm:max-w-[464px] xs:h-[324px] xs:max-w-[324px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					className='25xl:col-start-2 25xl:row-start-1 lg:col-start-2 lg:row-start-1 xs:col-start-1 xs:row-start-2 relative flex sm:h-[454px] sm:max-w-[464px] xs:h-[324px] xs:max-w-[324px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					initial={{ x: isMobile ? 0 : '-100%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='25xl:col-start-3 25xl:row-start-1 lg:col-start-1 lg:row-start-2 xs:col-start-1 xs:row-start-3 relative mt-16 flex sm:h-[454px] sm:max-w-[464px] xs:h-[324px] xs:max-w-[324px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					whileInView={{ x: '-7%', y: '-8%', rotate: 9, opacity: 1, zIndex: 2 }}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='25xl:col-start-2 25xl:row-start-2 lg:col-start-2 lg:row-start-3 xs:col-start-1 xs:row-start-5  relative mt-16 flex sm:h-[454px] sm:max-w-[464px] xs:h-[324px] xs:max-w-[324px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					className='25xl:col-start-3 25xl:row-start-2 lg:col-start-2 lg:row-start-2 xs:col-start-1 xs:row-start-4 relative mt-16 flex sm:h-[454px] sm:max-w-[464px] xs:h-[324px] xs:max-w-[324px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
