import type { ReactNode } from 'react'

type WorkLayoutProps = {
	children: ReactNode
}

export const WorkLayout = ({ children }: WorkLayoutProps) => {
	return (
		<>
			<div className='flex flex-col gap-12 pb-10 pt-[180px] md:gap-16 md:pb-14 md:pt-[220px] xl:gap-20 xl:pb-20'>
				{children}
			</div>
		</>
	)
}
