import { t as articles } from "./site-BeCk0QRF.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/articles.$slug.tsx
var $$splitComponentImporter = () => import("./articles._slug-B0K40mNY.js");
var $$splitErrorComponentImporter = () => import("./articles._slug-Bs-OevNJ.js");
var $$splitNotFoundComponentImporter = () => import("./articles._slug-CpIet_Ah.js");
var Route = createFileRoute("/articles/$slug")({
	loader: ({ params }) => {
		const article = articles.find((a) => a.slug === params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData, params }) => {
		const a = loaderData?.article;
		if (!a) return { meta: [{ title: "مقاله یافت نشد | سوگالری" }] };
		return {
			meta: [
				{ title: `${a.title} | سوگالری` },
				{
					name: "description",
					content: a.excerpt
				},
				{
					name: "keywords",
					content: `${a.tag}, آبرنگ, سوگل فتحی, آموزش نقاشی`
				},
				{
					property: "og:title",
					content: a.title
				},
				{
					property: "og:description",
					content: a.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:image",
					content: a.cover
				},
				{
					property: "og:url",
					content: `/articles/${params.slug}`
				},
				{
					property: "article:author",
					content: "سوگل فتحی"
				},
				{
					property: "article:published_time",
					content: a.date
				},
				{
					name: "twitter:image",
					content: a.cover
				}
			],
			links: [{
				rel: "canonical",
				href: `/articles/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: a.title,
					description: a.excerpt,
					image: a.cover,
					datePublished: a.date,
					author: {
						"@type": "Person",
						name: "سوگل فتحی"
					},
					publisher: {
						"@type": "Organization",
						name: "سوگالری"
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
