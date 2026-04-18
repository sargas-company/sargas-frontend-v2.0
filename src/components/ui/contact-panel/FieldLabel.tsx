import type { ReactNode } from 'react'

type FieldLabelProps = {
	children: ReactNode
	required?: boolean
}

export function FieldLabel({ children, required }: FieldLabelProps) {
	return (
		<span className='mb-3 block text-[15px] font-medium text-white'>
			{children}
			{required && <span className='text-[#2F7BFF]'> *</span>}
		</span>
	)
}
