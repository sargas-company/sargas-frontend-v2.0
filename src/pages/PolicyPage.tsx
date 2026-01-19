import { WorkLayout } from '../components/work/WorkLayout'
import { motion } from 'framer-motion'

export const PolicyPage = () => {
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
							Privacy Policy
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

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text:
										'This Privacy Policy explains how Sargas Agency OÜ (“Sargas”, “we”, “us”) processes personal data when you visit sargas.io (the “Website”) and when you book a call with us via Calendly.',
								})}
							</p>
							<p>
								{AnimatedText({
									text:
										'We do not run analytics or marketing tracking on the Website. We use only strictly necessary cookies required for the Website to function properly and securely.',
								})}
							</p>
						</div>
					</section>
				</motion.div>

				{/* 1) Data Controller */}
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
							Data Controller (who is responsible)
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<dl className="grid gap-y-2">
								<div className="flex flex-wrap gap-x-2">
									<dt className="font-medium text-black/70">Controller:</dt>
									<dd>Sargas Agency OÜ</dd>
								</div>
								<div className="flex flex-wrap gap-x-2">
									<dt className="font-medium text-black/70">Country of registration:</dt>
									<dd>Estonia</dd>
								</div>
								<div className="flex flex-wrap gap-x-2">
									<dt className="font-medium text-black/70">Registered address:</dt>
									<dd>Narva mnt 7, 10117 Tallinn, Estonia</dd>
								</div>
								<div className="flex flex-wrap gap-x-2">
									<dt className="font-medium text-black/70">Contact email:</dt>
									<dd>contact@sargas.io</dd>
								</div>
							</dl>
						</div>

					</section>
				</motion.div>

				{/* 2) What data we process */}
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
							What data we process
						</h2>

						<div className="mt-4 space-y-6 text-[18px] leading-[1.75] text-black/60">
							{/* A */}
							<div>
								<p className="font-medium text-black/70">
									{AnimatedText({ text: 'A) Website technical data (logs)' })}
								</p>

								<p className="mt-2">
									{AnimatedText({
										text:
											'Like most websites, our hosting and security systems may process basic technical data necessary to operate and protect the Website.',
									})}
								</p>

								<ul className="mt-3 list-disc space-y-2 pl-5">
									<li>{AnimatedText({ text: 'IP address' })}</li>
									<li>{AnimatedText({ text: 'Browser type, device and operating system information' })}</li>
									<li>{AnimatedText({ text: 'Timestamps and pages requested' })}</li>
									<li>{AnimatedText({ text: 'Technical and security logs (e.g., to prevent abuse and diagnose errors)' })}</li>
								</ul>

								<p className="mt-3">
									{AnimatedText({
										text: 'We do not use this data to directly identify visitors.',
									})}
								</p>
							</div>

							{/* B */}
							<div>
								<p className="font-medium text-black/70">
									{AnimatedText({ text: 'B) Call booking data (Calendly)' })}
								</p>

								<p className="mt-2">
									{AnimatedText({
										text:
											'When you book a call via Calendly, you submit information in Calendly. Calendly processes this information under its own privacy policy and shares the booking details with us so we can contact you and hold the meeting.',
									})}
								</p>

								<ul className="mt-3 list-disc space-y-2 pl-5">
									<li>{AnimatedText({ text: 'Name' })}</li>
									<li>{AnimatedText({ text: 'Email address' })}</li>
									<li>{AnimatedText({ text: 'Meeting time' })}</li>
									<li>{AnimatedText({ text: 'Notes you choose to provide (optional)' })}</li>
								</ul>
							</div>

							{/* C */}
							<div>
								<p className="font-medium text-black/70">
									{AnimatedText({ text: 'C) Future booking/contact form (if introduced)' })}
								</p>

								<p className="mt-2">
									{AnimatedText({
										text:
											'If we introduce a booking/contact form on the Website, the form will collect only the information you submit. If our data processing changes materially, we will update this Policy.',
									})}
								</p>

								<ul className="mt-3 list-disc space-y-2 pl-5">
									<li>{AnimatedText({ text: 'Name' })}</li>
									<li>{AnimatedText({ text: 'Email address' })}</li>
									<li>{AnimatedText({ text: 'Message or request details' })}</li>
								</ul>
							</div>
						</div>
					</section>
				</motion.div>

				{/* 3) Why we process personal data */}
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
							Why we process personal data
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Schedule and conduct calls/meetings' })}</li>
								<li>{AnimatedText({ text: 'Respond to inquiries and communicate with you' })}</li>
								<li>{AnimatedText({ text: 'Prepare proposals/estimates and discuss potential cooperation' })}</li>
								<li>{AnimatedText({ text: 'Operate and secure the Website (prevent abuse, troubleshoot issues)' })}</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* 4) Legal bases */}
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
							Legal bases (GDPR/EEA)
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({ text: 'Where GDPR applies, we rely on the following legal bases:' })}
							</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>
									{AnimatedText({
										text:
											'Steps prior to entering into a contract — to handle your request and discuss potential cooperation',
									})}
								</li>
								<li>
									{AnimatedText({
										text:
											'Legitimate interests — to operate and secure the Website and manage B2B communications',
									})}
								</li>
								<li>
									{AnimatedText({
										text:
											'Legal obligation — where retention of certain records is required by law (if applicable)',
									})}
								</li>
							</ul>
						</div>
					</section>
				</motion.div>

				{/* 5) Cookies */}
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
							Cookies
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text:
										'We use strictly necessary cookies required for the Website to function properly and securely (for example, essential settings or protection against abuse). We do not use analytics or marketing cookies on the Website.',
								})}
							</p>
						</div>
					</section>
				</motion.div>

				{/* 6) Sharing */}
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
							Sharing of data (service providers)
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({
									text:
										'We may share data with service providers only to the extent necessary to operate the Website and communications, such as:',
								})}
							</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>{AnimatedText({ text: 'Hosting and infrastructure providers' })}</li>
								<li>{AnimatedText({ text: 'Email/communication tools' })}</li>
								<li>{AnimatedText({ text: 'Calendly (for call scheduling)' })}</li>
							</ul>

							<p className="mt-3">
								{AnimatedText({ text: 'We do not sell personal data.' })}
							</p>
						</div>

					</section>
				</motion.div>

				{/* 7) International transfers */}
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
							International transfers
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text:
										'Calendly and/or some infrastructure providers may process data outside the EEA. Where required, appropriate safeguards may be used to support lawful international transfers.',
								})}
							</p>
						</div>
					</section>
				</motion.div>

				{/* 8) Data retention */}
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
							Data retention
						</h2>

						<div className="mt-4 text-[18px] leading-[1.75] text-black/60">
							<p className="mb-3">
								{AnimatedText({ text: 'We keep personal data only as long as necessary:' })}
							</p>

							<ul className="list-disc space-y-2 pl-5">
								<li>
									{AnimatedText({
										text:
											'Calendly booking details and presales communications: typically up to 24 months after the last interaction',
									})}
								</li>
								<li>
									{AnimatedText({
										text: 'Website technical/security logs: typically 30–180 days',
									})}
								</li>
								<li>
									{AnimatedText({
										text:
											'Contract/accounting records: may be kept longer where required by law/accounting rules',
									})}
								</li>
							</ul>
						</div>

					</section>
				</motion.div>

				{/* 9) Your rights */}
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
							Your rights
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text:
										'Depending on your jurisdiction, you may request access, correction, or deletion of your personal data, and object to certain processing. To exercise your rights, contact us at contact@sargas.io.',
								})}
							</p>
						</div>
					</section>
				</motion.div>

				{/* 10) Updates */}
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
							Updates
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text:
										'We may update this Policy from time to time. The “Last updated” date above will indicate the latest version.',
								})}
							</p>
						</div>
					</section>
				</motion.div>
			</WorkLayout>
		</>
	)
}