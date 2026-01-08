import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
	size?: number | string
}

export const TrendBoardIcon = ({ size = 24, className, ...props }: IconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			className={className}
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M7 10.5C7 9.11929 8.11929 8 9.5 8C10.8807 8 12 9.11929 12 10.5C12 11.8807 10.8807 13 9.5 13C8.11929 13 7 11.8807 7 10.5Z'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M13 15.5C13 14.1193 14.1193 13 15.5 13C16.8807 13 18 14.1193 18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5Z'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M17 7.5C17 6.11929 18.1193 5 19.5 5C20.8807 5 22 6.11929 22 7.5C22 8.88071 20.8807 10 19.5 10C18.1193 10 17 8.88071 17 7.5Z'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19.4362 8.10028C19.9332 8.34108 20.1409 8.9392 19.9002 9.43623L17.3342 14.7325C17.0934 15.2295 16.4953 15.4372 15.9983 15.1964C15.5013 14.9556 15.2935 14.3575 15.5343 13.8605L18.1003 8.56422C18.3411 8.0672 18.9392 7.85948 19.4362 8.10028ZM9.78393 10.9669C10.1163 10.5258 10.7433 10.4376 11.1844 10.7699L14.8057 13.4977C15.2468 13.83 15.335 14.457 15.0027 14.8981C14.6704 15.3393 14.0435 15.4275 13.6023 15.0952L9.98099 12.3674C9.53986 12.0351 9.45163 11.4081 9.78393 10.9669ZM9.09812 11.0183C9.57371 11.299 9.73163 11.9122 9.45085 12.3878L4.36128 21.0086C4.0805 21.4842 3.46735 21.6421 2.99176 21.3613C2.51618 21.0805 2.35825 20.4674 2.63903 19.9918L7.7286 11.371C8.00938 10.8954 8.62254 10.7375 9.09812 11.0183Z'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3 2C3.55228 2 4 2.44772 4 3V20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z'
				fill='currentColor'
			/>
		</svg>
	)
}
