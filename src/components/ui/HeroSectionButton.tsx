import { useState, type ReactNode } from 'react'

type HeroSectionButtonProps = {
	title: string
	icon: ReactNode
	withOutline?: boolean
	fullWidth?: boolean
}

export const HeroSectionButton = ({ title, href = '#', icon, withOutline, fullWidth=false }: HeroSectionButtonProps) => {
	const [hovered, setHovered] = useState(false)

	const baseShadow = `
    inset 0 -10px 45px rgba(255,255,255,0),
    inset 10px 0 10px -45px rgba(255,255,255,0),
    inset -10px 0 10px -45px rgba(255,255,255,0)
  `

	const hoverShadow = `
    inset 0 -10px 45px rgba(255,255,255,0.7),
    inset 10px 0 10px -45px rgba(255,255,255,0.7),
    inset -10px 0 10px -45px rgba(255,255,255,0.7)
  `

	const isFullWidth = fullWidth && 'w-full'
	return (
		<div
			className={`${isFullWidth} inline-flex items-center justify-center overflow-hidden rounded-[33px] ${withOutline ? 'grow bg-white/50 p-2 md:grow-0' : 'grow-0 p-0'}`}
		>
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className='group inline-flex w-full items-center justify-center gap-3 rounded-[154px] bg-black px-6 py-3 text-[16px] font-medium text-white'
				style={{
					boxShadow: hovered ? hoverShadow : baseShadow,
					transition: 'box-shadow 500ms ease-out, transform 150ms ease-out',
				}}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<span className='whitespace-nowrap'>{title}</span>

				{icon}
			</a>
		</div>
	)
}
