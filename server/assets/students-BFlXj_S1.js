import { a as studentWorks } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/routes/students.tsx?tsr-split=component
function Students() {
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
							children: "پرورش‌یافتگان سوگالری"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-6xl mt-3",
							children: "آثار هنرجویان"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "هر تابلوی این بخش، نخستین گام‌های یک هنرمند جوان است. با خرید این آثار، از مسیر هنری آنها حمایت می‌کنید."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: studentWorks.map((s, i) => /* @__PURE__ */ jsxs(motion.article, {
						initial: {
							opacity: 0,
							y: 50
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .7,
							delay: i * .1
						},
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "relative aspect-[4/5] overflow-hidden rounded-3xl paper-texture shadow-xl",
								children: [/* @__PURE__ */ jsx(motion.img, {
									src: s.src,
									alt: s.title,
									loading: "lazy",
									width: 800,
									height: 1024,
									className: "h-full w-full object-cover",
									whileHover: { scale: 1.06 },
									transition: { duration: 1.2 }
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute top-3 right-3 rounded-full bg-autumn/90 text-white px-3 py-1 text-xs font-semibold",
									children: "هنرجو"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-end",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "display text-2xl",
										children: s.title
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-sm text-muted-foreground mt-1",
										children: [
											s.student,
											" · ",
											s.level
										]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "display text-lg shrink-0",
									children: [s.price, " ت"]
								})]
							}),
							/* @__PURE__ */ jsx("a", {
								href: `https://wa.me/?text=علاقه‌مند به خرید اثر هنرجو: ${s.title}`,
								className: "mt-4 block text-center rounded-full bg-foreground text-background py-2.5 text-sm font-semibold",
								children: "خرید و حمایت"
							})
						]
					}, s.slug))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 max-w-2xl mx-auto rounded-3xl bg-card p-8 text-center border border-border",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "display text-2xl",
							children: "هنرجوی سوگالری هستی؟"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: "آثارت را برای فروش در گالری ارسال کن."
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/courses",
							className: "inline-block mt-5 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold",
							children: "ثبت‌نام در دوره‌ها"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { Students as component };
