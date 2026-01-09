import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

import firstImg from '../../assets/case_studies/recent/local_services/1.png'
import secondImg from '../../assets/case_studies/recent/local_services/2.png'
import thirdImg from '../../assets/case_studies/recent/local_services/3.png'

const project_details = {
	main: {
		name: 'Local Services App',
		img: Services,
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
	'A',
	'mobile',
	'platform',
	'for',
	'local',
	'services',
	'where',
	'businesses',
	'create',
	'profiles,',
	'publish',
	'offers,',
	'and',
	'manage',
	'appointments,',
	'while',
	'customers',
	'discover',
	'providers',
	'and',
	'book',
	'in',
	'seconds',
	'-',
	'all',
	'in',
	'one',
	'place.',
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

export const LocalServicePage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='Local Services App'
					content={content}
					sections={project_details.main.sections}
					chips={['React Native', 'Marketplace', 'Maps', 'Mobile App']}
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
