import { r as courses, t as articles } from "./site-BeCk0QRF.js";
import { t as Route$8 } from "./articles._slug-CHWvAhU0.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DHt0VKXQ.css";
//#endregion
//#region src/lib/lovable-error-reporter.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "display text-7xl font-bold watercolor-text",
					children: "۴۰۴"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "صفحه پیدا نشد"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "صفحه‌ای که دنبالش بودید موجود نیست یا منتقل شده."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
						children: "بازگشت به خانه"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold text-foreground",
					children: "صفحه بارگذاری نشد"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
						children: "تلاش دوباره"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-full border border-input bg-background px-5 py-2.5 text-sm",
						children: "خانه"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#5a2347"
			},
			{ title: "سوگالری | گالری آبرنگ سوگل فتحی" },
			{
				name: "description",
				content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ."
			},
			{
				name: "keywords",
				content: "آبرنگ، نقاشی آبرنگ، آموزش آبرنگ، سوگل فتحی، سوگالری، تابلو آبرنگ، فروش تابلو، دوره آبرنگ، گالری هنر"
			},
			{
				name: "author",
				content: "سوگل فتحی"
			},
			{
				property: "og:site_name",
				content: "سوگالری"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "fa_IR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "سوگالری | گالری آبرنگ سوگل فتحی"
			},
			{
				name: "twitter:title",
				content: "سوگالری | گالری آبرنگ سوگل فتحی"
			},
			{
				property: "og:description",
				content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ."
			},
			{
				name: "twitter:description",
				content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HPr4vKbW9uhmk5HEOerpLsMW3Pu2/social-images/social-1781221798553-file_00000000f6a071f48be8aa7b71f92359.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HPr4vKbW9uhmk5HEOerpLsMW3Pu2/social-images/social-1781221798553-file_00000000f6a071f48be8aa7b71f92359.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Vazirmatn:wght@300;400;600;800&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "سوگالری",
				alternateName: "Sogallery",
				description: "گالری آبرنگ سوگل فتحی — فروش آثار اصیل، دوره‌های آموزشی و مقالات نقاشی آبرنگ.",
				founder: {
					"@type": "Person",
					name: "سوگل فتحی"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "fa",
		dir: "rtl",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/students.tsx
var $$splitComponentImporter$5 = () => import("./students-BFlXj_S1.js");
var Route$6 = createFileRoute("/students")({
	head: () => ({
		meta: [
			{ title: "آثار هنرجویان | سوگالری" },
			{
				name: "description",
				content: "گالری آثار هنرجویان آتلیه‌ی آبرنگ سوگل فتحی. حمایت از هنرمندان جوان با خرید آثارشان."
			},
			{
				property: "og:title",
				content: "آثار هنرجویان آبرنگ | سوگالری"
			},
			{
				property: "og:description",
				content: "حمایت از هنرجویان آبرنگ سوگالری با خرید آثارشان."
			},
			{
				property: "og:url",
				content: "/students"
			}
		],
		links: [{
			rel: "canonical",
			href: "/students"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/shop",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/students",
			priority: "0.8",
			changefreq: "weekly"
		},
		{
			path: "/courses",
			priority: "0.9",
			changefreq: "monthly"
		},
		{
			path: "/articles",
			priority: "0.8",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.6",
			changefreq: "monthly"
		}
	];
	const articlePaths = articles.map((a) => ({
		path: `/articles/${a.slug}`,
		priority: "0.7",
		changefreq: "monthly"
	}));
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticPaths, ...articlePaths].map((e) => [
		`  <url>`,
		`    <loc>${BASE_URL}${e.path}</loc>`,
		`    <changefreq>${e.changefreq}</changefreq>`,
		`    <priority>${e.priority}</priority>`,
		`  </url>`
	].join("\n")).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/shop.tsx
var $$splitComponentImporter$4 = () => import("./shop-CzRNgViD.js");
var Route$4 = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "فروش تابلو آبرنگ | سوگالری" },
			{
				name: "description",
				content: "فروش تابلوهای اصیل آبرنگ سوگل فتحی. آثار اورجینال روی کاغذ فابریانو و آرشز با قیمت مستقیم از آتلیه."
			},
			{
				property: "og:title",
				content: "فروش تابلو آبرنگ | سوگالری"
			},
			{
				property: "og:description",
				content: "خرید تابلوهای اصیل آبرنگ سوگل فتحی، مستقیم از آتلیه."
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/courses.tsx
var $$splitComponentImporter$3 = () => import("./courses-B6Z7cBCp.js");
var Route$3 = createFileRoute("/courses")({
	head: () => ({
		meta: [
			{ title: "دوره‌های آموزش آبرنگ | سوگالری" },
			{
				name: "description",
				content: "دوره‌های آموزش نقاشی آبرنگ سوگل فتحی، از مقدماتی تا پیشرفته. ویدیوهای آموزشی، کارگاه حضوری و پشتیبانی اختصاصی."
			},
			{
				property: "og:title",
				content: "دوره‌های آموزش آبرنگ | سوگالری"
			},
			{
				property: "og:description",
				content: "ثبت‌نام در دوره‌های آبرنگ سوگل فتحی — از صفر تا تخصصی."
			},
			{
				property: "og:url",
				content: "/courses"
			}
		],
		links: [{
			rel: "canonical",
			href: "/courses"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: courses.map((c, i) => ({
					"@type": "Course",
					position: i + 1,
					name: c.title,
					description: c.desc,
					provider: {
						"@type": "Organization",
						name: "سوگالری"
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/articles.tsx
var $$splitComponentImporter$2 = () => import("./articles-BBie9yei.js");
var Route$2 = createFileRoute("/articles")({
	head: () => ({
		meta: [
			{ title: "مقالات آموزش آبرنگ | سوگالری" },
			{
				name: "description",
				content: "مقالات تخصصی آموزش نقاشی آبرنگ، رنگ‌شناسی، انتخاب کاغذ و قلم‌مو و تکنیک‌های پیشرفته به قلم سوگل فتحی."
			},
			{
				name: "keywords",
				content: "آموزش آبرنگ، مقاله آبرنگ، رنگ‌شناسی، کاغذ آبرنگ، تکنیک آبرنگ"
			},
			{
				property: "og:title",
				content: "مقالات آموزش آبرنگ | سوگالری"
			},
			{
				property: "og:description",
				content: "آموزش‌های تخصصی نقاشی آبرنگ به قلم سوگل فتحی."
			},
			{
				property: "og:url",
				content: "/articles"
			}
		],
		links: [{
			rel: "canonical",
			href: "/articles"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Blog",
				name: "وبلاگ سوگالری",
				description: "مقالات تخصصی آموزش نقاشی آبرنگ",
				blogPost: articles.map((a) => ({
					"@type": "BlogPosting",
					headline: a.title,
					description: a.excerpt,
					url: `/articles/${a.slug}`,
					datePublished: a.date,
					author: {
						"@type": "Person",
						name: "سوگل فتحی"
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-BRp9jdk0.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "درباره سوگل فتحی | سوگالری" },
			{
				name: "description",
				content: "سوگل فتحی، هنرمند و مدرس آبرنگ، بنیان‌گذار سوگالری. آشنایی با سفر هنری و فلسفه‌ی آموزش او."
			},
			{
				property: "og:title",
				content: "درباره سوگل فتحی | سوگالری"
			},
			{
				property: "og:description",
				content: "سفر هنری استاد سوگل فتحی، هنرمند آبرنگ ایرانی."
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:image",
				content: ""
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DNf9zwIE.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "سوگالری | گالری آبرنگ سوگل فتحی" },
			{
				name: "description",
				content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلو، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی."
			},
			{
				property: "og:title",
				content: "سوگالری | گالری آبرنگ سوگل فتحی"
			},
			{
				property: "og:description",
				content: "گالری آبرنگ سوگل فتحی — فروش آثار اصیل و دوره‌های حرفه‌ای."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var StudentsRoute = Route$6.update({
	id: "/students",
	path: "/students",
	getParentRoute: () => Route$7
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var ShopRoute = Route$4.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$7
});
var CoursesRoute = Route$3.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$7
});
var ArticlesRoute = Route$2.update({
	id: "/articles",
	path: "/articles",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var ArticlesRouteChildren = { ArticlesSlugRoute: Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArticlesRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ArticlesRoute: ArticlesRoute._addFileChildren(ArticlesRouteChildren),
	CoursesRoute,
	ShopRoute,
	SitemapDotxmlRoute,
	StudentsRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
