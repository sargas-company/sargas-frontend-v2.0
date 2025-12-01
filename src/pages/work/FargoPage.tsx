import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'
import StridaImg from '../../assets/Strida.avif'
import BravoImg from '../../assets/Bravo.avif'
import Fargo_01 from '../../assets/Fargo_01.avif'
import Fargo_02 from '../../assets/Fargo_02.avif'
import Fargo_03 from '../../assets/Fargo_03.avif'
import FargoMainImg from '../../assets/Fargo.avif'

const project_details = {
	main: {
		name: 'Fargo',
		img: FargoMainImg,
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
			img: Fargo_01,
			title: 'Hero Section',
		},
		{
			img: Fargo_02,
			title: 'Introduction Section',
		},
		{
			img: Fargo_03,
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
		title: 'Strida',
		chips: ['portfolio', 'sidebar'],
		link: '/work/strida',
		img: StridaImg,
	},
	{
		title: 'Bravo',
		chips: ['UI/UX', 'App'],
		link: '/work/bravo',
		img: BravoImg,
	},
]

export const FargoPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero title='Bravo' content={content} chips={['SaaS', 'Web']} />
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
