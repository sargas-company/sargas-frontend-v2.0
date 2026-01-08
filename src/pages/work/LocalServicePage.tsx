import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Services from '../../assets/case_studies/recent/service.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

const project_details = {
	main: {
		name: 'Local Services App',
		img: Services,
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
			img: Services,
			title: 'Dynamic Project Slider',
		},
		{
			img: Services,
			title: 'Mobile Mockup Visual',
		},
		{
			img: Services,
			title: 'About Page',
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

export const LocalServicePage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='Local Services App'
					content={content}
					chips={['React Native', 'Marketplace', 'Maps', 'Mobile App']}
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
