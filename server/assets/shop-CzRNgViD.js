import { i as paintings } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/routes/shop.tsx?tsr-split=component
function Shop() {
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
							className: "text-xs uppercase tracking-[0.3em] text-fuchsia-art",
							children: "گالری فروش"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-6xl mt-3",
							children: "تابلوهای اصیل آبرنگ"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "هر اثر، یکتا و دست‌ساز است. روی کاغذ آرشیوی فابریانو ۳۰۰ گرم، با مهر و امضای استاد سوگل فتحی."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: paintings.map((w, i) => /* @__PURE__ */ jsxs(motion.article, {
						initial: {
							opacity: 0,
							y: 50
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							delay: i % 3 * .1
						},
						className: "group",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-3xl paper-texture shadow-xl",
							children: [/* @__PURE__ */ jsx(motion.img, {
								src: w.src,
								alt: w.title,
								loading: "lazy",
								width: 800,
								height: 1024,
								className: "h-full w-full object-cover",
								whileHover: { scale: 1.06 },
								transition: { duration: 1.2 }
							}), /* @__PURE__ */ jsxs("div", {
								className: "absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs",
								children: [w.size, " سانتی‌متر"]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-xs text-autumn",
									children: w.tag
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "display text-2xl mt-1",
									children: w.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: w.desc
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "display text-xl",
										children: [
											w.price,
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-sm text-muted-foreground",
												children: "تومان"
											})
										]
									}), /* @__PURE__ */ jsx("a", {
										href: `https://wa.me/?text=سلام، علاقه‌مند به خرید تابلوی ${w.title} هستم`,
										className: "rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition",
										children: "خرید"
									})]
								})
							]
						})]
					}, w.slug))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 text-center",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/students",
						className: "text-sm hover:underline",
						children: "آثار هنرجویان را هم ببینید ←"
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { Shop as component };
