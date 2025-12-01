import type { ReactNode } from 'react'

type WorkLayoutProps = {
	children: ReactNode
}

export const WorkLayout = ({ children }: WorkLayoutProps) => {
	return (
		<>
			<div className='flex flex-col gap-12 pt-[180px] pb-10 md:gap-16 md:pt-[220px] md:pb-14 xl:gap-20 xl:pb-20'>
				{children}
			</div>
		</>
	)
}
