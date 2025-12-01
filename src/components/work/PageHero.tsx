import { motion } from 'framer-motion'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { LinkIcon } from '../ui/icons/LinkIcon'

type PageHeroProps = {
	title: string
	content: string[]
	chips: string[]
}

export const PageHero = ({ title, content, chips }: PageHeroProps) => {
	return (
		<div className='flex'>
			<div className='hidden w-[150px] xl:block' />
			<div className='flex grow flex-col gap-9'>
				<motion.div
					className='flex flex-col items-start justify-between gap-4 md:flex-row'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: 'tween',
						duration: 1,
						ease: 'easeInOut',
						delay: 0.1,
					}}
				>
					<h2 className='text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[32px] xl:text-[48px]'>
						{title}
					</h2>
					<div className='flex gap-1'>
						{chips.map((chip, index) => (
							<span key={index} className='rounded-full bg-white px-3 py-1 text-xs'>
								{chip}
							</span>
						))}
					</div>
				</motion.div>
				<div>
					<p className='max-w-[650px] text-lg leading-[1.6] tracking-[-0.02em] md:text-xl xl:text-2xl'>
						{content.map((word, index) => {
							return (
								<HeroSectionLetterAnimation
									initialDelay={0.6}
									delayRate={index * 0.07}
									key={index}
								>
									{word}
									&nbsp;
								</HeroSectionLetterAnimation>
							)
						})}
					</p>
				</div>
				<motion.div
					className='flex gap-2'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 1,
						ease: 'easeInOut',
						delay: 0.4,
					}}
				>
					<HeroSectionButton title='Live Link' icon={<LinkIcon />} />
					<div className='inline-flex grow-0 items-center justify-center overflow-hidden rounded-[33px] p-2'>
						<a
							href='#'
							rel='noopener noreferrer'
							className='group box-border inline-flex w-full items-center justify-center gap-3 rounded-[154px] border border-black/40 bg-transparent px-6 py-3 text-[16px] font-medium text-black transition-all duration-300 ease-out hover:border-black'
						>
							<span className='whitespace-nowrap'>Contact me</span>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
