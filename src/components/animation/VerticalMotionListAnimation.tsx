import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import asset1 from '../../assets/asset_01.avif'
import asset2 from '../../assets/asset_02.avif'

const IMAGES = [asset1, asset2, asset2]

function getItemHeightByWidth(width: number) {
	if (width >= 1440) return 113
	if (width >= 810) return 77
	return 53
}

export const VerticalMotionListAnimation = () => {
	const [index, setIndex] = useState(0)
	const [itemHeight, setItemHeight] = useState<number | null>(null)
	const [instant, setInstant] = useState(false)
	const [hasEntered, setHasEntered] = useState(false)

	const items = useMemo(() => [...IMAGES, ...IMAGES], [])

	useEffect(() => {
		const updateHeight = () => {
			const w = window.innerWidth
			setItemHeight(getItemHeightByWidth(w))
		}

		updateHeight()
		window.addEventListener('resize', updateHeight)
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	useEffect(() => {
		if (!itemHeight || !hasEntered) return

		const id = setInterval(() => {
			setIndex((prev) => {
				if (prev >= IMAGES.length) return IMAGES.length
				return prev + 1
			})
		}, 3000)

		return () => clearInterval(id)
	}, [itemHeight, hasEntered])

	const y = itemHeight ? -index * itemHeight : 0

	return (
		<motion.div
			initial={{ y: -60, x: -30, rotate: -8, opacity: 0 }}
			animate={{ y: 0, x: 0, rotate: -2, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 35,
				damping: 16,
				mass: 0.6,
				delay: 0,
			}}
			onAnimationComplete={() => {
				setHasEntered(true)
			}}
			className='relative h-[53px] w-[69px] overflow-hidden rounded-[16px] border-2 border-black bg-[#262626] shadow-xl md:h-[78px] md:w-[102px] md:rounded-[24px] xl:h-[113px] xl:w-[148px] xl:rounded-[36px]'
			style={{
				boxShadow:
					'.565274px .565274px .799418px -.708333px #00000080,1.44525px 1.44525px 2.04389px -1.41667px #0000007a,2.89741px 2.89741px 4.09755px -2.125px #00000075,5.49248px 5.49248px 7.76754px -2.83333px #00000069,10.9174px 10.9174px 15.4395px -3.54167px #00000052,24px 24px 33.9411px -4.25px #00000017',
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					type: 'tween',
					duration: 0.4,
					delay: 1,
				}}
				className='h-full w-full'
			>
				<motion.ul
					className='flex w-full flex-col'
					animate={{ y }}
					transition={
						instant
							? { duration: 0 }
							: {
									type: 'tween',
									duration: 0.6,
									ease: 'easeInOut',
								}
					}
					onAnimationComplete={() => {
						if (index === IMAGES.length) {
							setInstant(true)
							setIndex(0)

							requestAnimationFrame(() => {
								setInstant(false)
							})
						}
					}}
				>
					{items.map((src, i) => (
						<li
							key={i}
							className='relative h-[53px] w-full flex-shrink-0 overflow-hidden md:h-[77px] xl:h-[113px]'
						>
							<img
								src={src}
								alt=''
								className='h-full w-full object-cover select-none'
								draggable={false}
								onDragStart={(e) => e.preventDefault()}
							/>
						</li>
					))}
				</motion.ul>
			</motion.div>
		</motion.div>
	)
}
