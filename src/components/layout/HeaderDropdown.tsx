import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconAt } from '../ui/icons/IconAt.tsx'
import { WAIcon } from '../ui/icons/WAIcon.tsx'
import { TGIcon } from '../ui/icons/TGIcon.tsx'
import { LnIcon } from '../ui/icons/lnIcon.tsx'

type Props = {
	open: boolean
}

const menuOptions = [
	{
		title: 'About',
		link: '/#about',
		bold: false,
	},
	{
		title: 'Process',
		link: '/#process',
		bold: false,
	},
	{
		title: 'Case Studies',
		link: '/#work',
		bold: false,
	},
	{
		title: 'Pricing',
		link: '/#pricing',
		bold: false,
	},
	{
		title: 'FAQ',
		link: '/#faq',
		bold: false,
	},
	{
		title: 'Contact',
		link: '/#cta',
		bold: false,
	},
]

const socials = [
	{
		link: 'https://ua.linkedin.com/in/vadym-chervonchenko-118053167',
		component: LnIcon,
	},
	{
		link: 'https://wa.me/380993013514',
		component: WAIcon,
	},
	{
		link: 'https://telegram.me/vadym_chervonchenko',
		component: TGIcon,
	},
	{
		link: 'mailto:contact@sargas.io',
		component: IconAt,
	},
]

export const HeaderDropdown = ({ open }: Props) => {
	const navigate = useNavigate()
	const location = useLocation()

	const scrollToId = (id: string) => {
		requestAnimationFrame(() => {
			const el = document.getElementById(id)
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		})
	}

	const isMailto = (href: string) => /^\s*mailto:/i.test(String(href ?? ''))

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					key='menu'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.18, ease: 'easeOut' }}
					className='absolute right-0 z-30 mt-3 flex w-[320px] flex-col gap-3 rounded-2xl rounded-[24px_8px_24px_24px] bg-white p-[50px]'
				>
					{menuOptions.map((opt, index) => {
						const isAnchor = opt.link.startsWith('#') || opt.link.startsWith('/#')
						const targetId = isAnchor ? opt.link.replace('/#', '').replace('#', '') : null

						return (
							<motion.p
								key={opt.title}
								initial={{ x: -24, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									duration: 0.25,
									ease: 'easeOut',
									delay: 0.1 * index,
								}}
							>
								<a
									href={opt.link}
									onClick={(e) => {
										if (!targetId) return
										e.preventDefault()
										if (location.pathname === '/') {
											scrollToId(targetId)
										} else {
											navigate(`/#${targetId}`)
											setTimeout(() => scrollToId(targetId), 80)
										}
									}}
									className={`text-left text-xl transition-all duration-300 ease-in-out hover:text-black/50 ${
										opt.bold ? 'font-medium text-[#ff3700] hover:!text-black' : ''
									}`}
								>
									{opt.title}
								</a>
							</motion.p>
						)
					})}

					<motion.div
						className='flex gap-4'
						initial={{ y: 24, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.25,
							ease: 'easeOut',
							delay: 0.4,
						}}
					>
						<p className='mt-10'>Let’s chat. We’re online!</p>
					</motion.div>

					<motion.div
						className='flex gap-4'
						initial={{ y: 24, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.25,
							ease: 'easeOut',
							delay: 0.4,
						}}
					>
						{socials.map((item, index) => {
							const Icon = item.component

							return (
								<a
									href={item.link}
									target={!isMailto(item.link) ? '_blank' : undefined}
									rel='noreferrer'
									key={index}
									className='group flex h-11 w-11 items-center justify-center rounded-full border border-black/50 transition-colors duration-200 hover:border-black'
								>
									<Icon
										size={20}
										color='#000'
										className='transition-transform duration-200 group-hover:scale-110'
									/>
								</a>
							)
						})}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
