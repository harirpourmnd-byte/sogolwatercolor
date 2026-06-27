import { t as articles } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/routes/articles.tsx?tsr-split=component
function Articles() {
	const [feat, ...rest] = articles;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(WatercolorBg, {}),
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			className: "mx-auto max-w-7xl px-5 pt-12 pb-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.3em] text-autumn",
							children: "وبلاگ سوگالری"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-6xl mt-3",
							children: "مقالات تخصصی آبرنگ"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "راهنماها، تجربه‌ها و تکنیک‌های نقاشی آبرنگ به قلم استاد سوگل فتحی و تیم سوگالری."
						})
					]
				}),
				/* @__PURE__ */ jsxs(motion.article, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "mt-14 grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-card shadow-xl border border-border",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/articles/$slug",
						params: { slug: feat.slug },
						className: "block aspect-[4/3] md:aspect-auto overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: feat.cover,
							alt: feat.title,
							loading: "lazy",
							width: 1200,
							height: 800,
							className: "h-full w-full object-cover hover:scale-105 transition duration-700"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-8 md:p-12 flex flex-col justify-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-xs text-autumn",
								children: [
									"مقاله‌ی ویژه · ",
									feat.tag,
									" · ",
									feat.readMin,
									" دقیقه"
								]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "display text-3xl md:text-4xl mt-3",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/articles/$slug",
									params: { slug: feat.slug },
									className: "hover:text-fuchsia-art transition",
									children: feat.title
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground leading-relaxed",
								children: feat.excerpt
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/articles/$slug",
								params: { slug: feat.slug },
								className: "mt-6 inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold w-fit",
								children: "ادامه‌ی مقاله ←"
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-8 md:grid-cols-2",
					children: rest.map((a, i) => /* @__PURE__ */ jsx(motion.article, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "group",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/articles/$slug",
							params: { slug: a.slug },
							className: "block",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[3/2] overflow-hidden rounded-2xl shadow-lg",
								children: /* @__PURE__ */ jsx("img", {
									src: a.cover,
									alt: a.title,
									loading: "lazy",
									width: 1200,
									height: 800,
									className: "h-full w-full object-cover group-hover:scale-105 transition duration-700"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "text-xs text-autumn",
										children: [
											a.tag,
											" · ",
											a.readMin,
											" دقیقه · ",
											a.date
										]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "display text-2xl mt-1 group-hover:text-fuchsia-art transition",
										children: a.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground line-clamp-2",
										children: a.excerpt
									})
								]
							})]
						})
					}, a.slug))
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { Articles as component };
