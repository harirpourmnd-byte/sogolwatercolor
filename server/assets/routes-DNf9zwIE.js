import { i as paintings, n as brand, r as courses, t as articles } from "./site-BeCk0QRF.js";
import { n as SiteHeader, r as WatercolorBg, t as SiteFooter } from "./SiteFooter-BvBvrT1v.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
//#region src/components/WatercolorBrush.tsx
function WatercolorBrush({ className = "", color = "var(--fuchsia-art)" }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		viewBox: "0 0 400 80",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("filter", {
			id: "wc-blur",
			children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1.2" })
		}) }), /* @__PURE__ */ jsx(motion.path, {
			d: "M10 40 C 80 10, 160 70, 230 35 S 360 50, 395 30",
			stroke: color,
			strokeWidth: "22",
			strokeLinecap: "round",
			filter: "url(#wc-blur)",
			opacity: "0.55",
			initial: { pathLength: 0 },
			whileInView: { pathLength: 1 },
			viewport: { once: true },
			transition: {
				duration: 1.8,
				ease: [
					.2,
					.8,
					.2,
					1
				]
			}
		})]
	});
}
//#endregion
//#region src/assets/hero-watercolor.jpg
var hero_watercolor_default = "data:image/jpeg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYwMCI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZDRjNWIwIi8+PC9zdmc+";
//#endregion
//#region src/assets/splash-1.png
var splash_1_default = "data:image/png;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2U4ZGRkMCIvPjwvc3ZnPg==";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var palette = [
	{
		name: "مووِ روشن",
		code: "DMC 3727",
		color: "oklch(0.82 0.04 350)"
	},
	{
		name: "فوشیا",
		code: "DMC 33",
		color: "oklch(0.55 0.16 350)"
	},
	{
		name: "انگوری تیره",
		code: "DMC 3834",
		color: "oklch(0.35 0.10 350)"
	},
	{
		name: "بژ تیره",
		code: "DMC 642",
		color: "oklch(0.75 0.05 80)"
	},
	{
		name: "بژ خاکی",
		code: "DMC 3790",
		color: "oklch(0.48 0.06 60)"
	},
	{
		name: "پاییز",
		code: "DMC 3853",
		color: "oklch(0.72 0.18 55)"
	}
];
function Index() {
	const featured = paintings.slice(0, 3);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(WatercolorBg, {}),
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsx("section", {
			className: "relative mx-auto max-w-7xl px-5 pt-10 pb-20 md:pt-20 md:pb-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: 1 },
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-autumn animate-pulse" }), "ثبت‌نام دوره‌ی پاییز ۱۴۰۵ آغاز شد"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "display mt-6 text-5xl md:text-7xl font-bold leading-[1.05]",
							children: [brand.name, /* @__PURE__ */ jsx("span", {
								className: "block watercolor-text italic",
								children: brand.tagline
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative mt-2",
							children: /* @__PURE__ */ jsx(WatercolorBrush, {
								className: "absolute -bottom-3 right-0 w-64 h-12",
								color: "var(--autumn)"
							})
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground",
							children: [
								"گالری و آتلیه‌ی آبرنگ به سرپرستی استاد ",
								/* @__PURE__ */ jsx("span", {
									className: "text-foreground font-semibold",
									children: brand.artist
								}),
								". خانه‌ی تابلوهای اصیل، دوره‌های آموزشی و آثار شگفت‌انگیز هنرجویان."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ jsx(motion.div, {
								whileHover: { scale: 1.04 },
								whileTap: { scale: .97 },
								children: /* @__PURE__ */ jsx(Link, {
									to: "/shop",
									className: "inline-block rounded-full bg-foreground px-7 py-3.5 text-background text-sm font-semibold shadow-xl",
									children: "گالری آثار ←"
								})
							}), /* @__PURE__ */ jsx(Link, {
								to: "/courses",
								className: "text-sm font-medium underline-offset-4 hover:underline text-foreground/80",
								children: "مشاهده‌ی دوره‌ها"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-12 flex items-center gap-8 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "display text-2xl text-foreground",
									children: "۱۲۴"
								}), "اثر اصیل"] }),
								/* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-border" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "display text-2xl text-foreground",
									children: "۳۸۰+"
								}), "هنرجو"] }),
								/* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-border" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "display text-2xl text-foreground",
									children: "۹"
								}), "دوره فعال"] })
							]
						})
					]
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: 1.4 },
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl paper-texture",
							children: [/* @__PURE__ */ jsx("img", {
								src: hero_watercolor_default,
								alt: "آبرنگ انتزاعی سوگالری",
								className: "h-full w-full object-cover",
								width: 1920,
								height: 1080
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-grape/30 via-transparent to-transparent" })]
						}),
						/* @__PURE__ */ jsx(motion.img, {
							src: splash_1_default,
							alt: "",
							"aria-hidden": true,
							className: "absolute -top-10 -left-10 h-40 w-40 md:h-56 md:w-56 opacity-80 pointer-events-none",
							animate: {
								rotate: [
									0,
									8,
									-5,
									0
								],
								scale: [
									1,
									1.05,
									1
								]
							},
							transition: {
								duration: 14,
								repeat: Infinity
							}
						}),
						/* @__PURE__ */ jsx(motion.div, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: { delay: .8 },
							className: "absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs rounded-2xl bg-card/85 backdrop-blur p-4 shadow-xl border border-border",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("img", {
									src: "",
									alt: brand.artist,
									loading: "lazy",
									className: "h-12 w-12 rounded-full object-cover"
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-sm min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "font-semibold truncate",
										children: ["استاد ", brand.artist]
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: "بنیان‌گذار سوگالری"
									})]
								})]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative mx-auto max-w-7xl px-5 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between flex-wrap gap-4 mb-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-autumn",
					children: "پالت فصل"
				}), /* @__PURE__ */ jsx("h2", {
					className: "display text-4xl md:text-5xl mt-2",
					children: "رنگ‌هایی که داستان می‌گویند"
				})] }), /* @__PURE__ */ jsx("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: "پالت اختصاصی این فصل، الهام‌گرفته از گل‌های زعفران و غروب پاییز."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
				children: palette.map((p, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30,
						filter: "blur(8px)"
					},
					whileInView: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: {
						duration: .7,
						delay: i * .08
					},
					whileHover: { y: -6 },
					className: "paper-texture aspect-square rounded-2xl p-4 flex flex-col justify-between shadow-lg overflow-hidden",
					style: { background: p.color },
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-[10px] uppercase tracking-widest text-white/80 mix-blend-overlay",
						children: p.code
					}), /* @__PURE__ */ jsx("div", {
						className: "text-white drop-shadow",
						children: /* @__PURE__ */ jsx("div", {
							className: "display text-lg leading-tight",
							children: p.name
						})
					})]
				}, p.code))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative mx-auto max-w-7xl px-5 py-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-14",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.3em] text-fuchsia-art",
						children: "گالری منتخب"
					}), /* @__PURE__ */ jsx("h2", {
						className: "display text-4xl md:text-6xl mt-3",
						children: "آثار اصیل"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: featured.map((w, i) => /* @__PURE__ */ jsxs(motion.article, {
						initial: {
							opacity: 0,
							y: 60
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .8,
							delay: i * .12
						},
						className: "group relative",
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
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-grape/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-autumn",
									children: w.tag
								}), /* @__PURE__ */ jsx("h3", {
									className: "display text-xl mt-0.5 truncate",
									children: w.title
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-sm text-muted-foreground shrink-0",
								children: [w.price, " ت"]
							})]
						})]
					}, w.slug))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-center mt-10",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "inline-block rounded-full border border-foreground/30 px-6 py-3 text-sm hover:bg-foreground hover:text-background transition",
						children: "تمام آثار گالری ←"
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative mx-auto max-w-7xl px-5 py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-[2.5rem] paper-texture p-8 md:p-14 shadow-2xl",
				style: { background: "linear-gradient(135deg, var(--grape), oklch(0.28 0.12 350))" },
				children: [
					/* @__PURE__ */ jsx(motion.div, {
						className: "absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-60",
						style: { background: "var(--autumn)" },
						animate: {
							scale: [
								1,
								1.2,
								1
							],
							opacity: [
								.4,
								.7,
								.4
							]
						},
						transition: {
							duration: 8,
							repeat: Infinity
						}
					}),
					/* @__PURE__ */ jsx(motion.div, {
						className: "absolute -bottom-32 -right-10 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50",
						style: { background: "var(--fuchsia-art)" },
						animate: { scale: [
							1,
							1.15,
							1
						] },
						transition: {
							duration: 10,
							repeat: Infinity,
							delay: 1
						}
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative grid md:grid-cols-2 gap-10 items-center text-white",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-[0.3em] text-mauve",
								children: "آتلیه‌ی سوگالری"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "display text-4xl md:text-5xl mt-3 leading-tight",
								children: [
									"با قلم‌مو،",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "italic text-autumn",
										children: "دنیای خود را بکش"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-white/80 leading-relaxed",
								children: "از مقدماتی تا پیشرفته — دوره‌های آبرنگ سوگل فتحی، تجربه‌ای فشرده، آرام و عمیق برای شما طراحی شده."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/courses",
									className: "rounded-full bg-white text-grape px-6 py-3 text-sm font-bold shadow-xl hover:scale-105 transition",
									children: "مشاهده‌ی دوره‌ها"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/articles",
									className: "rounded-full border border-white/40 px-6 py-3 text-sm hover:bg-white/10 transition",
									children: "مقالات آموزشی"
								})]
							})
						] }), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: courses.map((c, i) => /* @__PURE__ */ jsxs(motion.li, {
								initial: {
									opacity: 0,
									x: 40
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: { delay: i * .1 },
								className: "grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-center rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-bold truncate",
										children: c.title
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-xs text-white/70 mt-1",
										children: [
											c.level,
											" · ",
											c.lessons,
											" درس · ",
											c.duration
										]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-sm text-autumn shrink-0",
									children: [c.price, " ت"]
								})]
							}, c.slug))
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative mx-auto max-w-7xl px-5 py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between flex-wrap gap-4 mb-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-fuchsia-art",
					children: "از وبلاگ سوگالری"
				}), /* @__PURE__ */ jsx("h2", {
					className: "display text-4xl md:text-5xl mt-2",
					children: "مقالات تخصصی آبرنگ"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/articles",
					className: "text-sm hover:underline",
					children: "همه‌ی مقالات ←"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: articles.map((a, i) => /* @__PURE__ */ jsx(motion.article, {
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
										" دقیقه"
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "display text-xl mt-1 group-hover:text-fuchsia-art transition",
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
			})]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
//#endregion
export { Index as component };
