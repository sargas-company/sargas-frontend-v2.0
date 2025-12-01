import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'
import StridaImg from '../../assets/Strida.avif'
import NitroImg from '../../assets/Nitro.avif'
import BravoMainImg from '../../assets/Bravo.avif'
import Bravo_01 from '../../assets/Bravo_01.avif'
import Bravo_02 from '../../assets/Bravo_02.avif'
import Bravo_03 from '../../assets/Bravo_03.avif'

const project_details = {
	main: {
		name: 'Bravo',
		img: BravoMainImg,
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
			img: Bravo_01,
			title: 'Mobile Mockup',
		},
		{
			img: Bravo_02,
			title: 'Hero Section',
		},
		{
			img: Bravo_03,
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
		title: 'Strida',
		chips: ['portfolio', 'sidebar'],
		link: '/work/strida',
		img: StridaImg,
	},
	{
		title: 'Nitro',
		chips: ['Design System', 'Web'],
		link: '/work/nitro',
		img: NitroImg,
	},
]

export const BravoPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero title='Bravo' content={content} chips={['UI/UX', 'App']} />
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
