import { n as brand } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(WatercolorBg, {}),
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			className: "mx-auto max-w-5xl px-5 pt-12 pb-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { duration: .9 },
					className: "aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl paper-texture",
					children: /* @__PURE__ */ jsx("img", {
						src: "",
						alt: "سوگل فتحی",
						className: "h-full w-full object-cover",
						width: 800,
						height: 1024
					})
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .9,
						delay: .1
					},
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.3em] text-autumn",
							children: "بنیان‌گذار سوگالری"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "display text-4xl md:text-5xl mt-3",
							children: "سوگل فتحی"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-lg text-muted-foreground leading-relaxed",
							children: "هنرمند، مدرس و بنیان‌گذار سوگالری. بیش از پانزده سال در مسیر آبرنگ گام برداشته و آثارش در نمایشگاه‌های متعدد داخل و خارج از کشور به نمایش درآمده."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "«من به این باور رسیده‌ام که آبرنگ، آرام‌ترین و در عین حال شجاع‌ترین هنر است. هر قطره‌ی رنگ روی کاغذ، یک تصمیم است که نمی‌توان آن را پس گرفت — و این، زیبایی‌اش است.»"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/courses",
								className: "rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold",
								children: "دوره‌های من"
							}), /* @__PURE__ */ jsx("a", {
								href: brand.instagram,
								className: "rounded-full border border-border px-6 py-3 text-sm",
								children: "اینستاگرام"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ jsx("section", {
				className: "mt-20 grid md:grid-cols-3 gap-6",
				children: [
					{
						n: "۱۵+",
						t: "سال تجربه"
					},
					{
						n: "۳۸۰+",
						t: "هنرجوی پرورش‌یافته"
					},
					{
						n: "۱۲",
						t: "نمایشگاه انفرادی"
					}
				].map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "paper-texture rounded-2xl bg-card p-8 text-center border border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "display text-5xl watercolor-text",
						children: s.n
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-2 text-muted-foreground",
						children: s.t
					})]
				}, s.t))
			})]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { About as component };
