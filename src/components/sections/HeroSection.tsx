import { VerticalMotionListAnimation } from '../animation/VerticalMotionListAnimation'
import { HorizontalMotionListAnimation } from '../animation/HorizontalMotionListAnimation'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { motion } from 'framer-motion'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon'
import UpIcon from '../../assets/UpworkIcon.webp'
import { ClutchIcon } from '../ui/icons/ClutchIcon.tsx'
import {Link} from "react-router-dom";
import {NeonFrame} from "../animation/NeonFrame.tsx";

export const HeroSection = () => {
	return (
		<div className='flex flex-col gap-6 pt-[180px] pb-20 md:gap-7 md:pb-14 xl:gap-12 xl:pb-[118px]'>
			<div className='flex flex-col items-center gap-9'>
				<div className='flex h-min max-w-none flex-none flex-wrap items-center justify-center gap-1.5 md:max-w-[718px] md:gap-2 xl:max-w-[980px]'>
					<div>
						<h1>
							<strong>
								<span className='text-[44px] leading-[1.25em] !font-medium tracking-[-0.06em] md:text-[80px] md:leading-[1.15em] xl:text-[108px]'>
									{'AI-ready'.split('').map((letter, index) => {
										return (
											<HeroSectionLetterAnimation
												initialDelay={0.5}
												delayRate={index * 0.07}
												key={index}
											>
												{letter}
											</HeroSectionLetterAnimation>
										)
									})}
								</span>
								<span className='h-full px-1.5 md:px-2 xl:px-2.5' />
							</strong>
						</h1>
					</div>
					<div>
						<VerticalMotionListAnimation />
					</div>
					<div>
						<h1>
							<strong>
								<span className='h-full px-1.5 md:px-2 xl:px-2.5' />
								<span className='text-[44px] leading-[1.25em] font-normal tracking-[-0.06em] text-[rgba(0,0,0,0.5)] md:text-[80px] md:leading-[1.15em] xl:text-[108px]'>
									{'platforms'.split('').map((letter, index) => {
										return (
											<HeroSectionLetterAnimation
												initialDelay={1.2}
												delayRate={index * 0.07}
												key={index}
											>
												{letter}
											</HeroSectionLetterAnimation>
										)
									})}
								</span>
							</strong>
						</h1>
					</div>
					<div>
						<h1>
							<strong>
								<span className='text-[44px] leading-[1.25em] font-normal tracking-[-0.06em] text-[rgba(0,0,0,0.5)] md:text-[80px] md:leading-[1.15em] xl:text-[108px]'>
									{'for \u00A0 B2B'.split('').map((letter, index) => {
										return (
											<HeroSectionLetterAnimation
												initialDelay={1.2}
												delayRate={index * 0.07}
												key={index}
											>
												{letter}
											</HeroSectionLetterAnimation>
										)
									})}
								</span>
								<span className='h-full px-1.5 md:px-2 xl:px-2.5' />
							</strong>
						</h1>
					</div>
					<div>
						<HorizontalMotionListAnimation />
					</div>
					<div>
						<h1>
							<strong>
								<span className='h-full px-1.5 md:px-2 xl:px-2.5' />
								<span className='text-[44px] leading-[1.25em] !font-medium tracking-[-0.06em] md:text-[80px] md:leading-[1.15em] xl:text-[108px]'>
									{'Teams'.split('').map((letter, index) => {
										return (
											<HeroSectionLetterAnimation
												initialDelay={1.4}
												delayRate={index * 0.07}
												key={index}
											>
												{letter}
											</HeroSectionLetterAnimation>
										)
									})}
								</span>
							</strong>
						</h1>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 1,
						ease: 'linear',
						delay: 1.5,
					}}
				>
					<p className='max-w-[500px] text-center leading-[1.7] tracking-[0em] text-balance text-black/50'>
						We engineer AI-ready products for B2B teams and startups: SaaS, marketplaces, internal systems, integrations and automation
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: 'tween',
					duration: 1,
					ease: 'linear',
					delay: 1.5,
				}}
				className={'flex flex-col items-center justify-center gap-5 md:flex-row md:items-start'}
			>
				<div
					className='flex flex-wrap justify-center gap-4'
				>
					<NeonFrame>
					<HeroSectionButton
						title='Book a free intro call'
						icon={<ArrowRightIcon />}
						href='https://calendly.com/contact-sargas/60-minute-meeting'
						withOutline
					/>
					</NeonFrame>
				</div>

				<div className='flex flex-col items-center justify-center gap-5'>
					<div className='mt-2 flex items-center justify-center gap-6'>

						<Link
							to='https://clutch.co/profile/sargas-agency-o'
							target='_blank'
							rel="noreferrer"

							className={`flex h-full w-full min-w-[90px] items-center gap-2 rounded-full bg-white px-6 py-[15px] whitespace-nowrap`}
							style={{
								boxShadow:
									'rgba(255, 255, 255, 0.25) 0px 0px 0px 8px, rgba(0, 0, 0, 0.1) 12px 16px 16px 0px',
							}}
						>
							<ClutchIcon />
						</Link>

						<Link
							to='https://www.upwork.com/agencies/1772989322229334016'
							target='_blank'
							rel="noreferrer"

							className={`flex h-full w-full items-center gap-2 rounded-full bg-white p-1 px-7 py-3 whitespace-nowrap`}
							style={{
								boxShadow:
									'rgba(255, 255, 255, 0.25) 0px 0px 0px 8px, rgba(0, 0, 0, 0.1) 12px 16px 16px 0px',
							}}
						>
							<p
								className='flex items-center justify-center rounded-full text-[16px] font-medium'
								style={{ background: "#ff5e00'" }}
							>
								100% JSS
							</p>
							<img src={UpIcon} alt='' className={'max-w-[95px]'} />
						</Link>

					</div>
					<p className='text-xs text-black/50'>Trusted by Clients</p>
				</div>
			</motion.div>
		</div>
	)
}
