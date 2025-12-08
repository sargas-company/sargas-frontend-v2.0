import React, { useEffect, type ReactNode } from 'react'
import Lenis from "lenis";

type Props = {
	children: ReactNode;
};

export const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
	useEffect(() => {
		const lenis = new Lenis({
			autoRaf: true,
			smoothWheel: true,
			lerp: 0.2, //"stickiness"
			wheelMultiplier: 0.85, // sensitivity
			orientation: "vertical",
			gestureOrientation: "vertical",
			// syncTouch: false,
		});

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
};
