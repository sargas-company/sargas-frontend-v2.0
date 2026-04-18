type Props = {
	open: boolean
	onToggle: () => void
}

export const HeaderMenuButton = ({ open, onToggle }: Props) => {
	return (
		<button
			type='button'
			onClick={onToggle}
			className='inline-flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white'
		>
			<span className='relative block h-2 w-4'>
				<span
					className={[
						'absolute top-0 left-0 h-px w-full rounded-full bg-black',
						'transition-transform duration-300 ease-in-out',
						open ? 'translate-y-[3.5px] rotate-45' : '',
					].join(' ')}
				/>
				<span
					className={[
						'absolute bottom-0 left-0 h-px w-full rounded-full bg-black',
						'transition-transform duration-300 ease-in-out',
						open ? '-translate-y-[3.5px] -rotate-45' : '',
					].join(' ')}
				/>
			</span>
		</button>
	)
}
