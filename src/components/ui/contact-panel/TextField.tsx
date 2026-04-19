import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FieldLabel } from './FieldLabel'

type TextFieldProps = {
	label: string
	value: string
	onChange: (value: string) => void
	placeholder: string
	required?: boolean
	type?: 'text' | 'email'
	showError?: boolean
	errorText?: string
	optional?: boolean
}

export function TextField({
	label,
	value,
	onChange,
	placeholder,
	required,
	type = 'text',
	showError = false,
	errorText = 'Please fill in this field',
	optional = false,
}: TextFieldProps) {
	const [touched, setTouched] = useState(false)

	const filled = value.trim().length > 0
	const hasRequiredError = Boolean(required && !filled && (touched || showError))

	return (
		<label className='block'>
			<div className='mb-3 flex items-center gap-2'>
				<FieldLabel required={required}>{label}</FieldLabel>

				{optional && <span className='text-[13px] font-normal text-white/35'>(optional)</span>}
			</div>

			<div className='relative'>
				<input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					onBlur={() => setTouched(true)}
					type={type}
					placeholder={placeholder}
					className={`h-[64px] w-full rounded-full bg-white/[0.05] px-7 pr-16 text-[16px] text-white outline-none transition placeholder:text-white/40 ${
						hasRequiredError
							? 'border border-[#ff7a59]/70'
							: 'border border-white/10 focus:border-white/20 focus:bg-white/[0.07]'
					}`}
				/>

				<AnimatePresence>
					{filled && !hasRequiredError && (
						<motion.div
							initial={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
							animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
							exit={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
							transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
							className='absolute right-4 top-1/2 -translate-y-1/2'
						>
							<div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]'>
								<motion.span
									initial={{ opacity: 0, scale: 0.6 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.05, duration: 0.18 }}
									className='text-[11px] text-white'
								>
									✓
								</motion.span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<AnimatePresence>
				{hasRequiredError && (
					<motion.p
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 6 }}
						transition={{ duration: 0.18 }}
						className='mt-2 pl-2 text-[13px] text-[#ff9c85]'
					>
						{errorText}
					</motion.p>
				)}
			</AnimatePresence>
		</label>
	)
}
