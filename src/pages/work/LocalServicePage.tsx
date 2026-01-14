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

import aws from "../../assets/tech/aws.svg";
import docker from "../../assets/tech/docker.svg";
import javascript from "../../assets/tech/javascript.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import nestjs from "../../assets/tech/nestjs.svg";
import n8n from "../../assets/tech/n8n.svg";
import nginx from "../../assets/tech/nginx.svg";
import reactjs from "../../assets/tech/reactjs.svg";
import postgresql from "../../assets/tech/postgresql.svg";
import mongo from "../../assets/tech/mongodb.svg";

const project_details = {
	main: {
		name: 'Local Services App',
		img: Services,
		sections: [
			{ title: 'Platform', items: ['Mobile App (React Native)', 'Admin Panel (Backoffice)'] },
			{ title: 'Deliverables', items: [
					'Mobile app',
					'Admin panel',
					'Staff management',
					'Booking flow',
					'Release + handover'
				] },
			{ title: 'Integrations', items: ['Maps', 'Push notifications', 'Payments', 'Storage'] },
			{ title: 'Team', items: ['1 designer', '2 engineers'] },
			{ title: 'Timeline', items: ['MVP: 6-8 weeks'] },
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

const technologies = [
	{
		src: reactjs,
		alt: 'reactjs',
		width: '50px',
	},
	{
		src: javascript,
		alt: 'javascript',
		width: '50px',
	},
	{
		src: nodejs,
		alt: 'nodejs',
		width: '50px',
	},
	{
		src: nestjs,
		alt: 'nestjs',
		width: '50px',
	},
	{
		src: postgresql,
		alt: 'postgresql',
		width: '50px',
	},
	{
		src: mongo,
		alt: 'mongo',
		width: '50px',
	},
	{
		src: docker,
		alt: 'docker',
		width: '50px',
	},
	{
		src: n8n,
		alt: 'n8n',
		width: '90px',
	},
	{
		src: nginx,
		alt: 'nginx',
		width: '50px',
	},
	{
		src: aws,
		alt: 'aws',
		width: '50px',
	}
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
					technologies={technologies}
					sections={project_details.main.sections}
					chips={['React Native', 'Marketplace', 'Maps', 'Mobile App']}
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
