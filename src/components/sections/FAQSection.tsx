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
		question: 'What’s the difference between Fixed Price and a Retainer?',
		answer:
			'Fixed Price is best for a clearly defined scope with a set timeline and milestones. Retainer is ongoing development where you reserve a developer or a team month-to-month, with flexible priorities and continuous delivery.',
	},
	{
		question: 'What’s included in the Retainer?',
		answer:
			'A Retainer reserves monthly capacity for a dedicated developer or team. We run weekly planning, provide async updates, and deliver continuously (staging to production) so priorities can evolve without resetting the process.',
	},
	{
		question: 'What’s the minimum commitment?',
		answer:
			'Fixed Price projects start from $5,000 and are scoped before we lock budget and milestones. Retainers are monthly engagements and typically start with 1 month to validate fit and delivery cadence.',
	},
	{
		question: 'How fast can we start?',
		answer:
			'Typically within a few business days after aligning on scope (Fixed) or capacity (Retainer). If you have an urgent timeline, we’ll confirm availability on the call.',
	},
	{
		question: 'How do you scope a Fixed Price project?',
		answer:
			'We clarify goals, constraints, and acceptance criteria, then propose milestones with deliverables and timeline. After approval, we lock scope and budget. Changes are handled via a separate change request.',
	},
	{
		question: 'How do communication and updates work?',
		answer:
			'You’ll have a single point of contact, async updates, and regular check-ins (1–2 per week). We keep work visible in your preferred tools (Linear, Jira, ClickUp, and GitHub).',
	},
	{
		question: 'What types of projects are a good fit?',
		answer:
			'Web apps, dashboards, SaaS MVPs, integrations, performance improvements, and product iterations. If you already have a mobile app, we can align the web platform with existing flows and UX.',
	},
	{
		question: 'Can you take over an existing codebase?',
		answer:
			'Yes. We start with a quick technical review, identify risks and priorities, and propose the safest path forward (stabilize, improve, then ship).',
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
							? 'translate-y-0 pb-4 pt-1 opacity-100'
							: '-translate-y-1 pb-0 pt-0 opacity-0',
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
			<div className='md:pb-30 mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 pb-20 md:px-8 lg:gap-14 lg:px-12'>
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
										src='https://sargas.io/img/svg/logo.png'
										alt='Portrait'
										className='h-full w-full object-contain'
									/>
								</div>

								<div className='flex flex-col leading-tight'>
									<p className='text-[22px] font-medium leading-[1.7] tracking-[-0.02em] text-black'>
										Have more questions?
									</p>
									<p className='text-[22px] font-medium leading-[1.7] tracking-[-0.02em] text-black'>
										Book a free discovery call
									</p>
								</div>
							</div>

							<div className='mt-8'>
								<HeroSectionButton
									title='Book a Discovery Call'
									icon={<ArrowRightIcon />}
									href='https://calendly.com/contact-sargas/60-minute-meeting'
									withOutline={true}
									fullWidth={true}
								/>
							</div>

							<p className='mt-6 text-center text-[13px] leading-[1.7] text-black/55'>
								Or, email me at{' '}
								<a
									target='_blank'
									href='mailto:contact@sargas.io'
									className='text-[13px] font-medium text-[rgb(255,55,0)]'
								>
									contact@sargas.io
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
