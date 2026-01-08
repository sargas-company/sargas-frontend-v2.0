import { motion } from 'framer-motion'

type ProjectDetailsProps = {
	main: {
		name: string
		img: string
		sections: { title: string; items: string[] }[]
	}
	details: { img: string; title: string }[]
}

export const ProjectDetails = ({ main, details }: ProjectDetailsProps) => {
	return (
		<motion.div
			className='overflow-hidden flex flex-col gap-12 md:gap-16 xl:gap-20 group w-[70%] my-0 mx-auto'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: 'tween',
				duration: 0.5,
				ease: 'easeInOut',
				delay: 1,
			}}
		>
			<img
				src={main.img}
				alt={main.name + ' name'}
				className='rounded-[24px]'
			/>
			<div className='flex justify-between'>
				{main.sections.map((item, index) => {
					return (
						<div key={index} className='flex flex-col gap-2'>
							<h4 className='font-serif text-2xl leading-[1.2em] tracking-normal text-black/50 italic'>
								{item.title}
							</h4>
							<div className='flex flex-col'>
								{item.items.map((str, indexS) => {
									return (
										<p
											key={indexS}
											className='text-lg leading-[1.5em] tracking-[-0.02em] md:text-xl'
										>
											{str}
										</p>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
			<div className='flex flex-col gap-12 md:gap-16 xl:gap-20'>
				{details.map((item, index) => {
					return (
						<div key={index} className='flex flex-col gap-6'>
							<img
								src={item.img}
								className='rounded-[24px]'
								alt={index + 'test'}
							/>
							<h4 className='text-lg md:text-xl'>
								<span>{item.title}</span>
							</h4>
						</div>
					)
				})}
			</div>
		</motion.div>
	)
}
