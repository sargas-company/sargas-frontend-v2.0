import { useRef, useState, type MouseEvent } from 'react'

type BenefitCardProps = {
	title: string
	chips: string[]
	link: string
	img: string
}

export const BenefitCard = ({ title, chips, link, img }: BenefitCardProps) => {
	const cardRef = useRef<HTMLAnchorElement | null>(null)
	const [isHovering, setIsHovering] = useState(false)
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

	const handleMouseEnter = () => {
		setIsHovering(true)
	}

	const handleMouseLeave = () => {
		setIsHovering(false)
	}

	const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
		if (!cardRef.current) return

		const rect = cardRef.current.getBoundingClientRect()

		const cursorX = e.clientX - rect.left
		const cursorY = e.clientY - rect.top

		const offsetX = 24
		const offsetY = -24

		setCursorPos({
			x: cursorX + offsetX,
			y: cursorY + offsetY,
		})
	}

	return (
		<a
			ref={cardRef}
			href={link}
			className='group relative flex h-full flex-1 cursor-pointer flex-col gap-4'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
		>
			<div className='overflow-hidden rounded-[24px]'>
				<img
					src={img}
					alt={title}
					className='duration-750 h-full w-full object-cover transition-transform ease-in-out group-hover:scale-105'
				/>
			</div>

			<div className='flex flex-nowrap items-center justify-between'>
				<h4 className='text-lg text-black/50 md:text-xl'>{title}</h4>
				<div className='flex gap-1'>
					{chips.map((chip, index) => (
						<span key={index} className='rounded-full bg-white px-3 py-1 text-xs opacity-50'>
							{chip}
						</span>
					))}
				</div>
			</div>

			<div
				className='pointer-events-none absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-opacity duration-150'
				style={{
					left: cursorPos.x,
					top: cursorPos.y,
					opacity: isHovering ? 1 : 0,
				}}
			>
				<svg
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<line x1='5' y1='12' x2='19' y2='12' />
					<polyline points='12 5 19 12 12 19' />
				</svg>
			</div>
		</a>
	)
}
