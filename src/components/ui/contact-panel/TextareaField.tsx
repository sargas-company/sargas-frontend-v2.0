import { AnimatePresence, motion } from 'framer-motion'
import { FieldLabel } from './FieldLabel'

type TextareaFieldProps = {
	label: string
	value: string
	onChange: (value: string) => void
	placeholder: string
}

export function TextareaField({ label, value, onChange, placeholder }: TextareaFieldProps) {
	const filled = value.trim().length > 0

	return (
		<label className='block'>
			<FieldLabel>
				{label}
				<span className='text-[13px] font-normal text-white/35'> (optional)</span>
			</FieldLabel>

			<div className='relative'>
				<textarea
					data-lenis-prevent-wheel=''
					data-lenis-prevent-touch=''
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className='max-h-[260px] min-h-[130px] w-full resize-none overflow-y-auto overscroll-contain rounded-[26px] border border-white/10 bg-white/[0.05] px-6 py-5 pr-16 text-[16px] text-white transition outline-none placeholder:text-white/40 focus:border-white/20 focus:bg-white/[0.07]'
				/>

				<AnimatePresence>
					{filled && (
						<motion.div
							initial={{ opacity: 0, scale: 0.72, y: 6, filter: 'blur(6px)' }}
							animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
							exit={{ opacity: 0, scale: 0.72, y: 6, filter: 'blur(6px)' }}
							transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
							className='absolute right-4 bottom-4'
						>
							<div className='flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]'>
								<span className='text-[11px] text-white'>✓</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</label>
	)
}
