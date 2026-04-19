import { useEffect, type ReactNode } from 'react'
import { Header } from './components/layout/Header'
import { FooterSection } from './components/sections/FooterSection'
import { useLocation } from 'react-router-dom'

type RootLayoutProps = {
	children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
	const location = useLocation()

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.slice(1)
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [location])

	return (
		<div className='xl:px-30 mx-auto flex max-w-[1440px] flex-col px-6 md:px-12 xl:max-w-[1680px]'>
			<Header />
			{children}
			<FooterSection />
		</div>
	)
}
