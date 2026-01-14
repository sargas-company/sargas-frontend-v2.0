import { motion } from 'framer-motion'

type ProjectDetailsProps = {
	main: {
		name: string
		img: string
		sections: { title: string; items: string[] }[]
	}
	details: { img: string }[]
}

export const ProjectDetails = ({ main, details }: ProjectDetailsProps) => {
	return (
		<motion.div
			className='group mx-auto my-0 flex w-full sm:w-[70%] transform-gpu flex-col gap-12 [will-change:transform,opacity] md:gap-16 xl:gap-20'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: 'tween',
				duration: 0.5,
				ease: 'easeInOut',
				delay: 1,
			}}
		>
			<div className='overflow-hidden rounded-[10px] sm:rounded-[30px]'>
				<img
					src={main.img}
					alt={main.name + ' name'}
					className='duration-750 transition-transform ease-in-out hover:scale-105'
				/>
			</div>

			<div className='flex flex-col gap-12 md:gap-16 xl:gap-20'>
				{details.map((item, index) => {
					return (
						<div key={index} className='flex flex-col gap-6'>
							<div className='overflow-hidden rounded-[30px]'>
								<img
									src={item.img}
									className='duration-750 transition-transform ease-in-out hover:scale-105'
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
