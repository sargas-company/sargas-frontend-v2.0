import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ProjectSocialButtonProps = {
	icon: ReactNode
	href: string
	ariaLabel?: string
}

export const ProjectSocialButton = ({ icon, href, ariaLabel }: ProjectSocialButtonProps) => {
	return (
		<div className='inline-flex grow-0 items-center justify-center overflow-hidden rounded-[33px] p-0'>
			<motion.a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={ariaLabel}
				className='inline-flex items-center justify-center rounded-[154px]'
				initial='rest'
				animate='rest'
				whileHover='hover'
			>
				<div className='relative h-9 w-9'>
					<motion.span
						className='absolute inset-0 flex h-full w-full items-center justify-center'
						variants={{
							rest: { x: 0, opacity: 1 },
							hover: { x: 12, opacity: 0 },
						}}
						transition={{ duration: 0.3, ease: 'easeOut' }}
					>
						{icon}
					</motion.span>

					<span className='flex h-full w-full items-center justify-center'>{icon}</span>
				</div>
			</motion.a>
		</div>
	)
}
