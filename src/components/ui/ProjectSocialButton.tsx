import type { ReactNode } from 'react'

type ProjectSocialButtonProps = {
	icon: ReactNode
	href: string
	ariaLabel?: string
}

export const ProjectSocialButton = ({ icon, href, ariaLabel }: ProjectSocialButtonProps) => {
	return (
		<div className='inline-flex grow-0 items-center justify-center overflow-hidden rounded-[33px] p-0'>
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={ariaLabel}
				className='group inline-flex items-center justify-center rounded-[154px]'
			>
				<span className='flex h-9 w-9 items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1.5'>
					{icon}
				</span>
			</a>
		</div>
	)
}
