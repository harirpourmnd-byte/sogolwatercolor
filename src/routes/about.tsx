import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره سوگل فتحی | سوگالری" },
      { name: "description", content: "سوگل فتحی، هنرمند و مدرس آبرنگ، بنیان‌گذار سوگالری. آشنایی با سفر هنری و فلسفه‌ی آموزش او." },
      { property: "og:title", content: "درباره سوگل فتحی | سوگالری" },
      { property: "og:description", content: "سفر هنری استاد سوگل فتحی، هنرمند آبرنگ ایرانی." },
      { property: "og:url", content: "/about" },
    { property: "og:image", content: "" },
],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
            className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl paper-texture"
          >
            <img src={""} alt="سوگل فتحی" className="h-full w-full object-cover" width={800} height={1024} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-autumn">بنیان‌گذار سوگالری</p>
            <h1 className="display text-4xl md:text-5xl mt-3">سوگل فتحی</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              هنرمند، مدرس و بنیان‌گذار سوگالری. بیش از پانزده سال در مسیر آبرنگ گام برداشته و آثارش در نمایشگاه‌های متعدد داخل و خارج از کشور به نمایش درآمده.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              «من به این باور رسیده‌ام که آبرنگ، آرام‌ترین و در عین حال شجاع‌ترین هنر است. هر قطره‌ی رنگ روی کاغذ، یک تصمیم است که نمی‌توان آن را پس گرفت — و این، زیبایی‌اش است.»
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold">دوره‌های من</Link>
              <a href={brand.instagram} className="rounded-full border border-border px-6 py-3 text-sm">اینستاگرام</a>
            </div>
          </motion.div>
        </div>

        <section className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { n: "۱۵+", t: "سال تجربه" },
            { n: "۳۸۰+", t: "هنرجوی پرورش‌یافته" },
            { n: "۱۲", t: "نمایشگاه انفرادی" },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="paper-texture rounded-2xl bg-card p-8 text-center border border-border"
            >
              <div className="display text-5xl watercolor-text">{s.n}</div>
              <div className="mt-2 text-muted-foreground">{s.t}</div>
            </motion.div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
