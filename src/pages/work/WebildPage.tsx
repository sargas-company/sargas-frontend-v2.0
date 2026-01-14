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

import aws from "../../assets/tech/aws.svg";
import docker from "../../assets/tech/docker.svg";
import javascript from "../../assets/tech/javascript.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import nestjs from "../../assets/tech/nestjs.svg";
import nextJs from "../../assets/tech/nextjs.svg";
import n8n from "../../assets/tech/n8n.svg";
import nginx from "../../assets/tech/nginx.svg";
import reactjs from "../../assets/tech/reactjs.svg";

import mongo from "../../assets/tech/mongodb.svg";
import postgresql from "../../assets/tech/postgresql.svg";


const project_details = {
	main: {
		name: 'Webild',
		img: Webild,
		sections: [
			{ title: 'Platform', items: ['Web app', 'Admin panel'] },

			{ title: 'Deliverables', items: ['Web app', 'Admin panel', 'Production build + deployment', 'Documentation + handover'] },
			{ title: 'Integrations', items: ['AI image generation', 'Auto domain + deploy', 'N8N', 'In-browser sandbox editor'] },

			{ title: 'Team', items: ['1 Team Lead', '1 designer', '2 full-stack engineer', '1 AI/automation engineer']},
			{ title: 'Timeline', items: ['MVP: 6 weeks', 'Production polish: +3-4 weeks'] },
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

const technologies = [
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
		src: nextJs,
		alt: 'nextJs',
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
		src: reactjs,
		alt: 'reactjs',
		width: '50px',
	},
	{
		src: aws,
		alt: 'aws',
		width: '50px',
	},
	{
		src: docker,
		alt: 'docker',
		width: '50px',
	}
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
					technologies={technologies}
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
