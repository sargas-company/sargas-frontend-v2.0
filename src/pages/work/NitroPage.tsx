import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'
import StridaImg from '../../assets/Strida.avif'
import NitroMainImg from '../../assets/Nitro.avif'
import BravoImg from '../../assets/Bravo.avif'
import Nitro_01 from '../../assets/Nitro_01.avif'
import Nitro_02 from '../../assets/Nitro_02.avif'
import Nitro_03 from '../../assets/Nitro_03.avif'

const project_details = {
	main: {
		name: 'Nitro',
		img: NitroMainImg,
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
			img: Nitro_01,
			title: 'Dynamic Project Slider',
		},
		{
			img: Nitro_02,
			title: 'Mobile Mockup Visual',
		},
		{
			img: Nitro_03,
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
		title: 'Strida',
		chips: ['portfolio', 'sidebar'],
		link: '/work/strida',
		img: StridaImg,
	},
	{
		title: 'Bravo',
		chips: ['UI/IX', 'App'],
		link: '/work/bravo',
		img: BravoImg,
	},
]

export const NitroPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero title='Nitro' content={content} chips={['Design System', 'Web']} />
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
