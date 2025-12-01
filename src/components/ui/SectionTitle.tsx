type SectionTitleProps = {
	title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<div className='flex items-center gap-6 px-6'>
			<div
				className='h-px w-[69px] opacity-50'
				style={{
					background: 'linear-gradient(90deg, rgba(84,84,84,0) 0%, rgba(0,0,0,0.5) 100%)',
				}}
			/>
			<h4 className='font-serif text-2xl leading-[1.2em] tracking-normal whitespace-nowrap text-black/50 italic'>
				{title}
			</h4>
			<div
				className='h-px w-[69px] opacity-50'
				style={{
					background: 'linear-gradient(270deg, rgba(84,84,84,0) 0%, rgba(0,0,0,0.5) 100%)',
				}}
			/>
		</div>
	)
}
