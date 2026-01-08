import {
	useRef,
	useState,
	type MouseEvent,
	type PropsWithChildren,
	type ComponentPropsWithoutRef,
} from 'react'

type BenefitCardProps = PropsWithChildren<
	{
		href?: string
	} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children'>
>

export const BenefitCardCustom = ({ href = '', children, ...aProps }: BenefitCardProps) => {
	const [isHovering, setIsHovering] = useState(false)
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
	const cardRef = useRef<HTMLAnchorElement | null>(null)

	const isLinkEnabled = href.trim().length > 0

	const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
		if (!isLinkEnabled || !cardRef.current) return

		const rect = cardRef.current.getBoundingClientRect()
		setCursorPos({
			x: e.clientX - rect.left + 24,
			y: e.clientY - rect.top - 24,
		})
	}

	return (
		<a
			ref={cardRef}
			href={isLinkEnabled ? href : undefined}
			target='_blank'
			aria-disabled={!isLinkEnabled}
			className={`group relative flex h-full flex-1 flex-col gap-4 ${
				isLinkEnabled ? 'cursor-pointer' : 'cursor-default'
			}`}
			onClick={(e) => {
				if (!isLinkEnabled) e.preventDefault()
				aProps.onClick?.(e)
			}}
			onMouseEnter={() => {
				if (isLinkEnabled) setIsHovering(true)
			}}
			onMouseLeave={() => setIsHovering(false)}
			onMouseMove={handleMouseMove}
			{...aProps}
		>
			{children}

			<div
				className='pointer-events-none absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-opacity duration-150'
				style={{
					left: cursorPos.x,
					top: cursorPos.y,
					opacity: isLinkEnabled && isHovering ? 1 : 0,
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
