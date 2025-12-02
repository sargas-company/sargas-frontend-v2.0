type SectionTitleProps = {
	title: string
	textColor?: string
	lineColor?: string
}

export const SectionTitle = ({
										  title,
										  textColor = "text-black/50",
										  lineColor = "rgba(0,0,0,0.5)",
									  }: SectionTitleProps) => {
	return (
		<div className="flex items-center gap-6 px-6">
			<div
				className="h-px w-[69px] opacity-50"
				style={{
					background: `linear-gradient(90deg, rgba(84,84,84,0) 0%, ${lineColor} 100%)`,
				}}
			/>

			<h4
				className={`font-serif text-2xl leading-[1.2em] tracking-normal whitespace-nowrap italic ${textColor}`}
			>
				{title}
			</h4>

			<div
				className="h-px w-[69px] opacity-50"
				style={{
					background: `linear-gradient(270deg, rgba(84,84,84,0) 0%, ${lineColor} 100%)`,
				}}
			/>
		</div>
	)
}
