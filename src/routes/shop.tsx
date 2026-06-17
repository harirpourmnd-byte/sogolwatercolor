import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { paintings } from "@/data/site";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "فروش تابلو آبرنگ | سوگالری" },
      { name: "description", content: "فروش تابلوهای اصیل آبرنگ سوگل فتحی. آثار اورجینال روی کاغذ فابریانو و آرشز با قیمت مستقیم از آتلیه." },
      { property: "og:title", content: "فروش تابلو آبرنگ | سوگالری" },
      { property: "og:description", content: "خرید تابلوهای اصیل آبرنگ سوگل فتحی، مستقیم از آتلیه." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-art">گالری فروش</p>
          <h1 className="display text-4xl md:text-6xl mt-3">تابلوهای اصیل آبرنگ</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            هر اثر، یکتا و دست‌ساز است. روی کاغذ آرشیوی فابریانو ۳۰۰ گرم، با مهر و امضای استاد سوگل فتحی.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paintings.map((w, i) => (
            <motion.article
              key={w.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl paper-texture shadow-xl">
                <motion.img src={w.src} alt={w.title} loading="lazy" width={800} height={1024}
                  className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} />
                <div className="absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs">{w.size} سانتی‌متر</div>
              </div>
              <div className="mt-5">
                <div className="text-xs text-autumn">{w.tag}</div>
                <h2 className="display text-2xl mt-1">{w.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center">
                  <div className="display text-xl">{w.price} <span className="text-sm text-muted-foreground">تومان</span></div>
                  <a href={`https://wa.me/?text=سلام، علاقه‌مند به خرید تابلوی ${w.title} هستم`}
                     className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition">
                    خرید
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/students" className="text-sm hover:underline">آثار هنرجویان را هم ببینید ←</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
