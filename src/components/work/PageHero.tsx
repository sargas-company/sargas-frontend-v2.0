import { motion } from 'framer-motion'
import { HeroSectionLetterAnimation } from '../animation/HeroSectionLetterAnimation'
import { HeroSectionButton } from '../ui/HeroSectionButton'
import { LinkIcon } from '../ui/icons/LinkIcon'

type PageSection = {
	title: string
	items: string[]
}

type Technology = {
	src: string,
	alt: string,
	width: string,
}

type PageHeroProps = {
	title: string
	content: string[]
	chips: string[]
	technologies: Technology[]
	href?: string
	sections: PageSection[]
}

export const PageHero = ({
	title,
	sections = [],
	content,
	technologies = [],
	chips,
	href = undefined,
}: PageHeroProps) => {
	return (
		<div className='flex'>
			<div className='hidden w-[150px] xl:block' />
			<div className='flex grow flex-col gap-9'>
				<motion.div
					className='flex transform-gpu flex-col items-start justify-between gap-4 [will-change:transform,opacity] md:flex-row'
					style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
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

					<div className='flex gap-1 flex-wrap'>
						{chips.map((chip, index) => (
							<span key={index} className='text-md rounded-full bg-white px-4 py-2'>
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

				<div className='justify-between grid grid-cols-2 sm:flex [&>*:last-child]:mb-5'>
					{sections.map((item, index) => {
						return (
							<div key={index} className='flex flex-col gap-2 mb-10 sm:mb-0'>
								<h4 className='font-serif text-2xl italic leading-[1.2em] tracking-normal text-black/50'>
									<HeroSectionLetterAnimation
										initialDelay={1}
										delayRate={index * 0.15}
										key={index}
									>
										{item.title}
									</HeroSectionLetterAnimation>
								</h4>
								<div className='flex flex-col'>
									{item.items.map((str, indexS) => {
										return (
											<HeroSectionLetterAnimation
												initialDelay={1}
												delayRate={index * 0.15}
												key={index}
											>
												<p
													key={indexS}
													className='text-lg leading-[1.5em] tracking-[-0.02em] md:text-xl'
												>
													{str}
												</p>
											</HeroSectionLetterAnimation>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>

				<div className='flex flex-col items-start'>
					<h4 className='font-serif text-2xl italic leading-[1.2em] tracking-normal text-black/50'>
						{['Stack'].map((str, index) => {
							return (
								<HeroSectionLetterAnimation
									initialDelay={1}
									delayRate={index * 0.55}
									key={index}
								>
									{str}
								</HeroSectionLetterAnimation>
							)
						})}
					</h4>
					<div className='flex flex-row items-center justify-start flex-wrap'>
						{technologies.map((item, index) => (
							<HeroSectionLetterAnimation
								initialDelay={0.5}
								delayRate={index * 0.07}
								key={index}
							>
								<img
									width={item.width}
									height='auto'
									className='mr-4'
									src={item.src}
									alt={item.alt}
								/>
							</HeroSectionLetterAnimation>
						))}
					</div>
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
					<HeroSectionButton
						title={`${href ? 'Live Link' : 'Link under NDA'}`}
						href={href}
						icon={<LinkIcon />}
					/>
					<div className='inline-flex grow-0 items-center justify-center overflow-hidden rounded-[33px] p-2'>
						<a
							href='#cta'
							rel='noopener noreferrer'
							className='group box-border inline-flex w-full items-center justify-center gap-3 rounded-[154px] border border-black/40 bg-transparent px-6 py-3 text-[16px] font-medium text-black transition-all duration-300 ease-out hover:border-black'
						>
							<span className='whitespace-nowrap'>Contact us</span>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
