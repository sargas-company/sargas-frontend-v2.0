import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import devImg from '../../assets/dev_01.avif'
import { PlusIcon } from '../ui/icons/PlusIcon'
import { MinusIcon } from '../ui/icons/MinusIcon'
import { MultiStepInfoButton } from '../ui/buttons/MultiStepInfoButton'
import step1Img from '../../assets/MultiStepInfo/step1.webp'
import step2Img from '../../assets/MultiStepInfo/step2.webp'
import step3Img from '../../assets/MultiStepInfo/step3.webp'
import step4Img from '../../assets/MultiStepInfo/step4.webp'
import step5Img from '../../assets/MultiStepInfo/step5.webp'
import stepBgImg from '../../assets/MultiStepInfo/step_bg.webp'

const steps = [
	{
		id: 0,
		title: 'Choose a plan',
		description:
			'Pick the retainer that fits your store’s needs or request a custom one. Get started with a monthly plan or book a call to explore options.',
		button: 'View Plans',
		button_img: null,
		img: step1Img,
	},
	{
		id: 1,
		title: 'Free consultation',
		description:
			'We review your current Shopify setup, discuss goals and challenges, and agree on the priorities for future work.',
		button: 'Book a call',
		button_img: devImg,
		img: step2Img,
	},
	{
		id: 2,
		title: 'NDA and contract',
		description:
			'Secure your data with NDA and a simple contract, which gives flexibility to continue monthly or cancel anytime.',
		button: 'Book a call',
		button_img: devImg,
		img: step3Img,
	},
	{
		id: 3,
		title: 'Team onboarding',
		description:
			'Meet your Project Manager and Tech Lead, set up communication, and align the plan to grow your Shopify store.',
		button: 'Book a call',
		button_img: devImg,
		img: step4Img,
	},
	{
		id: 4,
		title: 'Work starts',
		description:
			'Our team begins within 1–2 days after onboarding, focusing on quick wins and long-term store performance.',
		button: 'Book a call',
		button_img: devImg,
		img: step5Img,
	},
]

const StepLoader = ({ duration }: { duration: number }) => {
	return (
		<div className='relative h-1 w-[3.75rem] overflow-hidden rounded-[6.25rem] bg-black/10'>
			<motion.div
				className='absolute bottom-0 left-0 top-0 h-full rounded-[6.25rem] bg-[#1B1B1B]'
				initial={{ width: '0%' }}
				animate={{ width: '100%' }}
				transition={{ duration: duration / 1000, ease: 'linear' }}
			/>
		</div>
	)
}

export const MultiStepInfoSection = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [timerKey, setTimerKey] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentStep((prev) => (prev + 1) % steps.length)
			setTimerKey((prev) => prev + 1)
		}, 7000)

		return () => clearTimeout(timeout)
	}, [currentStep, timerKey])

	const handleStepClick = (stepId: number) => {
		if (stepId === currentStep) {
			setTimerKey((prev) => prev + 1)
		} else {
			setCurrentStep(stepId)
			setTimerKey((prev) => prev + 1)
		}
	}

	return (
		<div className='relative flex w-full flex-col items-stretch justify-start pb-20 md:flex-row'>
			<div className='relative flex w-full flex-col gap-2 md:mr-6 md:min-w-[22.6875rem] md:max-w-[22.6875rem]'>
				{steps.map((step) => {
					const isActive = step.id === currentStep

					return (
						<div
							key={step.id}
							className='cursor-pointer rounded-[1.5rem] bg-[#2450510d] p-[7px]'
							onClick={() => handleStepClick(step.id)}
						>
							<div
								className={`flex min-h-[4.8rem] flex-col gap-[2rem] rounded-[1.5rem] p-[1.5rem] pb-0 ${
									isActive ? 'bg-white' : ''
								}`}
							>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-[1rem]'>
										<span className='tracking-0 text-sm leading-[120%] text-black/40'>{`0${
											step.id + 1
										}`}</span>
										<span className='text-lg font-medium text-black'>{step.title}</span>
									</div>
									<span>{isActive ? <MinusIcon /> : <PlusIcon />}</span>
								</div>

								{isActive && (
									<div className='flex flex-col gap-[2rem] pb-[1.5rem]'>
										<p className='text-sm font-normal leading-[1.2] text-[#909090]'>
											{step.description}
										</p>

										<div className='flex items-center justify-between'>
											<MultiStepInfoButton title={step.button} img={step.button_img} />

											<StepLoader key={`${currentStep}-${timerKey}`} duration={7000} />
										</div>
									</div>
								)}
							</div>
						</div>
					)
				})}
			</div>

			<div className='relative mt-6 h-[32rem] w-full overflow-hidden rounded-[1.5rem] md:mt-0 md:h-[22rem] md:h-auto md:flex-1'>
				<img
					src={stepBgImg}
					className='pointer-events-none absolute inset-0 h-full w-full object-cover'
				/>

				<div className='absolute inset-0 flex items-center justify-center p-12 sm:p-4 md:p-6 lg:p-10'>
					<div className='relative max-h-[90%] w-[75%] max-w-[1200px] overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:w-full sm:rounded-xl md:w-[90%] md:rounded-[1.5rem] lg:w-[80%]'>
						<img src={steps[currentStep].img} className='h-auto w-full object-contain' />
					</div>
				</div>
			</div>
		</div>
	)
}
