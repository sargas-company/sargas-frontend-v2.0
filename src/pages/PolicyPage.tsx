import { WorkLayout } from '../components/work/WorkLayout'
import { motion } from 'framer-motion'

export const PolicyPage = () => {
	type AnimatedTextProps = {
		text: string
	}

	function AnimatedText({
			  text
		  }: AnimatedTextProps) {
		return text
	}

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
					className='h-full w-full'
				>
					<header className="mb-5 border-b border-black/10 pb-4">
						<h1 className="text-balance text-[44px] font-semibold tracking-[-0.04em] text-black sm:text-[56px]">
							Privacy Policy
						</h1>
						<p className="mt-3 leading-relaxed text-black/55 whitespace-nowrap font-serif text-2xl italic tracking-normal">
							Last updated: July 7, 2025
						</p>
					</header>
				</motion.div>


				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold text-black">
							Privacy Policy for Sargas
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'At Sargas Agency OÜ, accessible from sargas.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Sargas Agency OÜ and how we use it.'
								})}
							</p>
							<p>
								{AnimatedText({
									text: 'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Log Files
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'Sargas Agency OÜ follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services\' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.'
								})}
							</p>

							<p>
								{AnimatedText({
									text: 'The purpose of the information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Cookies and Web Beacons
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'Like any other website, Sargas Agency OÜ uses "cookies". These cookies are used to store information including visitors\' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Privacy Policies
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'You may consult this list to find the Privacy Policy for each of the advertising partners of Sargas Agency OÜ. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Sargas Agency OÜ, which are sent directly to users\' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.'
								})}
							</p>

							<p>
								{AnimatedText({
									text: 'Note that Sargas Agency OÜ has no access to or control over these cookies that are used by third-party advertisers.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Third Party Privacy Policies
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'Sargas Agency OÜ\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.'
								})}
							</p>

							<p>
								{AnimatedText({
									text: 'You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers\' respective websites.'
								})}
							</p>

							<p>
								{AnimatedText({
									text: 'What Are Cookies?'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Children's Information
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.'
								})}
							</p>

							<p>
								{AnimatedText({
									text: 'Sargas Agency OÜ does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Online Privacy Policy Only
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Sargas Agency OÜ. This policy is not applicable to any information collected offline or via channels other than this website.'
								})}
							</p>
						</div>
					</section>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
						delay: 1,
					}}
					className='h-full w-full'
				>
					<section className="rounded-[24px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10">
						<h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
							Consent
						</h2>

						<div className="mt-4 space-y-4 text-[18px] leading-[1.75] text-black/60">
							<p>
								{AnimatedText({
									text: 'By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.'
								})}
							</p>
						</div>
					</section>
				</motion.div>
			</WorkLayout>
		</>
	)
}
