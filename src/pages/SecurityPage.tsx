import { WorkLayout } from '../components/work/WorkLayout'
import { motion } from 'framer-motion'

export const SecurityPage = () => {
	type AnimatedTextProps = {
		text: string
	}

	function AnimatedText({ text }: AnimatedTextProps) {
		return text
	}

	const lastUpdated = 'January 18, 2026'

	return (
		<>
			<WorkLayout>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 0.5,
					}}
					className="h-full w-full"
				>
					<header className="mb-5 border-b border-black/10 pb-4">
						<h1 className="text-balance text-[44px] font-semibold tracking-[-0.04em] text-black sm:text-[56px]">
							Security
						</h1>
						<p className="mt-3 whitespace-nowrap font-serif text-2xl italic leading-relaxed tracking-normal text-black/55">
							Last updated: {lastUpdated}
						</p>
					</header>
				</motion.div>

				{/* Overview */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold text-black">Overview</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Sargas.io is an informational website about our B2B services.' })}</li>
								<li>{AnimatedText({ text: 'The Website does not provide user accounts.' })}</li>
								<li>{AnimatedText({ text: 'We do not run analytics or marketing trackers on the Website.' })}</li>
								<li>{AnimatedText({ text: 'We apply practical security measures appropriate for a corporate website and presales communications.' })}</li>
							</ul>

							<p className="mt-4">
								{AnimatedText({
									text:
										'This page describes security measures for the sargas.io website and presales communications. It is not a compliance certification (e.g., ISO 27001).',
								})}
							</p>
						</div>
					</section>
				</motion.div>

				{/* Website security */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Website security
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({
									text: 'We use baseline security controls to protect the Website and our infrastructure:',
								})}
							</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'HTTPS/TLS encryption in transit' })}</li>
								<li>{AnimatedText({ text: 'Restricted administrative access to hosting and domain management' })}</li>
								<li>{AnimatedText({ text: 'Least-privilege access for administration where feasible' })}</li>
								<li>{AnimatedText({ text: 'Regular updates and patching where feasible' })}</li>
								<li>{AnimatedText({ text: 'Monitoring for reliability, abuse prevention, and troubleshooting' })}</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* Cookies and tracking */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Cookies and tracking
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Strictly necessary cookies only (essential functionality and security)' })}</li>
								<li>{AnimatedText({ text: 'No analytics cookies' })}</li>
								<li>{AnimatedText({ text: 'No marketing or advertising cookies' })}</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* Call booking (Calendly) */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Call booking (Calendly)
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({
									text:
										'Call scheduling is handled via Calendly. Information you submit in Calendly is processed by Calendly under its own policies and shared with us so we can contact you and hold the call.',
								})}
							</p>

							<p className="mb-3">{AnimatedText({ text: 'Typical booking details include:' })}</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Name' })}</li>
								<li>{AnimatedText({ text: 'Email address' })}</li>
								<li>{AnimatedText({ text: 'Meeting time' })}</li>
								<li>{AnimatedText({ text: 'Notes you choose to provide (optional)' })}</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* Access to booking/inquiry data */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Access to booking/inquiry data
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({ text: 'We use booking/inquiry details for presales communication only:' })}
							</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'To communicate with you and organize meetings' })}</li>
								<li>{AnimatedText({ text: 'To discuss requirements and potential cooperation' })}</li>
								<li>{AnimatedText({ text: 'To prepare proposals and estimates' })}</li>
							</ul>

							<p className="mt-4 mb-3">{AnimatedText({ text: 'Access controls:' })}</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Access is limited to team members involved in client communications' })}</li>
								<li>{AnimatedText({ text: 'We do not intentionally request or collect sensitive categories of personal data through the Website' })}</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* Reporting a security issue */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className="h-full w-full"
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Reporting a security issue
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({
									text:
										'If you believe you found a security issue on the Website, please contact us and include as much detail as possible (steps to reproduce, affected URL, and any relevant screenshots).',
								})}
							</p>

							<dl className="grid gap-y-2">
								<div className="flex flex-wrap gap-x-2">
									<dt className="font-medium text-black/70">Email:</dt>
									<dd>contact@sargas.io</dd>
								</div>
							</dl>

							<p className="mt-3">
								{AnimatedText({
									text: 'We will acknowledge receipt and investigate within a reasonable timeframe.',
								})}
							</p>
						</div>
					</section>
				</motion.div>
			</WorkLayout>
		</>
	)
}