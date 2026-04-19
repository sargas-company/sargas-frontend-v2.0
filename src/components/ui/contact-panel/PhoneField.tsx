import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FieldLabel } from './FieldLabel'

type CountryOption = {
	iso: string
	name: string
	flag: string
	dialCode: string
}

const countries: CountryOption[] = [
	{ iso: 'us', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
	{ iso: 'ua', name: 'Ukraine', flag: '🇺🇦', dialCode: '+380' },
	{ iso: 'gb', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
	{ iso: 'de', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
	{ iso: 'pl', name: 'Poland', flag: '🇵🇱', dialCode: '+48' },
]

type PhoneFieldProps = {
	value: string
	onChange: (value: string) => void
	country: string
	onCountryChange: (country: string) => void
}

export function PhoneField({ value, onChange, country, onCountryChange }: PhoneFieldProps) {
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement | null>(null)

	const selectedCountry = useMemo(() => {
		return countries.find((item) => item.iso === country) ?? countries[0]
	}, [country])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!rootRef.current) return
			if (!rootRef.current?.contains(event.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const filled = value.trim().length > 0

	return (
		<div className='block'>
			<div className='mb-3 flex items-center gap-2'>
				<FieldLabel>Phone Number</FieldLabel>
				<span className='text-[13px] font-normal text-white/35'>(optional)</span>
			</div>

			<div ref={rootRef} className='relative'>
				<div className='flex h-[64px] items-center rounded-full border border-white/10 bg-white/[0.05] px-3'>
					<button
						type='button'
						onClick={() => setOpen((prev) => !prev)}
						className='inline-flex h-[48px] shrink-0 items-center gap-3 rounded-full bg-white/[0.05] px-4 transition hover:bg-white/[0.08]'
					>
						<span className='text-[18px] leading-none'>{selectedCountry.flag}</span>

						<motion.svg
							animate={{ rotate: open ? 180 : 0 }}
							transition={{ duration: 0.2 }}
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='text-white/70'
						>
							<path
								d='M3 5L7 9L11 5'
								stroke='currentColor'
								strokeWidth='1.8'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</motion.svg>
					</button>

					<div className='mx-3 h-8 w-px bg-white/10' />

					<span className='shrink-0 text-[16px] text-white/90'>
						{selectedCountry.dialCode}
					</span>

					<input
						type='tel'
						inputMode='tel'
						placeholder='Phone number'
						value={value}
						onChange={(e) => onChange(e.target.value)}
						className='ml-3 min-w-0 flex-1 bg-transparent text-[16px] text-white outline-none placeholder:text-white/40'
					/>

					<AnimatePresence>
						{filled && (
							<motion.div
								initial={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
								animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
								exit={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
								transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
								className='ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]'
							>
								<span className='text-[11px] text-white'>✓</span>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0, y: 8, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 8, scale: 0.98 }}
							transition={{ duration: 0.18 }}
							className='absolute left-0 top-[72px] z-[90] min-w-[260px] overflow-hidden rounded-[20px] border border-white/10 bg-[#111214] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl'
						>
							<div className='max-h-[260px] overflow-y-auto p-2'>
								{countries.map((item) => {
									const active = item.iso === selectedCountry.iso

									return (
										<button
											key={item.iso}
											type='button'
											onClick={() => {
												onCountryChange(item.iso)
												setOpen(false)
											}}
											className={`flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left transition ${
												active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'
											}`}
										>
											<div className='flex items-center gap-3'>
												<span className='text-[18px] leading-none'>{item.flag}</span>
												<div className='flex flex-col'>
													<span className='text-[14px] text-white'>{item.name}</span>
													<span className='text-[12px] text-white/45'>
														{item.dialCode}
													</span>
												</div>
											</div>

											{active && <span className='text-[12px] text-white/60'>✓</span>}
										</button>
									)
								})}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
