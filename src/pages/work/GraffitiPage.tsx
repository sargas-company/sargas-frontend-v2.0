import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Services from '../../assets/case_studies/recent/service.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

import firstImg from '../../assets/case_studies/recent/sophia/1a.png'
import secondImg from '../../assets/case_studies/recent/sophia/2a.png'
import thirdImg from '../../assets/case_studies/recent/sophia/3a.png'
import forthImg from '../../assets/case_studies/recent/sophia/4a.png'

import netlify from "../../assets/tech/netlify-svgrepo-com.svg";
import javascript from "../../assets/tech/javascript.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import nestjs from "../../assets/tech/nestjs.svg";
import nextJs from "../../assets/tech/nextjs.svg";
import n8n from "../../assets/tech/n8n.svg";
import nginx from "../../assets/tech/nginx.svg";
import reactjs from "../../assets/tech/reactjs.svg";
import mysql from "../../assets/tech/mysql.svg";
import postgresql from "../../assets/tech/postgresql.svg";
import mongo from "../../assets/tech/mongodb.svg";

const project_details = {
	main: {
		name: 'Graffiti Chronicles',
		img: Sophia,
		sections: [
			{ title: 'Platform', items: ['Web + Admin(i18n)'] },
			{ title: 'Deliverables', items: ['Website build', 'Admin panel (CMS)', 'i18n / Translations setup', 'Deployment'] },
			{ title: 'Integrations', items: ['Sanity', 'Auth', 'Storage', 'S3 Bucket'] },
			{ title: 'Team', items: ['1 designer', '1 engineer'] },
			{ title: 'Timeline', items: ['MVP: 2 weeks'] },
		],
	},
	details: [
		{
			img: firstImg
		},
		{
			img: thirdImg
		},
		{
			img: forthImg
		},
		{
			img: secondImg
		},
	],
}

const content = [
	'Graffiti',
	'Chronicles',
	'is',
	'an',
	'immersive',
	'online',
	'exhibition',
	'that',
	'lets',
	'you',
	'explore',
	'the',
	'walls',
	'of',
	'St.',
	'Sophia',
	'Cathedral',
	'in',
	'Kyiv',
	'through',
	'digitized',
	'inscriptions',
	'-',
	'a',
	'guided,',
	'interactive',
	'experience',
	'with',
	'curated',
	'stories',
	'and',
	'context.',
]

const technologies = [
	{
		src: reactjs,
		alt: 'reactjs',
		width: '50px',
	},
	{
		src: nextJs,
		alt: 'nextJs',
		width: '50px',
	},
	{
		src: netlify,
		alt: 'netlify',
		width: '50px'
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
		src: mysql,
		alt: 'mysql',
		width: '50px',
	},
	{
		src: nestjs,
		alt: 'nestjs',
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
	}
]

const benefits = [
	{
		title: 'Local Services App',
		chips: ['React Native', 'Marketplace', 'Maps', 'Mobile App'],
		link: '/work/local-service',
		img: Services,
	},
	{
		title: 'AI Bots Builder',
		chips: ['AI Agents', 'Automation', 'SaaS', 'Integrations'],
		link: '/work/ai-bots',
		img: Ai4u,
	},
]

export const GraffitiPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='Graffiti Chronicles'
					content={content}
					technologies={technologies}
					sections={project_details.main.sections}
					chips={['Cultural Heritage', 'Digital Exhibition', 'Web Development']}
					href='https://graffiti-chronicles.shadowsproject.org'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
