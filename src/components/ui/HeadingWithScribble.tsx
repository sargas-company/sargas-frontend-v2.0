import React from 'react'
import { AnimatedScribbleUnderline } from '../animation/AnimatedScribbleUnderline.tsx'

type HeadingWithScribbleProps = {
	prefix: string
	highlight: string
	className?: string
}

export const HeadingWithScribble: React.FC<HeadingWithScribbleProps> = ({
	prefix,
	highlight,
	className,
}) => {
	return (
		<h2
			className={[
				'flex flex-wrap items-end gap-1',
				'text-[26px] font-semibold leading-[1.1] md:text-[36px]',
				'text-black',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<span>{prefix}</span>

			<span className='relative inline-block text-black/60'>
				{highlight}
				<span className='pointer-events-none absolute bottom-[-0.25em] left-0 right-0'>
					<AnimatedScribbleUnderline className='h-[13px] w-full text-black/40' />
				</span>
			</span>
		</h2>
	)
}
