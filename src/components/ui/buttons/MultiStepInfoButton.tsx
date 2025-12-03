type MultiStepInfoButtonProps = {
	title: string
	img: string | null
}

export const MultiStepInfoButton = ({ title, img }: MultiStepInfoButtonProps) => {
	return (
		<button
			className={`flex min-h-10 cursor-pointer items-center justify-start gap-3 rounded-full bg-[linear-gradient(#292929_24%,#1b1b1b)] shadow-[inset_0_0.125rem_0.125rem_#ffffff4d,0_0.25rem_0.375rem_#00000024] transition-transform duration-150 ease-out hover:scale-[1.03] ${img ? 'p-1 pr-6' : 'px-6 py-[13.5px]'}`}
		>
			{img && <img src={img} className='full h-[33.5px] w-[33.5px] rounded-full object-cover' />}

			<span className='text-xs font-medium text-white'>{title}</span>
		</button>
	)
}
