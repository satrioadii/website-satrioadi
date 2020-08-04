export const ProjectContents = [
	{
		title: "Website for My Personal Brand",
		subtitle:
			"My own website build using Next JS and Material UI with Context API as state management",
		imageProject: "url('./img-project/project-1-overview.webp')",
		detail: {
			type: "project",
			category: "Web Development",
			description: (
				<span>
					In order to do personal branding and introduce my self as a developer,
					I decided to build a website. The first process of building this
					website is to decide the purpose and the design of the website. I want
					people to understand about what I can help with, so I designed this
					way by using Figma. This website is developed using Next JS (Support
					Server Side Rendering) and Material UI. Deployed on Nginx Server using
					Compute Engine from Google Cloud.
				</span>
			),
			imgProjectModal: 'url("./img-project/project-1-modal.webp")',
			imgOrganization: "url('./img-organization/logo-satrioadi.webp')",
			tools: [
				{
					label: "Next JS",
					color: "primary",
					link: "https://nextjs.org/",
					variant: "outlined",
				},
				{
					label: "Material UI",
					color: "primary",
					link: "https://material-ui.com/",
					variant: "outlined",
				},
				{
					label: "Context API",
					color: "secondary",
					link: "https://reactjs.org/docs/context.html",
					variant: "outlined",
				},
				{
					label: "useReducer",
					color: "secondary",
					link: "https://reactjs.org/docs/hooks-reference.html#usereducer",
					variant: "outlined",
				},
				{
					label: "Nginx",
					color: "secondary",
					link: "https://www.nginx.com/",
					variant: "outlined",
				},
				{
					label: "Google Cloud",
					color: "secondary",
					link: "https://cloud.google.com/",
					variant: "outlined",
				},
				{
					label: "HTML",
					color: "secondary",
					variant: "outlined",
				},
				{
					label: "CSS",
					color: "secondary",
					variant: "outlined",
				},
			],
			links: [
				{ label: "github", color: "secondary", links: "https://github.com/" },
			],
		},
	},
];
