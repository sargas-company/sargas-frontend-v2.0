import type { ReactNode } from 'react'
import { Header } from './components/layout/Header'

type RootLayoutProps = {
	children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className='mx-auto flex max-w-[1440px] flex-col px-6 md:px-12 xl:px-30'>
			<Header />
			{children}
		</div>
	)
}
