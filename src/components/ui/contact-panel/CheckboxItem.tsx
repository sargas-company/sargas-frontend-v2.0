import { AnimatePresence, motion } from 'framer-motion'

type CheckboxItemProps = {
	label: string
	checked: boolean
	onToggle: () => void
}

export function CheckboxItem({ label, checked, onToggle }: CheckboxItemProps) {
	return (
		<motion.button
			type='button'
			onClick={onToggle}
			whileTap={{ scale: 0.98 }}
			className='group flex items-center gap-3 text-left'
		>
			<motion.span
				animate={{
					backgroundColor: checked ? 'rgb(41,91,193)' : 'rgba(255,255,255,0)',
					borderColor: checked ? 'rgb(41,91,193)' : 'rgba(255,255,255,0.15)',
					scale: checked ? 1.02 : 1,
				}}
				transition={{ duration: 0.22 }}
				className='relative flex h-6 w-6 items-center justify-center rounded-[8px] border'
			>
				<AnimatePresence>
					{checked && (
						<motion.span
							initial={{ opacity: 0, scale: 0.65, rotate: -12 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							exit={{ opacity: 0, scale: 0.65, rotate: 12 }}
							transition={{ duration: 0.18 }}
							className='text-[12px] text-white'
						>
							✓
						</motion.span>
					)}
				</AnimatePresence>
			</motion.span>

			<span className='text-[16px] font-medium text-[#ffffffcf] transition group-hover:text-white/90'>
				{label}
			</span>
		</motion.button>
	)
}
