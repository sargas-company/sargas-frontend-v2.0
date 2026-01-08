import React from 'react'

export function NeonFrame({ children }: { children?: React.ReactNode }) {
	return (
		<div className='neon-box rounded-[32px] bg-white p-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)]'>
			{children}
		</div>
	)
}
