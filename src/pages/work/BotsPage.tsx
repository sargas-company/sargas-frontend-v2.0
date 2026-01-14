import { PageHero } from '../../components/work/PageHero'
import { WorkLayout } from '../../components/work/WorkLayout'
import { ProjectDetails } from '../../components/work/ProjectDetails'
import { ProjectsLinks } from '../../components/work/ProjecsLinks'

import Ai4u from '../../assets/case_studies/recent/ai4u.png'
import Webild from '../../assets/case_studies/recent/webild.png'
import Sophia from '../../assets/case_studies/recent/sophia.png'

import firstImg from '../../assets/case_studies/recent/bots/1.png'
import secondImg from '../../assets/case_studies/recent/bots/2.png'
import thirdImg from '../../assets/case_studies/recent/bots/3.png'

import aws from "../../assets/tech/aws.svg";
import docker from "../../assets/tech/docker.svg";
import javascript from "../../assets/tech/javascript.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import nestjs from "../../assets/tech/nestjs.svg";
import nextJs from "../../assets/tech/nextjs.svg";
import n8n from "../../assets/tech/n8n.svg";
import nginx from "../../assets/tech/nginx.svg";
import reactjs from "../../assets/tech/reactjs.svg";
import postgresql from "../../assets/tech/postgresql.svg";
import mongo from "../../assets/tech/mongodb.svg";

const project_details = {
	main: {
		name: 'AI Bots Builder',
		img: Ai4u,
		sections: [
			{ title: 'Platform', items: ['Web + Admin', 'API / Webhooks'] },
			{ title: 'Deliverables', items: ['Bot/Agent builder', 'Channel connectors (WA/IG/FB/Web)', 'Live dashboard', 'Knowledge base + routing', 'Billing + access control'] },
			{ title: 'Integrations', items: ['WhatsApp Business', 'Instagram DM', 'Facebook Messenger', 'Website widget', 'Payments (Israeli PSP)'] },
			{ title: 'Team', items: ['1 Team Lead', '1 designer', '2 engineers',  '1 AI/automation engineer'] },
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
	'AI4U',
	'is',
	'a',
	'platform',
	'for',
	'creating',
	'and',
	'managing',
	'AI',
	'agents',
	'for',
	'your',
	'business',
	'in',
	'one',
	'click',
	'-',
	'from',
	'ready-made',
	'roles',
	'to',
	'a',
	'live',
	'agent',
	'dashboard.',
]

const technologies = [
	{
		src: nextJs,
		alt: 'nextJs',
		width: '50px',
	},
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
		src: aws,
		alt: 'aws',
		width: '50px',
	},
	{
		src: nginx,
		alt: 'nginx',
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

export const BotsPage = () => {
	return (
		<>
			<WorkLayout>
				<PageHero
					title='AI Bots Builder'
					content={content}
					technologies={technologies}
					sections={project_details.main.sections}
					chips={['AI Agents', 'Automation', 'SaaS', 'Integrations']}
					href='https://ai4u.linkaiil.com'
				/>
				<ProjectDetails {...project_details} />
				<ProjectsLinks links={benefits} />
			</WorkLayout>
		</>
	)
}
