import { VerticalMotionListAnimation } from '../animation/VerticalMotionListAnimation'
import { HorizontalMotionListAnimation } from '../animation/HorizontalMotionListAnimation'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { motion } from 'framer-motion'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'
import { ArrowRightIcon } from '../ui/icons/ArrowRightIcon'

export const HeroSection = () => {
	return (
		<div className='flex flex-col gap-6 pt-[180px] pb-20 md:gap-7 md:pb-14 xl:gap-12 xl:pb-[118px]'>
			<div className='flex flex-col items-center gap-9'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 1,
						ease: 'linear',
						delay: 1.5,
					}}
					className='flex items-center gap-2 rounded-full bg-white px-4 py-2'
				>
					<div className='h-1.5 w-1.5 rounded-full bg-[#0cb300]' />
					<div>Booking Open — 2 Spots Left</div>
				</motion.div>
				<div className='flex h-min max-w-none flex-none flex-wrap items-center justify-center gap-1.5 md:max-w-[718px] md:gap-2 xl:max-w-[980px]'>
					<div>
						<h1>
							<strong>
								<span className='text-[44px] leading-[1.25em] !font-medium tracking-[-0.06em] md:text-[80px] md:leading-[1.15em] xl:text-[108px]'>
									{'Unlimited'.split('').map((letter, index) => {
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
									{'Design'.split('').map((letter, index) => {
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
									{'for'.split('').map((letter, index) => {
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
									{'Solid Startups'.split('').map((letter, index) => {
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
					<p className='max-w-[434px] text-center leading-[1.7] tracking-[0em] text-balance text-black/50'>
						We help startups and brands create beautiful, functional products — fast and
						hassle-free.
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
				className='flex flex-wrap justify-center gap-2 gap-4'
			>
				<HeroSectionButton title='Choose your plan' icon={<ArrowRightIcon />} withOutline />
				<div className='flex flex-col justify-center gap-0.5'>
					<div className='flex'>
						<img
							src='https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024'
							className='h-[31px] w-[31px] rounded-full border border-white object-cover'
						/>
						<img
							src='https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024'
							className='relative right-1.5 h-[31px] w-[31px] rounded-full border border-white object-cover'
						/>
						<img
							src='https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024'
							className='relative right-3 h-[31px] w-[31px] rounded-full border border-white object-cover'
						/>
						<img
							src='https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024'
							className='relative right-4.5 h-[31px] w-[31px] rounded-full border border-white object-cover'
						/>
						<img
							src='https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024'
							className='relative right-6 h-[31px] w-[31px] rounded-full border border-white object-cover'
						/>
					</div>
					<p className='text-xs text-black/50'>Trusted by Leaders</p>
				</div>
			</motion.div>
		</div>
	)
}
