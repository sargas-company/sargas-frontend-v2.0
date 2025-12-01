import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'
import StridaMainImg from '../../assets/Strida.avif'
import Strida_01 from '../../assets/Strida_01.avif'
import Strida_02 from '../../assets/Strida_02.avif'
import Strida_03 from '../../assets/Strida_03.avif'
import NitroImg from '../../assets/Nitro.avif'
import BravoImg from '../../assets/Bravo.avif'

const project_details = {
	main: {
		name: 'Strida',
		img: StridaMainImg,
		sections: [
			{ title: 'Stack', items: ['Framer'] },
			{ title: 'Timeline', items: ['3 Weeks'] },
		],
	},
	details: [
		{
			img: Strida_01,
			title: 'Works catalogue',
		},
		{
			img: Strida_02,
			title: 'Project Page',
		},
		{
			img: Strida_03,
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
		title: 'Bravo',
		chips: ['UI/UX', 'App'],
		link: '/work/bravo',
		img: BravoImg,
	},
	{
		title: 'Nitro',
		chips: ['Design System', 'Web'],
		link: '/work/nitro',
		img: NitroImg,
	},
]

export const StridaPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero title='Strida' content={content} chips={['portfolio', 'sidebar']} />
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
