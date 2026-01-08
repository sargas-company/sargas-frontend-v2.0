import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

const project_details = {
	main: {
		name: 'Webild',
		img: Webild,
		sections: [
			{ title: 'Stack', items: ['Framer'] },
			{ title: 'Timeline', items: ['3 Weeks'] },
		],
	},
	details: [
		{
			img: Webild,
			title: 'Works catalogue',
		},
		{
			img: Webild,
			title: 'Project Page',
		},
		{
			img: Webild,
			title: 'About Page',
		},
	],
}

const content = [
	'Strida',
	'offers',
	'a',
	'smooth',
	'and',
	'powerful',
	'experience',
	'when',
	'presenting',
	'your',
	'work',
	'in',
	'a',
	'full-screen',
	'format.',
	'It',
	'combines',
	'bold',
	'Swiss',
	'typography,',
	'smooth',
	'animations,',
	'sidebar',
	'navigations,',
	'flexible',
	'CMS',
	'—',
	'everything',
	'to',
	'make',
	'your',
	'portfolio',
	'rock.',
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
					chips={['AI', 'SaaS', 'Prompt-to-Website', 'Builder']}
					href='https://webild.io'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
