import type { ReactNode } from 'react'


type HeroSectionButtonProps = {
	title: string
	icon: ReactNode
	setOpen: any
	withOutline?: boolean
	target?: string
	fullWidth?: boolean
}

export const QuoteSectionButton = ({
	title,
	setOpen,
	target = '_blank',
	icon,
	withOutline,
	fullWidth = false,
}: HeroSectionButtonProps) => {
	const isFullWidth = fullWidth && 'w-full'
	return (
		<div
			onClick={setOpen}
			className={`${isFullWidth} inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-[33px] ${withOutline ? 'grow bg-white/50 p-2 md:grow-0' : 'grow-0 p-0'}`}
		>
			<span
				rel='noopener noreferrer'
				className={`group inline-flex w-full ${target === '_self' && 'flex-row-reverse'} items-center justify-center gap-3 rounded-[154px] bg-black px-6 py-3 text-[16px] font-medium text-white`}
				style={{
					transition: 'box-shadow 500ms ease-out, transform 150ms ease-out',
				}}
			>
				<span className='whitespace-nowrap'>{title}</span>
				{icon}
			</span>
		</div>
	)
}
