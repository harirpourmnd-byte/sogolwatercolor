import { t as articles } from "./site-BeCk0QRF.js";
import { t as Route } from "./articles._slug-CHWvAhU0.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/routes/articles.$slug.tsx?tsr-split=component
function ArticleDetail() {
	const { article } = Route.useLoaderData();
	const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(WatercolorBg, {}),
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			className: "mx-auto max-w-4xl px-5 pt-10 pb-16",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/articles",
					className: "text-sm text-muted-foreground hover:text-foreground",
					children: "← همه‌ی مقالات"
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 text-xs text-autumn",
							children: [
								article.tag,
								" · ",
								article.readMin,
								" دقیقه مطالعه · ",
								article.date
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-6xl mt-3 leading-tight",
							children: article.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-lg text-muted-foreground leading-relaxed",
							children: article.excerpt
						})
					]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						scale: .97
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: 1 },
					className: "mt-10 aspect-[3/2] overflow-hidden rounded-3xl shadow-2xl paper-texture",
					children: /* @__PURE__ */ jsx("img", {
						src: article.cover,
						alt: article.title,
						width: 1200,
						height: 800,
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ jsx("article", {
					className: "prose-watercolor mt-12 space-y-6 text-lg leading-[2] text-foreground/90",
					children: article.body.map((p, i) => /* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: { delay: i * .05 },
						children: p
					}, i))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 rounded-3xl bg-card p-8 border border-border text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "display text-2xl",
							children: "نویسنده: سوگل فتحی"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "بنیان‌گذار سوگالری و مدرس نقاشی آبرنگ"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/courses",
							className: "mt-5 inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold",
							children: "دوره‌های آموزشی →"
						})
					]
				}),
				related.length > 0 && /* @__PURE__ */ jsxs("section", {
					className: "mt-20",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "display text-2xl mb-6",
						children: "مقالات مرتبط"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 gap-6",
						children: related.map((r) => /* @__PURE__ */ jsxs(Link, {
							to: "/articles/$slug",
							params: { slug: r.slug },
							className: "group block rounded-2xl overflow-hidden bg-card border border-border shadow",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[3/2] overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src: r.cover,
									alt: r.title,
									loading: "lazy",
									width: 1200,
									height: 800,
									className: "h-full w-full object-cover group-hover:scale-105 transition duration-700"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-autumn",
									children: r.tag
								}), /* @__PURE__ */ jsx("h3", {
									className: "display text-xl mt-1 group-hover:text-fuchsia-art transition",
									children: r.title
								})]
							})]
						}, r.slug))
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { ArticleDetail as component };
