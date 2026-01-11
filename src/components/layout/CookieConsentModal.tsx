import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

type Consent = 'accepted' | 'denied'

type Props = {
	storageKey?: string
	title?: string
	description?: string
	acceptLabel?: string
	denyLabel?: string
	onDecision?: (value: Consent) => void
}

const DEFAULT_KEY = 'sargas_cookie_consent_v1'

function safeGet(key: string): Consent | null {
	try {
		const v = localStorage.getItem(key)
		return v === 'accepted' || v === 'denied' ? v : null
	} catch {
		return null
	}
}

function safeSet(key: string, value: Consent) {
	try {
		localStorage.setItem(key, value)
	} catch {
		// ignore
	}
}

export function CookieConsentModal({
	   storageKey = DEFAULT_KEY,
	   title = 'This site uses cookies',
	   description =
		   `We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.\n\nBy clicking “Accept all”, you agree to the storing of cookies on your device for these purposes.`,
	   acceptLabel = 'Accept all',
	   denyLabel = 'Decline',
	   onDecision,
   }: Props) {

	const [open, setOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	const portalEl = useMemo(() => (typeof document !== 'undefined' ? document.body : null), [])

	useEffect(() => {
		setMounted(true)
		const existing = safeGet(storageKey)
		if (!existing) setOpen(true)
	}, [storageKey])

	const decide = (value: Consent) => {
		safeSet(storageKey, value)
		onDecision?.(value)
		setOpen(false)
	}

	useEffect(() => {
		if (!open) return
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = prev
		}
	}, [open])

	if (!mounted || !portalEl) return null

	return createPortal(
		<AnimatePresence>
			{open && (
				<>
					{/* overlay */}
					<motion.div
						className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-[2px]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18, ease: 'easeOut' }}
					/>

					{/* modal */}
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label="Cookie consent"
						className="fixed left-0 bottom-0 z-[9999] w-[92vw] max-w-[680px] -translate-x-[-20px] -translate-y-[20px] rounded-[28px] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-12 sm:py-10"
						initial={{ opacity: 0, y: 10, scale: 0.985 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 10, scale: 0.985 }}
						transition={{ duration: 0.22, ease: 'easeOut' }}
					>
						<button
							type="button"
							onClick={() => setOpen(false)}
							className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full text-black/40 transition hover:bg-black/5 hover:text-black"
							aria-label="Close"
						>
							<span className="text-[26px] leading-none">×</span>
						</button>

						<h3 className="text-[34px] font-semibold tracking-[-0.03em] text-black sm:text-[40px]">
							{title}
						</h3>

						<div className="mt-5 space-y-5 text-[18px] leading-[1.65] text-black/65">
							{description.split('\n\n').map((p, i) => (
								<p key={i}>{p}</p>
							))}
						</div>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
							<button
								type="button"
								onClick={() => decide('denied')}
								className="h-[56px] w-full cursor-pointer rounded-[18px] border border-black/15 bg-white px-8 text-[18px] font-semibold text-black transition hover:border-black/25 hover:bg-black/[0.02]"
							>
								{denyLabel}
							</button>

							<button
								type="button"
								onClick={() => decide('accepted')}
								className="h-[56px] w-full cursor-pointer rounded-[18px] bg-[#101828] px-8 text-[18px] font-semibold text-white transition hover:bg-black"
							>
								{acceptLabel}
							</button>
						</div>

						<p className="mt-6 text-sm text-black/40">
							You can change your choice anytime in your browser settings.
						</p>
					</motion.div>
				</>
			)}
		</AnimatePresence>,
		portalEl
	)
}
