export const ArrowRightIcon = () => {
	return (
		<span className='relative inline-flex items-center'>
			<svg
				viewBox='0 0 256 256'
				className='h-5 w-5 transform opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-x-[300px] md:group-hover:translate-x-[50px]'
				aria-hidden='true'
			>
				<path
					d='M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z'
					fill='currentColor'
				/>
			</svg>

			<svg
				viewBox='0 0 256 256'
				className='h-5 w-5'
				aria-hidden='true'
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					transition: 'transform 300ms ease-out',
				}}
			>
				<path
					d='M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z'
					fill='currentColor'
				/>
			</svg>
		</span>
	)
}
