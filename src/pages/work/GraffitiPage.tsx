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
			{ title: 'Platform', items: ['Web + Admin'] },
			{ title: 'Deliverables', items: ['UI kit', 'Build', 'Handover'] },
			{ title: 'Integrations', items: ['n8n', 'Auth', 'Storage'] },
			{ title: 'Team', items: ['1 designer', '2 engineers'] },
			{ title: 'Timeline', items: ['3 weeks'] },
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
	'Graffiti',
	'Chronicles',
	'is',
	'an',
	'immersive',
	'online',
	'exhibition',
	'that',
	'brings',
	'the',
	'graffiti',
	'of',
	'St',
	'Sophia',
	'Cathedral',
	'in',
	'Kyiv',
	'to',
	'life',
	'-',
	'turning',
	'digitized',
	'inscriptions',
	'into',
	'an',
	'interactive',
	'story.',
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
					sections={project_details.main.sections}
					chips={['Cultural Heritage', 'Digital Exhibition', 'Web Development']}
					href='https://graffiti-chronicles.shadowsproject.org'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
