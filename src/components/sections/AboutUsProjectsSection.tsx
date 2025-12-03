import React from 'react'
import shopifyLogo from '../../assets/shopifyLogo.png'
import clutchLogo from '../../assets/clutchLogo.png'
type StatCardProps = {
	id: string
	icon?: React.ReactNode
	rate: string
	description: string
}

const sitesEnum = {
	CLATCH: 'CLATCH',
	SHOPIFY: 'SHOPIFY',
}

// const StatCard = ({ icon, rate, description, id }: StatCardProps) => {
// 	return (
// 		// <div className='flex h-full flex-col justify-between rounded-[22px] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition will-change-transform hover:-translate-y-1 md:px-7 md:py-8'>
// 		<div className='flex items-start rounded-[2rem] bg-[linear-gradient(165deg,#e8e8e880,#fff_25%)] p-6 shadow-[0_2px_6px_#0000000a] saturate-[1.4] backdrop-blur-[12px]'>
// 			<div className='flex h-full flex-col items-start justify-between gap-3'>
// 				{id === sitesEnum.SHOPIFY && (
// 					<div className='h-12 w-12 min-w-12 rounded-[1rem] bg-[#1b1b1b] p-[1px]'>
// 						<div className='relative z-[2] flex h-full w-full min-w-full items-center justify-center rounded-[1rem] bg-[linear-gradient(184deg,#292929,#1b1b1b)] shadow-[inset_0_0.125rem_0.125rem_#ffffff4d,0_0.25rem_0.375rem_#00000024]'>
// 							{icon}
// 						</div>
// 					</div>
// 				)}
//
// 				{id === sitesEnum.CLATCH && (
// 					<div className='flex items-start justify-start'>{icon}</div>
// 				)}
//
// 				<div className='flex flex-col'>
// 					<div className='flex items-center gap-2'>
// 						<span className='text-[34px] leading-none font-semibold text-black md:text-[38px]'>
// 							{rate}
// 						</span>
// 						{id === sitesEnum.CLATCH && (
// 							<div className='flex gap-1'>
// 								<img
// 									src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
// 									alt=''
// 									className='h-4 w-4'
// 								/>
// 								<img
// 									src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
// 									alt=''
// 									className='h-4 w-4'
// 								/>
// 								<img
// 									src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
// 									alt=''
// 									className='h-4 w-4'
// 								/>
// 								<img
// 									src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
// 									alt=''
// 									className='h-4 w-4'
// 								/>
// 								<img
// 									src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg'
// 									alt=''
// 									className='h-4 w-4'
// 								/>
// 							</div>
// 						)}
// 					</div>
//
// 					<span className='mt-1 text-sm font-semibold text-black/60 md:text-base'>
// 						{description}
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
const StatCard = ({ icon, rate, description, id }: StatCardProps) => {
	return (
		<div className="flex w-full items-start rounded-[2rem] bg-[linear-gradient(165deg,#e8e8e880,#fff_25%)]
            p-5 sm:p-6 shadow-[0_2px_6px_#0000000a] saturate-[1.4] backdrop-blur-[12px]">

			<div className="flex h-full flex-col items-start justify-between gap-3 w-full">

				{/* Icon wrappers — adaptive */}
				{id === sitesEnum.SHOPIFY && (
					<div className="h-12 w-12 rounded-[1rem] bg-[#1b1b1b] p-[1px] shrink-0">
						<div className="relative z-[2] flex h-full w-full items-center justify-center
                            rounded-[1rem] bg-[linear-gradient(184deg,#292929,#1b1b1b)]
                            shadow-[inset_0_0.125rem_0.125rem_#ffffff4d,0_0.25rem_0.375rem_#00000024]">
							{icon}
						</div>
					</div>
				)}

				{id === sitesEnum.CLATCH && (
					<div className="flex items-start justify-start shrink-0">
						{icon}
					</div>
				)}

				{/* TEXT */}
				<div className="flex flex-col w-full">
					<div className="flex items-center gap-2 flex-wrap">
						<span className="text-[28px] sm:text-[34px] md:text-[38px] leading-none font-semibold text-black">
							{rate}
						</span>

						{id === sitesEnum.CLATCH && (
							<div className="flex gap-1 shrink-0">
								{[...Array(5)].map((_, i) => (
									<img
										key={i}
										src="https://cdn.prod.website-files.com/689f75b5070c55df84340628/68a372854ac90bed057c73a0_star%20(1).svg"
										alt=""
										className="h-4 w-4"
									/>
								))}
							</div>
						)}
					</div>

					<span className="mt-1 text-sm sm:text-base font-semibold text-black/60 leading-snug break-words">
						{description}
					</span>
				</div>
			</div>
		</div>
	)
}


export const AboutUsProjectsSection = () => {
	return (


		<section className='w-full py-12 md:py-16'>
			<div className='mx-auto flex flex-col gap-8 md:gap-12'>
				{/* HEADER */}
				<div className='text-center'>
					<h2 className='text-[26px] font-semibold tracking-tight text-black md:text-[32px]'>
						A few words{' '}
						<span className='relative inline-block font-normal text-black/70'>About us</span>
					</h2>
					<div className='mx-auto mt-1 h-[2px] w-16 rounded-full bg-black/15' />
				</div>

				{/* GRID */}
				<div className='grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr] lg:gap-8'>
					<div className='/* mobile (<= ~480) */ /* десктоп (>= sm, у тебя это 640px) */ relative flex min-h-[100vw] min-w-auto flex-col items-stretch justify-between overflow-clip rounded-[4.44vw] bg-neutral-900 bg-cover bg-center p-[6.66vw] sm:min-h-[40rem] sm:min-w-[40rem] sm:rounded-[1.75rem] sm:p-10'>
						{/* background light textures */}
						<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(255,255,255,0.08),transparent),radial-gradient(80%_80%_at_80%_10%,rgba(255,255,255,0.05),transparent)]' />

						{/* IMAGES */}

						<div className='mt-[0.9375rem] ml-[0.9375rem] h-[19.375rem] w-[27.1875rem] rotate-[-6.14deg] overflow-clip rounded-[1rem] shadow-[1rem_1rem_1.5rem_#0003] transition-all duration-300'>
							<img
								src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/689f75da717af91f07fe813a_FImcuts%20-%208.webp'
								alt='Project collage'
								className='h-full w-full transition-transform duration-500 hover:scale-[1.015]'
							/>
						</div>

						<div
							className={
								'h-[16.875rem] w-[25rem] rounded-[0.625rem] ' +
								' absolute inset-[12.9375rem_auto_auto_15rem] ' +
								' overflow-clip transition-all duration-400 ' +
								' rotate-[5.3deg] shadow-[1rem_1rem_1.5rem_#0003]'
							}
						>
							<img
								src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/689f75da113411a208993274_Group%201395.webp'
								alt='Project collage'
								className='h-full w-full transition-transform duration-500 hover:scale-[1.015]'
							/>
						</div>

						{/* TEXT */}
						<div className='relative mt-7 text-left text-white'>
							<p className='text-4xl leading-none font-semibold md:text-5xl'>
								10<span className='align-super text-2xl font-semibold'>+</span> years
							</p>
							<p className='mt-2 text-sm text-white/70 md:text-base'>
								scaling e-commerce brands
							</p>
						</div>
					</div>

					{/* RIGHT SIDE — STATS GRID */}
					<div className='xs:grid-cols-2 xs:gap-6 grid grid-cols-1 gap-[2.7vw]'>
						{/* CARD 1 */}
						<StatCard
							id={sitesEnum.SHOPIFY}
							icon={<img src={shopifyLogo} alt='' className='h-6 w-6' />}
							rate='90+'
							description='Shopify brands grown through our retainers'
						/>

						{/* CARD 2 */}
						<StatCard
							id={sitesEnum.CLATCH}
							icon={<img src={clutchLogo} alt='' className='h-4 w-auto' />}
							rate='5.0'
							description='Top 3 Shopify agency in Spain & Poland'
						/>

						<div className='col-span-2'>
							<div className='grid h-full grid-cols-1 gap-6 rounded-[22px] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid-cols-2 md:px-10 md:py-10'>
								<div className='flex h-full flex-col justify-between'>
									<div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white shadow-sm'>
										<span className='text-lg font-semibold'>W</span>
									</div>

									<div className='flex flex-col'>
										<span className='text-[34px] leading-none font-semibold text-black md:text-[38px]'>
											8/10
										</span>
										<span className='mt-1 text-sm font-semibold text-black/60 md:text-base'>
											new clients come from referrals
										</span>
									</div>
								</div>


								<div className='relative flex items-center justify-center'>
									<img
										src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/689f75db0f8fca58c29c278a_Upwork%20Case%20-%20v.%2011-2%201.webp'
										alt='Showcase A'
										className='w-[75%] max-w-[260px] rotate-[-3deg] rounded-[18px] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.15)]'
									/>

									<img
										src='https://cdn.prod.website-files.com/689f75b5070c55df84340628/689f75db0f8fca58c29c278a_Upwork%20Case%20-%20v.%2011-2%201.webp'
										alt='Showcase B'
										className='absolute top-6 right-2 w-[70%] max-w-[240px] rotate-[4deg] rounded-[18px] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.15)]'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsProjectsSection
