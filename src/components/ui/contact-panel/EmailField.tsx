import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const isValidEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

type EmailFieldProps = {
	value: string
	onChange: (value: string) => void
	showError?: boolean
}

export function EmailField({ value, onChange }: EmailFieldProps) {
	const [touched, setTouched] = useState(false)

	const isFilled = value.trim().length > 0
	const emailError = (isFilled && !isValidEmail(value)) || (touched && !isFilled)

	return (
		<label className='col-span-2 block'>
			<span className='mb-3 block text-[15px] font-medium text-white'>
				Email Address <span className='text-[#2F7BFF]'>*</span>
			</span>

			<div className='relative'>
				<input
					type='email'
					placeholder='name@company.com'
					value={value}
					onBlur={() => setTouched(true)}
					onChange={(e) => onChange(e.target.value)}
					className={`h-[64px] w-full rounded-full bg-white/[0.05] px-7 pr-14 text-[16px] text-white outline-none transition placeholder:text-white/40 ${
						emailError
							? 'border border-[#ff7a59]/70'
							: 'border border-white/10 focus:border-white/20'
					}`}
				/>

				<AnimatePresence>
					{isValidEmail(value) && (
						<motion.div
							initial={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
							animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
							exit={{ opacity: 0, scale: 0.72, x: 8, filter: 'blur(6px)' }}
							transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
							className='absolute right-4 top-1/2 -translate-y-1/2'
						>
							<div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]'>
								<span className='text-[11px] text-white'>✓</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<AnimatePresence>
				{emailError && (
					<motion.p
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 6 }}
						transition={{ duration: 0.18 }}
						className='mt-2 pl-2 text-[13px] text-[#ff9c85]'
					>
						Please enter a valid email address
					</motion.p>
				)}
			</AnimatePresence>
		</label>
	)
}

export const isEmailValid = (email: string) => {
	return isValidEmail(email)
}
