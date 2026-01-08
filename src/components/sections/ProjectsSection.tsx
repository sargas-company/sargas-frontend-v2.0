import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectSocialButton } from '../ui/ProjectSocialButton.tsx'
import { XIcon } from '../ui/icons/XIcon.tsx'
import { InstagramIcon } from '../ui/icons/InstagramIcon.tsx'
import { LinkedInIcon } from '../ui/icons/LinkedInIcon.tsx'
import { SmileIcon } from '../ui/icons/SmileIcon.tsx'

type ExperienceItem = {
	role: string
	company: string
	period: string
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		role: 'Freelance Practice',
		company: 'Hanzo Co.',
		period: '2011  →  Now',
	},
	{
		role: 'Design Lead',
		company: 'Google',
		period: '2024  →  Now',
	},
	{
		role: 'Senior Designer',
		company: 'PayPal',
		period: '2019  →  2024',
	},
	{
		role: 'Product Designer',
		company: 'Meta',
		period: '2016  →  2019',
	},
]

const experienceContainerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.25,
		},
	},
}

const experienceRowVariants: Variants = {
	hidden: { opacity: 0, y: -12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.35,
			ease: 'easeOut',
		},
	},
}

const ExperienceRow: React.FC<ExperienceItem> = ({ role, company, period }) => (
	<motion.div
		variants={experienceRowVariants}
		className='flex flex-col gap-1 py-4 text-[12px] leading-[1.6] text-black/60 sm:flex-row sm:items-center sm:justify-between'
	>
		<span className='flex-1 text-[12px] font-medium text-black'>{role}</span>
		<span className='flex-1 text-[12px] text-black/60'>{company}</span>
		<span className='flex-1 text-[12px] text-black/60 sm:text-right'>{period}</span>
	</motion.div>
)
const ProjectsSection: React.FC = () => {
	return (
		<section className='relative w-full' id='about'>
			<div className='md:pb-50 lg:pb-50 mx-auto flex w-full max-w-[1600px] flex-col items-center gap-8 pb-20 md:gap-10 lg:gap-14'>
				<div className='flex flex-col items-center gap-2.5 text-center'>
					<SectionTitle title='Our Projects' />
					<h2 className='flex flex-wrap items-baseline justify-center text-[28px] leading-[1.4] tracking-[-0.04em] md:text-[48px]'>
						<span>Pushing boundaries</span>
						<span className='text-black/50'>&nbsp;since 2011</span>
					</h2>
				</div>

				<div className='mt-6 flex w-full flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-16'>
					<div className={'flex-col'}>
						<motion.figure
							initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
							whileInView={{ x: 0, y: 0, rotate: -3, opacity: 1 }}
							transition={{ duration: 1.3, ease: 'easeOut' }}
							viewport={{ once: true, amount: 0.3 }}
						>
							<div className={'flex-col'}>
								<div className='relative flex h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.25),12px_16px_16px_rgba(0,0,0,0.1)]'>
									<div className='flex h-full flex-col items-start justify-between gap-6'>
										<img
											src='https://framerusercontent.com/images/zRVCa2eOgJIf1mJK5PYcBLrYI.png?width=1536&height=1024'
											alt=''
											className='rounded-inherit block h-full w-full object-cover object-center'
										/>
									</div>
								</div>
							</div>
						</motion.figure>

						<motion.div
							className='mt-8 w-full items-center gap-4'
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{
								type: 'tween',
								duration: 0.6,
								ease: 'easeOut',
								delay: 0.2,
							}}
						>
							<div className='jpt-6 pointer-events-none inset-x-0 bottom-0 flex w-full items-end justify-between pb-5 text-[12px] text-white'>
								<div className='pointer-events-auto flex items-center gap-2'>
									<ProjectSocialButton
										href='https://www.instagram.com/stfnco/'
										icon={<InstagramIcon className={'text-[rgb(119,119,119)]'} />}
									/>
									<ProjectSocialButton
										href='https://www.linkedin.com/in/nickstepuk/'
										icon={<LinkedInIcon className={'text-[rgb(119,119,119)]'} />}
									/>
									<ProjectSocialButton
										href='https://x.com/stfnco'
										icon={<XIcon className={'text-[rgb(119,119,119)]'} />}
									/>
								</div>

								<div className='pointer-events-auto flex flex-col gap-0.5 text-black'>
									<span className='text-right text-[14px] font-medium leading-tight'>
										Joris van Dijk
									</span>
									<span className='text-[12px] leading-tight text-black/50'>
										Hanzo Studio, Founder
									</span>
								</div>
							</div>
						</motion.div>
					</div>

					<div className='flex h-full flex-1 flex-col'>
						<div className='flex items-start'>
							<p className='max-w-[550px] text-[20px] leading-[1.8] tracking-[-0.01em] text-black'>
								Joris van Dijk is a Dutch designer known for his minimalist, expressive
								digital work. He helps startups and studios create clean interfaces and
								strong branding. Based in Utrecht, he blends function with emotion — and
								often spends his free time cycling or exploring generative art.
							</p>
							<div className={'ml-auto'}>
								<SmileIcon className='text-[rgb(255,55,0)]' />
							</div>
						</div>

						<div className='mt-10 pt-4 md:mt-auto md:pt-6'>
							<motion.div
								className='divide-y divide-black/10'
								variants={experienceContainerVariants}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.3 }}
							>
								{EXPERIENCE_ITEMS.map((item) => (
									<ExperienceRow
										key={item.role}
										role={item.role}
										company={item.company}
										period={item.period}
									/>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
