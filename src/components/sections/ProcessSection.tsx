import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle.tsx'
import { CommentsSection } from './CommentsSection.tsx'

const ProcessSection = () => {
	return (
		<section className='pb-16' id='process'>
			<div className='flex flex-col items-center gap-2.5'>
				<SectionTitle title='Our Process, Explained!' />
				<h2 className='mb-15 text-[28px] leading-[1.4] tracking-[-0.04em] break-words whitespace-pre-wrap md:text-[48px]'>
					Here's how it works
				</h2>
			</div>

			<div className='relative mb-5 box-border flex h-min w-full flex-none flex-row items-start justify-center gap-6 overflow-visible p-0 font-sans text-[12px]'>
				<motion.div
					initial={{ x: '100%', y: 40, rotate: -15, opacity: 1, zIndex: 1 }}
					whileInView={{ x: 0, y: 0, rotate: -5, opacity: 1, zIndex: 1 }}
					transition={{
						delay: 0.5,
						duration: 1.5,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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
					<div className='flex h-full flex-col items-start justify-between gap-6'>
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

				<motion.div
					initial={{ x: '-100%', y: 40, rotate: 15, opacity: 1, zIndex: 3 }}
					whileInView={{ x: 0, y: 0, rotate: 3, opacity: 1, zIndex: 3 }}
					transition={{
						delay: 0.5,
						duration: 1.5,
					}}
					viewport={{ once: true, amount: 0.4 }}
					className='relative mt-16 flex h-[454px] w-[464px] overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'
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

			<CommentsSection />
		</section>
	)
}

export default ProcessSection
