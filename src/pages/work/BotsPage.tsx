import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

const project_details = {
	main: {
		name: 'AI Bots Builder',
		img: Ai4u,
		sections: [
			{
				title: 'Services',
				items: ['Product Design,', 'Strategy, Branding', 'No-Code', 'Development'],
			},
			{ title: 'Stack', items: ['Framer, Figma,', 'Adove CC'] },
			{ title: 'Timeline', items: ['4 Weeks'] },
		],
	},
	details: [
		{
			img: Ai4u,
			title: 'Hero Section',
		},
		{
			img: Ai4u,
			title: 'Introduction Section',
		},
		{
			img: Ai4u,
			title: 'Features Section',
		},
	],
}

const content = [
	'Nitro',
	'is',
	'a',
	'premium',
	'Framer',
	'template',
	'for',
	'designers',
	'with',
	'an',
	'advanced',
	'layout',
	'and',
	'a',
	'ton',
	'of',
	'little',
	'big',
	'details',
	'to',
	'catch',
	'the',
	'visitor.',
	'With',
	'more',
	'than',
	'200',
	'copies',
	'sold,',
	'it',
	'remains',
	'one',
	'of',
	'the',
	'most',
	'successful',
	'templates',
	'on',
	'a',
	'market.',
]

const benefits = [
	{
		title: 'Webild',
		chips: ['AI', 'SaaS', 'Prompt-to-Website', 'Builder'],
		link: '/work/webild',
		img: Webild,
	},
	{
		title: 'Graffiti Chronicles',
		chips: ['Cultural Heritage', 'Digital Exhibition'],
		link: '/work/graffiti',
		img: Sophia,
	},
]

export const BotsPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='AI Bots Builder'
					content={content}
					chips={['AI Agents', 'Automation', 'SaaS', 'Integrations']}
					href='https://ai4u.linkaiil.com'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
