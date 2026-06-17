import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { studentWorks } from "@/data/site";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "آثار هنرجویان | سوگالری" },
      { name: "description", content: "گالری آثار هنرجویان آتلیه‌ی آبرنگ سوگل فتحی. حمایت از هنرمندان جوان با خرید آثارشان." },
      { property: "og:title", content: "آثار هنرجویان آبرنگ | سوگالری" },
      { property: "og:description", content: "حمایت از هنرجویان آبرنگ سوگالری با خرید آثارشان." },
      { property: "og:url", content: "/students" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: Students,
});

function Students() {
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-autumn">پرورش‌یافتگان سوگالری</p>
          <h1 className="display text-4xl md:text-6xl mt-3">آثار هنرجویان</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            هر تابلوی این بخش، نخستین گام‌های یک هنرمند جوان است. با خرید این آثار، از مسیر هنری آنها حمایت می‌کنید.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studentWorks.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl paper-texture shadow-xl">
                <motion.img src={s.src} alt={s.title} loading="lazy" width={800} height={1024}
                  className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} />
                <div className="absolute top-3 right-3 rounded-full bg-autumn/90 text-white px-3 py-1 text-xs font-semibold">
                  هنرجو
                </div>
              </div>
              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-end">
                <div className="min-w-0">
                  <h2 className="display text-2xl">{s.title}</h2>
                  <div className="text-sm text-muted-foreground mt-1">{s.student} · {s.level}</div>
                </div>
                <div className="display text-lg shrink-0">{s.price} ت</div>
              </div>
              <a href={`https://wa.me/?text=علاقه‌مند به خرید اثر هنرجو: ${s.title}`}
                 className="mt-4 block text-center rounded-full bg-foreground text-background py-2.5 text-sm font-semibold">
                خرید و حمایت
              </a>
            </motion.article>
          ))}
        </div>
        <div className="mt-16 max-w-2xl mx-auto rounded-3xl bg-card p-8 text-center border border-border">
          <h3 className="display text-2xl">هنرجوی سوگالری هستی؟</h3>
          <p className="mt-3 text-muted-foreground">آثارت را برای فروش در گالری ارسال کن.</p>
          <Link to="/courses" className="inline-block mt-5 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold">
            ثبت‌نام در دوره‌ها
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
