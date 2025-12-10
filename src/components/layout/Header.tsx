import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderMenuButton } from './HeaderMenuButton'
import { HeaderDropdown } from './HeaderDropdown'
import { Link, useLocation } from 'react-router-dom'
import {HorizontalMotionListAnimationV2Header} from "../animation/HorizontalMotionListAnimationV2Header.tsx";

export const Header = () => {
	const [open, setOpen] = useState(false)
	const location = useLocation()

	const isHome = location.pathname === '/'

	return (
		<motion.header
			className='absolute top-0 left-0 z-20 h-20 w-full px-6 md:px-12 xl:px-30'
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: 'tween',
				duration: 1,
				ease: 'easeInOut',
				delay: 1.5,
			}}
		>
			<div className='mx-auto flex h-full max-w-[1440px] items-center justify-between'>
				{isHome ? (
					<Link to='/' className='rounded-[22px] mt-20 px-6 py-2.5 text-black flex align-middle'>
						<HorizontalMotionListAnimationV2Header />
					</Link>
				) : (
					<Link to='/' className='rounded-[22px] bg-white px-6 py-2.5 text-black'>
						<strong>← Back</strong>
					</Link>
				)}

				<div className='relative'>
					<HeaderMenuButton open={open} onToggle={() => setOpen((v) => !v)} />
					<HeaderDropdown open={open} />
				</div>
			</div>
		</motion.header>
	)
}
