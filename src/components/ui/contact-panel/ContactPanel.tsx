import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CloseButton } from './CloseButton'
import { ContactForm } from './ContactForm'
import { IntroStripes } from './IntroStripes'
import type { ContactPanelProps } from './types'

const overlayVariants = {
	hidden: {
		opacity: 0,
		backdropFilter: 'blur(0px)',
	},
	visible: {
		opacity: 1,
		backdropFilter: 'blur(8px)',
		transition: {
			opacity: {
				duration: 0.2,
			},
			backdropFilter: {
				duration: 0.35,
				delay: 0.12,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	},
}

const panelVariants = {
	hidden: {
		opacity: 0,
		x: 80,
		scale: 0.985,
	},
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1] as const,
		},
	},
	exit: {
		opacity: 0,
		x: 50,
		scale: 0.99,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 1, 1] as const,
		},
	},
}

export default function ContactPanel({ open, setOpen, onBookCall, onSubmit }: ContactPanelProps) {
	const [showIntroStripes, setShowIntroStripes] = useState(true)

	useEffect(() => {
		if (!open) return

		setShowIntroStripes(true)
	}, [open])

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						variants={overlayVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						onClick={handleClose}
						className='absolute inset-0 z-30 overflow-hidden bg-black/20'
					/>

					<motion.aside
						variants={panelVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='absolute inset-x-3 bottom-3 top-3 z-40 rounded-[28px] backdrop-blur-3xl md:inset-x-auto md:bottom-auto md:right-6 md:top-6 md:h-[1200px] md:w-[820px] md:rounded-[34px]'
					>
						{showIntroStripes && <IntroStripes />}

						<ContactForm onBookCall={onBookCall} onSubmit={onSubmit} />
						<CloseButton handle={handleClose} />
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	)
}
