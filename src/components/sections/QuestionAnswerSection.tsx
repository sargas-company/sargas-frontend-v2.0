import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon } from '../ui/icons/PlusIcon'
import { MinusIcon } from '../ui/icons/MinusIcon'
import { HeadingWithScribble } from '../ui/HeadingWithScribble'
import { MultiStepInfoButton } from '../ui/buttons/MultiStepInfoButton.tsx'

const steps = [
	{
		id: 0,
		question: 'How quickly will you start working after I sign up?',
		answer:
			'We get started fast. Most clients are up and running within 1–2 business days, with your first tasks moving forward right after onboarding.',
	},
	{
		id: 1,
		question: 'What types of tasks can I request?',
		answer:
			'Pretty much anything your Shopify store needs — from design updates and CRO audits to custom development, app integrations, speed optimization, and bug fixes.',
	},
	{
		id: 2,
		question: 'Is there a limit to requests per month?',
		answer:
			'No cap on requests. You can send as many as you like, and we’ll work through them by priority. If your needs go beyond your plan hours, extra time is simply billed at $60/hr.',
	},
	{
		id: 3,
		question: 'What happens to unused hours?',
		answer:
			'Every month gives you a fresh block of hours dedicated to your growth, so nothing sits idle. We encourage you to keep a steady flow of tasks coming.',
	},
	{
		id: 4,
		question: 'Do you handle urgent issues?',
		answer:
			'Absolutely. If something mission-critical breaks, like checkout or payments, we jump on it right away to keep your store running smoothly.',
	},
]

const contentVariants = {
	collapsed: { opacity: 0, height: 0, y: -6 },
	open: { opacity: 1, height: 'auto' as const, y: 0 },
}

export const QuestionAnswerSection = () => {
	const [openSteps, setOpenSteps] = useState<number[]>([])

	const toggleStep = (stepId: number) => {
		setOpenSteps((prev) =>
			prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]
		)
	}

	return (
		<section className='w-full bg-transparent py-16'>
			<div className='mb-6 flex items-center justify-center md:mb-8'>
				<HeadingWithScribble prefix='Questions' highlight='Answers.' />
			</div>

			<div className='mx-auto flex w-full max-w-[980px] flex-col gap-10 md:flex-row md:items-start'>
				<div className='flex-1'>
					<div className='flex flex-col gap-2'>
						{steps.map((step) => {
							const isActive = openSteps.includes(step.id)

							return (
								<button
									key={step.id}
									type='button'
									onClick={() => toggleStep(step.id)}
									className='group cursor-pointer rounded-[1.5rem] bg-[#2450510d] p-[7px] text-left transition-colors'
								>
									<div
										className={[
											'flex min-h-[6rem] flex-col gap-[2rem] rounded-[1.5rem] p-[1.5rem] pb-0 transition-colors duration-200 md:min-h-[4.8rem]',
											isActive ? 'bg-white' : 'bg-transparent',
										]
											.filter(Boolean)
											.join(' ')}
									>
										<div className='flex items-center justify-between gap-4'>
											<span className='text-lg font-medium text-black'>
												{step.question}
											</span>

											<motion.span
												className='flex h-7 w-7 items-center justify-center rounded-full text-[#ff3700]'
												animate={{ rotate: isActive ? 180 : 0 }}
												transition={{ duration: 0.25, ease: 'easeInOut' }}
											>
												{isActive ? <MinusIcon /> : <PlusIcon />}
											</motion.span>
										</div>

										<AnimatePresence initial={false}>
											{isActive && (
												<motion.div
													key={step.id}
													initial='collapsed'
													animate='open'
													exit='collapsed'
													variants={contentVariants}
													transition={{
														duration: 0.28,
														ease: 'easeInOut',
													}}
													className='overflow-hidden'
												>
													<div className='pb-[1.5rem] pt-4'>
														<p className='text-sm font-normal leading-[1.4] text-[#909090]'>
															{step.answer}
														</p>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</button>
							)
						})}
					</div>
				</div>

				<div className='mt-6 w-full self-start md:sticky md:top-16 md:mt-0 md:w-[260px]'>
					<div className='flex flex-col items-start justify-start gap-5 rounded-3xl bg-neutral-900 px-6 py-5 text-3xl font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]'>
						<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(255,255,255,0.08),transparent),radial-gradient(80%_80%_at_80%_10%,rgba(255,255,255,0.05),transparent)]' />

						<div className={'h-[50px] w-[50px] rounded-2xl bg-white'}></div>
						<div>
							<span className={'text-xl'}>Feel free to reach out whenever</span>
							&nbsp;
							<span className={'text-xl text-[#8b8b8b]'}>you have questions.</span>
						</div>

						<MultiStepInfoButton title={'Ask a question'} variant={'white'} />
					</div>
				</div>
			</div>
		</section>
	)
}
