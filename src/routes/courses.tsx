import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { courses } from "@/data/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "دوره‌های آموزش آبرنگ | سوگالری" },
      { name: "description", content: "دوره‌های آموزش نقاشی آبرنگ سوگل فتحی، از مقدماتی تا پیشرفته. ویدیوهای آموزشی، کارگاه حضوری و پشتیبانی اختصاصی." },
      { property: "og:title", content: "دوره‌های آموزش آبرنگ | سوگالری" },
      { property: "og:description", content: "ثبت‌نام در دوره‌های آبرنگ سوگل فتحی — از صفر تا تخصصی." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: courses.map((c, i) => ({
          "@type": "Course",
          position: i + 1,
          name: c.title,
          description: c.desc,
          provider: { "@type": "Organization", name: "سوگالری" },
        })),
      }),
    }],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-art">آکادمی سوگالری</p>
          <h1 className="display text-4xl md:text-6xl mt-3">دوره‌های آموزش آبرنگ</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            ویدیوهای آموزشی به همراه کارگاه‌های آنلاین و حضوری. تمام جلسات با کیفیت ۴K ضبط شده‌اند.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card shadow-xl border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img src={c.src} alt={c.title} loading="lazy" width={1280} height={720}
                  className="h-full w-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 1.2 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-grape/70 to-transparent" />
                <motion.div
                  className="absolute inset-0 grid place-items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-2xl">
                    <Play className="text-grape fill-grape" size={26} />
                  </div>
                </motion.div>
                <div className="absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-semibold">
                  {c.level}
                </div>
              </div>
              <div className="p-6">
                <h2 className="display text-2xl">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{c.lessons} درس</span><span>·</span><span>{c.duration}</span>
                </div>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center">
                  <div className="display text-xl">{c.price} <span className="text-xs text-muted-foreground">ت</span></div>
                  <button className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition">
                    ثبت‌نام
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* VIDEO PREVIEW */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-autumn">پیش‌نمایش رایگان</p>
            <h2 className="display text-3xl md:text-5xl mt-2">یک قسمت از دوره‌ها را ببینید</h2>
          </div>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl paper-texture">
            <img src={courses[0].src} alt="پیش‌نمایش ویدیو" className="h-full w-full object-cover" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t from-grape/80 to-transparent grid place-items-center">
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="h-20 w-20 rounded-full bg-white grid place-items-center shadow-2xl"
                aria-label="پخش ویدیو"
              >
                <Play className="text-grape fill-grape" size={32} />
              </motion.button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
