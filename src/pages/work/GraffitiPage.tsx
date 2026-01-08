import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Services from '../../assets/case_studies/recent/service.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

const project_details = {
	main: {
		name: 'Graffiti Chronicles',
		img: Sophia,
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
			img: Sophia,
			title: 'Mobile Mockup',
		},
		{
			img: Sophia,
			title: 'Hero Section',
		},
		{
			img: Sophia,
			title: 'Web Page Visual',
		},
	],
}

const content = [
	'Bravo',
	'is',
	'a',
	'high-converting',
	'agency',
	'website',
	'template',
	'full',
	'of',
	'surprising',
	'and',
	'catchy',
	'details.',
	'It',
	'works',
	'well',
	'with',
	'productized',
	'services,',
	'unlimited',
	'subscriptions,',
	'and',
	'classic',
	'models.',
	'Set',
	'it',
	'up',
	'in',
	'an',
	'hour,',
	'and',
	'your',
	'own',
	'agency',
	'will',
	'be',
	'live!',
]

const benefits = [
	{
		title: 'Local Services App',
		chips: ['React Native', 'Marketplace', 'Maps', 'Mobile App'],
		link: '/work/local-service',
		img: Services,
	},
	{
		title: 'AI Bots Builder',
		chips: ['AI Agents', 'Automation', 'SaaS', 'Integrations'],
		link: '/work/ai-bots',
		img: Ai4u,
	},
]

export const GraffitiPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='Graffiti Chronicles'
					content={content}
					chips={['Cultural Heritage', 'Digital Exhibition', 'Web Development']}
					href='https://graffiti-chronicles.shadowsproject.org'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
