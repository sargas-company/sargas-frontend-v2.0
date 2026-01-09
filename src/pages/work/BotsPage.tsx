import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

import firstImg from '../../assets/case_studies/recent/bots/1.png'
import secondImg from '../../assets/case_studies/recent/bots/2.png'
import thirdImg from '../../assets/case_studies/recent/bots/3.png'

const project_details = {
	main: {
		name: 'AI Bots Builder',
		img: Ai4u,
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
			img: firstImg
		},
		{
			img: secondImg
		},
		{
			img: thirdImg
		},
	],
}

const content = [
	'AI4U',
	'is',
	'a',
	'platform',
	'for',
	'creating',
	'and',
	'managing',
	'AI',
	'agents',
	'for',
	'your',
	'business',
	'in',
	'one',
	'click',
	'-',
	'from',
	'ready-made',
	'roles',
	'to',
	'a',
	'live',
	'agent',
	'dashboard.',
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
					sections={project_details.main.sections}
					chips={['AI Agents', 'Automation', 'SaaS', 'Integrations']}
					href='https://ai4u.linkaiil.com'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
