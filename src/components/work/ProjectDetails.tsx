import { motion } from 'framer-motion'

type ProjectDetailsProps = {
	main: {
		name: string
		img: string
		sections: { title: string; items: string[] }[]
	}
	details: { img: string; }[]
}

export const ProjectDetails = ({ main, details }: ProjectDetailsProps) => {
	return (
		<motion.div
			className='flex flex-col gap-12 md:gap-16 xl:gap-20 group w-[70%] my-0 mx-auto'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: 'tween',
				duration: 0.5,
				ease: 'easeInOut',
				delay: 1,
			}}
		>
			<div className='overflow-hidden rounded-[30px]'>
				<img
					src={main.img}
					alt={main.name + ' name'}
					className='transition-transform duration-750 ease-in-out hover:scale-105'
				/>
			</div>

			<div className='flex flex-col gap-12 md:gap-16 xl:gap-20'>
				{details.map((item, index) => {
					return (
						<div key={index} className='flex flex-col gap-6'>
							<div className='overflow-hidden rounded-[30px]'>
								<img
									src={item.img}
									className='transition-transform duration-750 ease-in-out hover:scale-105'
									alt={index + 'test'}
								/>
							</div>
						</div>
					)
				})}
			</div>
		</motion.div>
	)
}
