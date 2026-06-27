import { r as courses } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Play } from "lucide-react";
//#region src/routes/courses.tsx?tsr-split=component
function Courses() {
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
							children: "آکادمی سوگالری"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-6xl mt-3",
							children: "دوره‌های آموزش آبرنگ"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "ویدیوهای آموزشی به همراه کارگاه‌های آنلاین و حضوری. تمام جلسات با کیفیت ۴K ضبط شده‌اند."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: courses.map((c, i) => /* @__PURE__ */ jsxs(motion.article, {
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
							delay: i * .1
						},
						className: "group rounded-3xl overflow-hidden bg-card shadow-xl border border-border",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-video overflow-hidden",
							children: [
								/* @__PURE__ */ jsx(motion.img, {
									src: c.src,
									alt: c.title,
									loading: "lazy",
									width: 1280,
									height: 720,
									className: "h-full w-full object-cover",
									whileHover: { scale: 1.08 },
									transition: { duration: 1.2 }
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-grape/70 to-transparent" }),
								/* @__PURE__ */ jsx(motion.div, {
									className: "absolute inset-0 grid place-items-center",
									whileHover: { scale: 1.1 },
									children: /* @__PURE__ */ jsx("div", {
										className: "h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-2xl",
										children: /* @__PURE__ */ jsx(Play, {
											className: "text-grape fill-grape",
											size: 26
										})
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-semibold",
									children: c.level
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "display text-2xl",
									children: c.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: c.desc
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ jsxs("span", { children: [c.lessons, " درس"] }),
										/* @__PURE__ */ jsx("span", { children: "·" }),
										/* @__PURE__ */ jsx("span", { children: c.duration })
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "display text-xl",
										children: [
											c.price,
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-xs text-muted-foreground",
												children: "ت"
											})
										]
									}), /* @__PURE__ */ jsx("button", {
										className: "rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition",
										children: "ثبت‌نام"
									})]
								})
							]
						})]
					}, c.slug))
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mt-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.3em] text-autumn",
							children: "پیش‌نمایش رایگان"
						}), /* @__PURE__ */ jsx("h2", {
							className: "display text-3xl md:text-5xl mt-2",
							children: "یک قسمت از دوره‌ها را ببینید"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl paper-texture",
						children: [/* @__PURE__ */ jsx("img", {
							src: courses[0].src,
							alt: "پیش‌نمایش ویدیو",
							className: "h-full w-full object-cover",
							loading: "lazy",
							width: 1280,
							height: 720
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 bg-gradient-to-t from-grape/80 to-transparent grid place-items-center",
							children: /* @__PURE__ */ jsx(motion.button, {
								whileHover: { scale: 1.1 },
								whileTap: { scale: .95 },
								className: "h-20 w-20 rounded-full bg-white grid place-items-center shadow-2xl",
								"aria-label": "پخش ویدیو",
								children: /* @__PURE__ */ jsx(Play, {
									className: "text-grape fill-grape",
									size: 32
								})
							})
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { Courses as component };
