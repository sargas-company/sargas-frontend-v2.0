import React from "react";

export function NeonFrame({ children }: { children?: React.ReactNode }) {
	return (
		<div className="neon-box rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-0">
			{children}
		</div>
	)
}

