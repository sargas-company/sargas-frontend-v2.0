import { AnimatePresence, motion } from 'framer-motion'
import { XIcon } from '../ui/icons/XIcon'
import { LinkedInIcon } from '../ui/icons/LinkedInIcon'
import { InstagramIcon } from '../ui/icons/InstagramIcon'

type Props = {
	open: boolean
}

const menuOptions = [
	{
		title: 'Process',
		link: '/#process',
	},
	{
		title: 'Work',
		link: '/#work',
	},
	{
		title: 'About',
		link: '/#about',
	},
	{
		title: 'Pricing',
		link: '/#pricing',
	},
	{
		title: 'FAQ',
		link: '/#faq',
	},
	{
		title: 'Contact',
		link: '/#cta',
	},
	{
		title: 'Get Template',
		link: '#',
		bold: true,
	},
]

const socials = [
	{
		link: '#',
		component: XIcon,
	},
	{
		link: '#',
		component: LinkedInIcon,
	},
	{
		link: '#',
		component: InstagramIcon,
	},
]

export const HeaderDropdown = ({ open }: Props) => (
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
					className='flex gap-4 pt-6'
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
								key={index}
								className='group flex h-11 w-11 items-center justify-center rounded-full border border-black/50 transition-colors duration-200 hover:border-black'
							>
								<Icon
									size={20}
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
