import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { WatercolorBrush } from "@/components/WatercolorBrush";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { paintings, courses, articles, brand } from "@/data/site";
import hero from "@/assets/hero-watercolor.jpg";
import splash from "@/assets/splash-1.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سوگالری | گالری آبرنگ سوگل فتحی" },
      { name: "description", content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلو، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی." },
      { property: "og:title", content: "سوگالری | گالری آبرنگ سوگل فتحی" },
      { property: "og:description", content: "گالری آبرنگ سوگل فتحی — فروش آثار اصیل و دوره‌های حرفه‌ای." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const palette = [
  { name: "مووِ روشن", code: "DMC 3727", color: "oklch(0.82 0.04 350)" },
  { name: "فوشیا", code: "DMC 33", color: "oklch(0.55 0.16 350)" },
  { name: "انگوری تیره", code: "DMC 3834", color: "oklch(0.35 0.10 350)" },
  { name: "بژ تیره", code: "DMC 642", color: "oklch(0.75 0.05 80)" },
  { name: "بژ خاکی", code: "DMC 3790", color: "oklch(0.48 0.06 60)" },
  { name: "پاییز", code: "DMC 3853", color: "oklch(0.72 0.18 55)" },
];

function Index() {
  const featured = paintings.slice(0, 3);
  return (
    <>
      <WatercolorBg />
      <SiteHeader />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pt-10 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-autumn animate-pulse" />
              ثبت‌نام دوره‌ی پاییز ۱۴۰۵ آغاز شد
            </span>
            <h1 className="display mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              {brand.name}
              <span className="block watercolor-text italic">{brand.tagline}</span>
            </h1>
            <div className="relative mt-2">
              <WatercolorBrush className="absolute -bottom-3 right-0 w-64 h-12" color="var(--autumn)" />
            </div>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              گالری و آتلیه‌ی آبرنگ به سرپرستی استاد <span className="text-foreground font-semibold">{brand.artist}</span>.
              خانه‌ی تابلوهای اصیل، دوره‌های آموزشی و آثار شگفت‌انگیز هنرجویان.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/shop" className="inline-block rounded-full bg-foreground px-7 py-3.5 text-background text-sm font-semibold shadow-xl">
                  گالری آثار ←
                </Link>
              </motion.div>
              <Link to="/courses" className="text-sm font-medium underline-offset-4 hover:underline text-foreground/80">
                مشاهده‌ی دوره‌ها
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
              <div><div className="display text-2xl text-foreground">۱۲۴</div>اثر اصیل</div>
              <div className="h-8 w-px bg-border" />
              <div><div className="display text-2xl text-foreground">۳۸۰+</div>هنرجو</div>
              <div className="h-8 w-px bg-border" />
              <div><div className="display text-2xl text-foreground">۹</div>دوره فعال</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4 }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl paper-texture">
              <img src={hero} alt="آبرنگ انتزاعی سوگالری" className="h-full w-full object-cover" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-t from-grape/30 via-transparent to-transparent" />
            </div>
            <motion.img
              src={splash}
              alt=""
              aria-hidden
              className="absolute -top-10 -left-10 h-40 w-40 md:h-56 md:w-56 opacity-80 pointer-events-none"
              animate={{ rotate: [0, 8, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity }}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs rounded-2xl bg-card/85 backdrop-blur p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <img src={""} alt={brand.artist} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div className="text-sm min-w-0">
                  <div className="font-semibold truncate">استاد {brand.artist}</div>
                  <div className="text-xs text-muted-foreground">بنیان‌گذار سوگالری</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PALETTE */}
      <section className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-autumn">پالت فصل</p>
            <h2 className="display text-4xl md:text-5xl mt-2">رنگ‌هایی که داستان می‌گویند</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">پالت اختصاصی این فصل، الهام‌گرفته از گل‌های زعفران و غروب پاییز.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {palette.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="paper-texture aspect-square rounded-2xl p-4 flex flex-col justify-between shadow-lg overflow-hidden"
              style={{ background: p.color }}
            >
              <div className="text-[10px] uppercase tracking-widest text-white/80 mix-blend-overlay">{p.code}</div>
              <div className="text-white drop-shadow"><div className="display text-lg leading-tight">{p.name}</div></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-art">گالری منتخب</p>
          <h2 className="display text-4xl md:text-6xl mt-3">آثار اصیل</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((w, i) => (
            <motion.article
              key={w.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl paper-texture shadow-xl">
                <motion.img
                  src={w.src} alt={w.title} loading="lazy" width={800} height={1024}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grape/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center">
                <div className="min-w-0">
                  <div className="text-xs text-autumn">{w.tag}</div>
                  <h3 className="display text-xl mt-0.5 truncate">{w.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground shrink-0">{w.price} ت</div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-block rounded-full border border-foreground/30 px-6 py-3 text-sm hover:bg-foreground hover:text-background transition">
            تمام آثار گالری ←
          </Link>
        </div>
      </section>

      {/* COURSES PROMO */}
      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] paper-texture p-8 md:p-14 shadow-2xl"
             style={{ background: "linear-gradient(135deg, var(--grape), oklch(0.28 0.12 350))" }}>
          <motion.div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-60"
            style={{ background: "var(--autumn)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute -bottom-32 -right-10 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50"
            style={{ background: "var(--fuchsia-art)" }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-mauve">آتلیه‌ی سوگالری</p>
              <h2 className="display text-4xl md:text-5xl mt-3 leading-tight">
                با قلم‌مو،<br /><span className="italic text-autumn">دنیای خود را بکش</span>
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed">
                از مقدماتی تا پیشرفته — دوره‌های آبرنگ سوگل فتحی، تجربه‌ای فشرده، آرام و عمیق برای شما طراحی شده.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/courses" className="rounded-full bg-white text-grape px-6 py-3 text-sm font-bold shadow-xl hover:scale-105 transition">
                  مشاهده‌ی دوره‌ها
                </Link>
                <Link to="/articles" className="rounded-full border border-white/40 px-6 py-3 text-sm hover:bg-white/10 transition">
                  مقالات آموزشی
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {courses.map((c, i) => (
                <motion.li
                  key={c.slug}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-center rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/10"
                >
                  <div className="min-w-0">
                    <div className="font-bold truncate">{c.title}</div>
                    <div className="text-xs text-white/70 mt-1">{c.level} · {c.lessons} درس · {c.duration}</div>
                  </div>
                  <div className="text-sm text-autumn shrink-0">{c.price} ت</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ARTICLES PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-art">از وبلاگ سوگالری</p>
            <h2 className="display text-4xl md:text-5xl mt-2">مقالات تخصصی آبرنگ</h2>
          </div>
          <Link to="/articles" className="text-sm hover:underline">همه‌ی مقالات ←</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block">
                <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
                  <img src={a.cover} alt={a.title} loading="lazy" width={1200} height={800}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="mt-4">
                  <div className="text-xs text-autumn">{a.tag} · {a.readMin} دقیقه</div>
                  <h3 className="display text-xl mt-1 group-hover:text-fuchsia-art transition">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
