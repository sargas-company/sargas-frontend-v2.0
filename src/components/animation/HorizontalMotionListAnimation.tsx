import { motion } from 'framer-motion'

const asset1 = (
	<svg className='md:w-[140px] xs:w-[100px]' width='170' viewBox='0 0 174 115' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<g filter='url(#filter0_d_186_761)'>
			<rect x='38.4004' y='33.3999' width='42.3291' height='13' rx='3' fill='#555555' />
			<rect x='84.0713' y='33.3999' width='42.3291' height='22' rx='3' fill='#555555' />
			<rect x='84.0713' y='58.3999' width='42.3291' height='23' rx='3' fill='#555555' />
			<rect x='38.4004' y='49.3999' width='42.3291' height='32' rx='3' fill='#555555' />
		</g>
		<defs></defs>
	</svg>
)
const asset2 = (
	<svg className='md:w-[140px] xs:w-[100px]' width='170' viewBox='0 0 174 115' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<g filter='url(#filter0_d_186_760)'></g>
		<path
			d='M32.4004 56.0928L63.3954 46.3418V53.2743L42.6233 59.2646L63.3954 65.3517V72.3779L32.4004 62.5531V56.0928Z'
			fill='#555555'
		/>
		<path d='M69.6992 77.3999L85.5091 37.3999H95.0683L79.3184 77.3999H69.6992Z' fill='#555555' />
		<path
			d='M132.4 62.627L101.405 72.3779V65.4454L122.177 59.4553L101.405 53.3682V46.3418L132.4 56.1667V62.627Z'
			fill='#555555'
		/>
		<defs></defs>
	</svg>
)

const IMAGES = [asset1, asset2]

export const HorizontalMotionListAnimation = () => {
	const items = [...IMAGES, ...IMAGES]

	return (
		<motion.div
			initial={{ y: -60, x: 30, rotate: 8, opacity: 0 }}
			animate={{ y: 0, x: 0, rotate: 2, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 35,
				damping: 16,
				mass: 0.8,
				delay: 0,
			}}
			className='relative h-[73px] w-[96px] overflow-hidden rounded-[16px] border-2 border-black bg-[#262626] shadow-xl md:h-[88px] md:w-[115px] md:rounded-[24px] xl:h-[113px] xl:w-[148px] xl:rounded-[36px]'
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
					className='flex h-full w-max items-center bg-[#262626]'
					animate={{ x: ['0%', '-50%'] }}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: 'linear',
						delay: 1,
					}}
				>
					{items.map((icon, i) => (
						<li
							key={i}
							className='flex h-full flex-shrink-0 items-center justify-center bg-[#262626]'
						>
							{icon}
						</li>
					))}
				</motion.ul>
			</motion.div>
		</motion.div>
	)
}
