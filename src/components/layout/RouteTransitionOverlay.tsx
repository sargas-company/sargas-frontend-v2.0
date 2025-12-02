import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export const RouteTransitionOverlay = () => {
	const location = useLocation()
	const navigationType = useNavigationType()
	const prevPathRef = useRef(location.pathname)
	const [active, setActive] = useState(false)
	const [isFirstRender, setIsFirstRender] = useState(true)

	useEffect(() => {
		if (isFirstRender) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsFirstRender(false)
			prevPathRef.current = location.pathname
			return
		}

		const from = prevPathRef.current
		const to = location.pathname
		const isWorkTransition = (from.startsWith('/work') || to.startsWith('/work')) && from !== to
		const isClientNav = navigationType === 'PUSH' || navigationType === 'POP'

		if (isWorkTransition && isClientNav) {
			setActive(true)
			const timer = setTimeout(() => setActive(false), 1000)
			prevPathRef.current = to
			return () => clearTimeout(timer)
		}

		prevPathRef.current = to
	}, [location.pathname, navigationType, isFirstRender])

	if (!active) return null

	return (
		<AnimatePresence>
			{active && (
				<div className='pointer-events-none fixed inset-0 z-[9999] overflow-hidden'>
					<motion.div
						key={`${location.pathname}-wipe`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0.6 }}
						transition={{ duration: 1, ease: 'easeInOut' }}
						className='absolute inset-0 bg-black/0'
					/>
					<motion.div
						key={`${location.pathname}-diagonal`}
						initial={{ x: '-60vw', y: '60vh' }}
						animate={{ x: '60vw', y: '-60vh' }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className='absolute h-[32vh] w-[200vw] -left-[40vw] -bottom-[30vh] rotate-[-320deg]'
						style={{ filter: 'blur(10px)' }}
					>
						<div
							className='h-full w-full'
							style={{
								background:
									'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.25) 65%, rgba(255,255,255,0) 90%)',
								mixBlendMode: 'screen',
							}}
						/>
					</motion.div>
					<div className='absolute inset-0 bg-gradient-to-br from-white/8 via-white/12 to-white/8 backdrop-blur-[1px]' />
				</div>
			)}
		</AnimatePresence>
	)
}
