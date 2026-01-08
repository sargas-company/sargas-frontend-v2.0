import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export const TGIcon = ({ color = '#000', className }: IconProps) => {
	return (
		<svg
			width='21'
			height='21'
			viewBox='0 0 21 21'
			fill={color}
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path d='M8.28905 12.9044L7.95822 17.5578C8.43156 17.5578 8.63655 17.3544 8.88239 17.1103L11.1016 14.9894L15.6999 18.3569C16.5432 18.8269 17.1374 18.5794 17.3649 17.5811L20.3832 3.43776L20.3841 3.43693C20.6516 2.19026 19.9332 1.70276 19.1116 2.00859L1.36989 8.80109C0.159054 9.27109 0.177388 9.94609 1.16405 10.2519L5.69989 11.6628L16.2357 5.07026C16.7316 4.74193 17.1824 4.92359 16.8116 5.25193L8.28905 12.9044Z' />
		</svg>
	)
}
