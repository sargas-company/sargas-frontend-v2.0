import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import IntlTelInput, { intlTelInput } from 'intl-tel-input/reactWithUtils'
import type { IntlTelInputRef } from 'intl-tel-input/reactWithUtils'
import type { Iso2, NumberType } from 'intl-tel-input'
import { FieldLabel } from './FieldLabel'

type CountryOption = {
	iso: Iso2
	name: string
	flag: string
}

type CountryWithDialCode = CountryOption & {
	dialCode: string
}

const countryOptions: CountryOption[] = [
	{ iso: 'us', name: 'United States', flag: '🇺🇸' },
	{ iso: 'ca', name: 'Canada', flag: '🇨🇦' },
	{ iso: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
	{ iso: 'ie', name: 'Ireland', flag: '🇮🇪' },
	{ iso: 'au', name: 'Australia', flag: '🇦🇺' },
	{ iso: 'nz', name: 'New Zealand', flag: '🇳🇿' },
	{ iso: 'de', name: 'Germany', flag: '🇩🇪' },
	{ iso: 'ch', name: 'Switzerland', flag: '🇨🇭' },
	{ iso: 'nl', name: 'Netherlands', flag: '🇳🇱' },
	{ iso: 'be', name: 'Belgium', flag: '🇧🇪' },
	{ iso: 'lu', name: 'Luxembourg', flag: '🇱🇺' },
	{ iso: 'fr', name: 'France', flag: '🇫🇷' },
	{ iso: 'at', name: 'Austria', flag: '🇦🇹' },
	{ iso: 'dk', name: 'Denmark', flag: '🇩🇰' },
	{ iso: 'se', name: 'Sweden', flag: '🇸🇪' },
	{ iso: 'no', name: 'Norway', flag: '🇳🇴' },
	{ iso: 'fi', name: 'Finland', flag: '🇫🇮' },
	{ iso: 'is', name: 'Iceland', flag: '🇮🇸' },
	{ iso: 'it', name: 'Italy', flag: '🇮🇹' },
	{ iso: 'es', name: 'Spain', flag: '🇪🇸' },
	{ iso: 'pt', name: 'Portugal', flag: '🇵🇹' },
	{ iso: 'pl', name: 'Poland', flag: '🇵🇱' },
	{ iso: 'cz', name: 'Czech Republic', flag: '🇨🇿' },
	{ iso: 'ee', name: 'Estonia', flag: '🇪🇪' },
	{ iso: 'lv', name: 'Latvia', flag: '🇱🇻' },
	{ iso: 'lt', name: 'Lithuania', flag: '🇱🇹' },
	{ iso: 'si', name: 'Slovenia', flag: '🇸🇮' },
	{ iso: 'sk', name: 'Slovakia', flag: '🇸🇰' },
	{ iso: 'hu', name: 'Hungary', flag: '🇭🇺' },
	{ iso: 'hr', name: 'Croatia', flag: '🇭🇷' },
	{ iso: 'ro', name: 'Romania', flag: '🇷🇴' },
	{ iso: 'sg', name: 'Singapore', flag: '🇸🇬' },
	{ iso: 'jp', name: 'Japan', flag: '🇯🇵' },
	{ iso: 'kr', name: 'South Korea', flag: '🇰🇷' },
	{ iso: 'tw', name: 'Taiwan', flag: '🇹🇼' },
	{ iso: 'hk', name: 'Hong Kong', flag: '🇭🇰' },
	{ iso: 'ae', name: 'United Arab Emirates', flag: '🇦🇪' },
	{ iso: 'sa', name: 'Saudi Arabia', flag: '🇸🇦' },
	{ iso: 'qa', name: 'Qatar', flag: '🇶🇦' },
	{ iso: 'kw', name: 'Kuwait', flag: '🇰🇼' },
	{ iso: 'bh', name: 'Bahrain', flag: '🇧🇭' },
	{ iso: 'om', name: 'Oman', flag: '🇴🇲' },
	{ iso: 'il', name: 'Israel', flag: '🇮🇱' },
]

const dialCodesByIso = new Map(
	intlTelInput.getCountryData().map(({ iso2, dialCode }) => [iso2, `+${dialCode}`])
)
const countries: CountryWithDialCode[] = countryOptions.map((item) => ({
	...item,
	dialCode: dialCodesByIso.get(item.iso) ?? '',
}))
const allowedCountryCodes = countries.map((item) => item.iso)
const allowedNumberTypes: NumberType[] = ['MOBILE', 'FIXED_LINE']

type PhoneFieldProps = {
	value: string
	onChange: (value: string) => void
	country: string
	onCountryChange: (country: string) => void
	isValid: boolean
	onValidityChange: (isValid: boolean) => void
	showError?: boolean
}

export function PhoneField({
	value,
	onChange,
	country,
	onCountryChange,
	isValid,
	onValidityChange,
	showError = false,
}: PhoneFieldProps) {
	const [open, setOpen] = useState(false)
	const [touched, setTouched] = useState(false)
	const rootRef = useRef<HTMLDivElement | null>(null)
	const phoneInputRef = useRef<IntlTelInputRef | null>(null)

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

	useEffect(() => {
		const instance = phoneInputRef.current?.getInstance()
		if (!instance) return

		const currentCountry = instance.getSelectedCountryData()?.iso2
		if (currentCountry !== selectedCountry.iso) {
			instance.setCountry(selectedCountry.iso)
		}

		if (!value.trim()) {
			onValidityChange(true)
			return
		}

		onValidityChange(instance.isValidNumberPrecise() ?? false)
	}, [onValidityChange, selectedCountry.iso, value])

	const syncPhoneValue = () => {
		const input = phoneInputRef.current?.getInput()
		const instance = phoneInputRef.current?.getInstance()
		const inputValue = input?.value.trim() ?? ''

		if (!inputValue) {
			onChange('')
			onValidityChange(true)
			return
		}

		onChange(instance?.getNumber() ?? inputValue)
		onValidityChange(instance?.isValidNumberPrecise() ?? false)
	}

	const handleCountrySelect = (iso: Iso2) => {
		setTouched(true)
		onCountryChange(iso)
		setOpen(false)

		const instance = phoneInputRef.current?.getInstance()
		instance?.setCountry(iso)
		syncPhoneValue()
	}

	const filled = value.trim().length > 0
	const showPhoneError = filled && !isValid && (touched || showError)

	return (
		<div className='block'>
			<div className='mb-3 flex items-center gap-2'>
				<FieldLabel>Phone Number</FieldLabel>
				<span className='text-[13px] font-normal text-white/35'>(optional)</span>
			</div>

			<div ref={rootRef} className='relative'>
				<div className='flex h-[58px] items-center rounded-full border border-white/10 bg-white/[0.05] px-2 sm:h-[64px] sm:px-3'>
					<button
						type='button'
						aria-expanded={open}
						aria-haspopup='listbox'
						aria-label='Select phone country'
						onClick={() => setOpen((prev) => !prev)}
						className='inline-flex h-[44px] shrink-0 items-center gap-2 rounded-full bg-white/[0.05] px-3 transition hover:bg-white/[0.08] sm:h-[48px] sm:gap-3 sm:px-4'
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

					<div className='mx-2 h-8 w-px bg-white/10 sm:mx-3' />

					<span className='shrink-0 text-[15px] text-white/90 sm:text-[16px]'>
						{selectedCountry.dialCode}
					</span>

					<IntlTelInput
						ref={phoneInputRef}
						value={value}
						initialCountry={selectedCountry.iso}
						onlyCountries={allowedCountryCodes}
						allowedNumberTypes={allowedNumberTypes}
						allowDropdown={false}
						showFlags={false}
						nationalMode={false}
						separateDialCode
						formatAsYouType
						formatOnDisplay
						strictMode
						usePreciseValidation
						autoPlaceholder='aggressive'
						placeholderNumberType='MOBILE'
						containerClass='sargas-phone-input flex min-w-0 flex-1'
						onChangeNumber={() => syncPhoneValue()}
						onChangeValidity={(nextIsValid) => {
							onValidityChange(
								!phoneInputRef.current?.getInput()?.value.trim() || nextIsValid
							)
						}}
						onChangeCountry={(iso) => {
							if (allowedCountryCodes.includes(iso as Iso2)) {
								onCountryChange(iso)
							}
						}}
						inputProps={{
							'aria-invalid': showPhoneError,
							'aria-describedby': showPhoneError ? 'phone-error' : undefined,
							autoComplete: 'tel',
							onBlur: () => setTouched(true),
							className:
								'ml-2 min-w-0 flex-1 bg-transparent text-[16px] text-white outline-none placeholder:text-white/40 sm:ml-3',
						}}
					/>

					<AnimatePresence>
						{filled && isValid && (
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
					{showPhoneError && (
						<motion.p
							id='phone-error'
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 6 }}
							transition={{ duration: 0.18 }}
							className='mt-2 pl-2 text-[13px] text-[#ff9c85]'
						>
							Please enter a valid phone number
						</motion.p>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{open && (
						<motion.div
							role='listbox'
							aria-label='Phone country'
							initial={{ opacity: 0, y: 8, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 8, scale: 0.98 }}
							transition={{ duration: 0.18 }}
							className='absolute top-[72px] left-0 z-[90] min-w-[260px] overflow-hidden rounded-[20px] border border-white/10 bg-[#111214] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl'
						>
							<div
								data-lenis-prevent-wheel=''
								data-lenis-prevent-touch=''
								className='sargas-scrollbar max-h-[260px] overflow-y-auto overscroll-contain p-2'
							>
								{countries.map((item) => {
									const active = item.iso === selectedCountry.iso

									return (
										<button
											key={item.iso}
											type='button'
											role='option'
											aria-selected={active}
											onClick={() => handleCountrySelect(item.iso)}
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
