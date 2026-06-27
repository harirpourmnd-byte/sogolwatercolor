import { n as brand } from "./site-BeCk0QRF.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
//#region src/components/WatercolorBg.tsx
function WatercolorBg() {
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				className: "absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl",
				style: { background: "radial-gradient(circle, var(--fuchsia-art), transparent 70%)" },
				animate: {
					x: [
						0,
						60,
						-20,
						0
					],
					y: [
						0,
						-40,
						30,
						0
					],
					scale: [
						1,
						1.1,
						.95,
						1
					]
				},
				transition: {
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				className: "absolute -bottom-40 -left-32 h-[700px] w-[700px] rounded-full opacity-35 blur-3xl",
				style: { background: "radial-gradient(circle, var(--grape), transparent 70%)" },
				animate: {
					x: [
						0,
						-50,
						30,
						0
					],
					y: [
						0,
						40,
						-20,
						0
					],
					scale: [
						1,
						1.15,
						1,
						1
					]
				},
				transition: {
					duration: 28,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				className: "absolute top-1/3 left-1/2 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl",
				style: { background: "radial-gradient(circle, var(--autumn), transparent 70%)" },
				animate: {
					x: [
						0,
						80,
						-40,
						0
					],
					y: [
						0,
						-60,
						40,
						0
					]
				},
				transition: {
					duration: 32,
					repeat: Infinity,
					ease: "easeInOut"
				}
			})
		]
	});
}
//#endregion
//#region src/components/SiteHeader.tsx
var links = [
	{
		to: "/",
		label: "خانه"
	},
	{
		to: "/shop",
		label: "گالری آثار"
	},
	{
		to: "/students",
		label: "آثار هنرجویان"
	},
	{
		to: "/courses",
		label: "دوره‌ها"
	},
	{
		to: "/articles",
		label: "مقالات"
	},
	{
		to: "/about",
		label: "درباره"
	}
];
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-3 w-3 rounded-full bg-fuchsia-art shadow-[0_0_18px_var(--fuchsia-art)]" }), /* @__PURE__ */ jsx("span", {
						className: "display text-xl font-bold watercolor-text",
						children: brand.name
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden lg:flex items-center gap-6 text-sm text-muted-foreground",
					children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "hover:text-foreground transition",
						activeProps: { className: "text-foreground font-semibold" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}) }, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/courses",
						className: "hidden sm:inline-flex rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition",
						children: "ثبت‌نام دوره"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(!open),
						className: "lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card",
						"aria-label": "منو",
						children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
					})]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-border/40 bg-card/95 backdrop-blur",
			children: /* @__PURE__ */ jsx("ul", {
				className: "mx-auto max-w-7xl px-5 py-4 grid gap-1",
				children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2.5 text-sm hover:bg-muted",
					activeProps: { className: "bg-muted font-semibold" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}) }, l.to))
			})
		})]
	});
}
//#endregion
//#region src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border/50 mt-16",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-12 grid gap-10 md:grid-cols-4 text-sm",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-3 w-3 rounded-full bg-fuchsia-art" }), /* @__PURE__ */ jsx("span", {
							className: "display font-bold text-lg watercolor-text",
							children: brand.name
						})]
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-muted-foreground leading-relaxed max-w-sm",
						children: [
							"گالری مستقل آبرنگ به سرپرستی استاد ",
							brand.artist,
							". خانه‌ی هنر، آموزش و آثار اصیل آبرنگ ایرانی."
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-semibold mb-3",
					children: "پیمایش"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/shop",
							className: "hover:text-foreground",
							children: "گالری آثار"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/students",
							className: "hover:text-foreground",
							children: "آثار هنرجویان"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/courses",
							className: "hover:text-foreground",
							children: "دوره‌های آموزشی"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/articles",
							className: "hover:text-foreground",
							children: "مقالات"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-semibold mb-3",
					children: "ارتباط"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${brand.email}`,
							className: "hover:text-foreground",
							children: brand.email
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: brand.instagram,
							className: "hover:text-foreground",
							children: "اینستاگرام"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: brand.telegram,
							className: "hover:text-foreground",
							children: "تلگرام"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground flex justify-between flex-wrap gap-3",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ۱۴۰۵ ",
					brand.name,
					" — تمامی حقوق محفوظ است."
				] }), /* @__PURE__ */ jsx("div", { children: "طراحی و توسعه با عشق به هنر آبرنگ" })]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, WatercolorBg as r, SiteFooter as t };
