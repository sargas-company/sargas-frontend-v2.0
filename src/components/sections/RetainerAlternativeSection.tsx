import bgImg from '../../assets/retainer-section-bg.webp'
import { MultiStepInfoButton } from '../ui/buttons/MultiStepInfoButton'

export const RetainerAlternativeSection = () => {
	return (
		<div
			className='relative flex flex-col items-center justify-center gap-8 overflow-hidden rounded-[24px] bg-white bg-cover bg-center p-6 pt-10 pb-[104px] shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_0_rgba(0,0,0,0.1)] md:pt-14 md:pb-[148px] xl:pt-19 xl:pb-[196px]'
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className='flex flex-col gap-6'>
				<h2 className='text-center text-2xl font-medium md:text-3xl xl:text-4xl'>
					Not ready for a <span className='text-black/50'>retainer?</span>
				</h2>
				<p className='text-center leading-[150%] text-black/50'>
					We also take on custom and one-time projects.
					<br /> Let’s talk about your goals.
				</p>
			</div>
			<div>
				<MultiStepInfoButton title='Book a discovery call' img={null} />
			</div>
		</div>
	)
}
