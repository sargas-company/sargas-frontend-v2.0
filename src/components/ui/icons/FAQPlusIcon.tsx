import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export const FAQPlusIcon = ({ size = 18, className, ...props }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 256 256'
		width={size}
		height={size}
		fill='currentColor'
		aria-hidden='true'
		focusable='false'
		className={className}
		{...props}
	>
		<path d='M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z' />
	</svg>
)
