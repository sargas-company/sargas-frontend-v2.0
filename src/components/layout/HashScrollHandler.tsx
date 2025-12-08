import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const HashScrollHandler = () => {
	const location = useLocation()

	useEffect(() => {
		if (!location.hash) return
		const targetId = location.hash.replace('#', '')
		const scrollToTarget = () => {
			const el = document.getElementById(targetId)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		}

		const raf = requestAnimationFrame(scrollToTarget)
		const timeout = window.setTimeout(scrollToTarget, 120)

		return () => {
			cancelAnimationFrame(raf)
			clearTimeout(timeout)
		}
	}, [location.hash])

	return null
}
