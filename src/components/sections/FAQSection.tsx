import React, { useState } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { FAQPlusIcon } from '../ui/icons/FAQPlusIcon.tsx'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon.tsx'
import { HeroSectionButton } from '../ui/HeroSectionButton.tsx'

type FAQItem = {
	question: string
	answer: string
}

const FAQ_ITEMS: FAQItem[] = [
	{
		question: 'What’s the difference between a subscription and a custom project?',
		answer:
			'The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch.',
	},
	{
		question: 'How fast is the turnaround?',
		answer:
			'Most requests are completed within a few business days, depending on complexity and current workload.',
	},
	{
		question: 'How many requests can I make?',
		answer:
			'You can add as many requests as you like to your queue. They will be delivered one by one in priority order.',
	},
	{
		question: 'What types of design do you handle?',
		answer:
			'I handle product design, marketing assets, web design, and brand support for digital-first companies.',
	},
	{
		question: 'What tools do you use?',
		answer:
			'Primarily Figma for design, plus supporting tools for prototyping, documentation, and handoff.',
	},
	{
		question: 'Can I pause the subscription?',
		answer:
			'Yes, you can pause or resume your subscription anytime if you don’t have active work.',
	},
	{
		question: 'Do you offer development too?',
		answer:
			'I collaborate closely with development teams and can support implementation, but my core focus is design.',
	},
]

type FAQRowProps = {
	item: FAQItem
	defaultOpen?: boolean
}

const FAQRow: React.FC<FAQRowProps> = ({ item, defaultOpen = false }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen)

	return (
		<div className='border-t border-black/10 first:border-t-0'>
			<button
				type='button'
				onClick={() => setIsOpen((prev) => !prev)}
				className='flex w-full items-center justify-between py-7 text-left text-[22px] leading-[1.6] tracking-[-0.02em] text-black'
			>
				<span className='pr-6'>{item.question}</span>

				<FAQPlusIcon
					size={18}
					className={[
						'shrink-0 transition-transform duration-200 ease-out',
						isOpen ? 'rotate-45 text-[rgb(255,55,0)]' : 'rotate-0 text-[rgb(255,55,0)]',
					].join(' ')}
				/>
			</button>

			<div
				className={[
					'grid transition-[grid-template-rows] duration-300 ease-out',
					isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
				].join(' ')}
			>
				<div
					className={[
						'overflow-hidden text-[16px] leading-[1.7] text-black/55',
						'transition-all duration-300 ease-out',
						isOpen
							? 'translate-y-0 pt-1 pb-4 opacity-100'
							: '-translate-y-1 pt-0 pb-0 opacity-0',
					].join(' ')}
				>
					{item.answer}
				</div>
			</div>
		</div>
	)
}

const FAQSection: React.FC = () => {
	return (
		<section className='relative w-full' id='faq'>
			<div className='mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 pb-20 md:px-8 md:pb-30 lg:gap-14 lg:px-12 '>
				<div className='flex flex-col items-center gap-2.5 text-center'>
					<SectionTitle title='FAQ' />
					<h2 className='flex flex-wrap items-baseline justify-center text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
						<span>Your Questions, Answered</span>
					</h2>
				</div>

				<div className='flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-20'>
					<motion.figure
						initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
						whileInView={{ x: 0, y: 0, rotate: -3, opacity: 1 }}
						transition={{ duration: 1.3, ease: 'easeOut' }}
						viewport={{ once: true, amount: 0.3 }}
						className='mx-auto w-full max-w-[600px] lg:max-w-[500px]'
					>
						<div className='rounded-2xl bg-[#e8e8e8] p-6 shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)] md:p-8'>
							<div className='flex items-center gap-6'>
								<div className='h-[82px] w-[82px] overflow-hidden rounded-full shadow-[0_0_0_8px_#ffffff40,12px_16px_16px_#0000001a]'>
									<img
										src='https://framerusercontent.com/images/zRVCa2eOgJIf1mJK5PYcBLrYI.png?width=512'
										alt='Portrait'
										className='h-full w-full object-cover'
									/>
								</div>

								<div className='flex flex-col leading-tight'>
									<p className='text-[22px] leading-[1.7] font-medium tracking-[-0.02em] text-black'>
										Have more questions?
									</p>
									<p className='text-[22px] leading-[1.7] font-medium tracking-[-0.02em] text-black'>
										Book a free discovery call
									</p>
								</div>
							</div>

							<div className='mt-8'>
								<HeroSectionButton
									title='Book a Discovery Call'
									icon={<ArrowRightIcon />}
									withOutline={true}
									fullWidth={true}
								/>
							</div>

							<p className='mt-6 text-center text-[13px] leading-[1.7] text-black/55'>
								Or, email me at{' '}
								<a
									href='mailto:joris@hanzo.com'
									className='text-[13px] font-medium text-[rgb(255,55,0)]'
								>
									joris@hanzo.com
								</a>
							</p>
						</div>
					</motion.figure>

					<div className='w-full lg:flex-1'>
						<div className='border-t border-black/10'>
							{FAQ_ITEMS.map((item, index) => (
								<FAQRow key={item.question} item={item} defaultOpen={index === 0} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQSection
