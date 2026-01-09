import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

import firstImg from '../../assets/case_studies/recent/webild/1.png'
import secondImg from '../../assets/case_studies/recent/webild/2.png'
import thirdImg from '../../assets/case_studies/recent/webild/3.png'
import forthImg from '../../assets/case_studies/recent/webild/4.png'



const project_details = {
	main: {
		name: 'Webild',
		img: Webild,
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
			img: thirdImg,
		},
		{
			img: forthImg,
		},
		{
			img: secondImg,
		},
		{
			img: firstImg,
		},
	],
}

const content = [
	'Webild',
	'is',
	'a',
	'prompt-to-website',
	'builder',
	'that',
	'turns',
	'raw',
	'ideas',
	'into',
	'production-ready',
	'pages.',
	'From',
	'layout',
	'and',
	'typography',
	'to',
	'responsive',
	'sections',
	'and',
	'clean',
	'interactions',
	'-',
	'you',
	'describe',
	'the',
	'vibe,',
	'we',
	'ship',
	'the',
	'site.',
]

const benefits = [
	{
		title: 'Graffiti Chronicles',
		chips: ['Cultural Heritage', 'Digital Exhibition'],
		link: '/work/graffiti',
		img: Sophia,
	},
	{
		title: 'Local Services App',
		chips: ['React Native', 'Marketplace', 'Maps', 'Mobile App'],
		link: '/work/local-service',
		img: Services,
	},
]

export const WebildPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='Webild'
					content={content}
					sections={project_details.main.sections}
					chips={['AI', 'SaaS', 'Prompt-to-Website', 'Builder']}
					href='https://webild.io'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
