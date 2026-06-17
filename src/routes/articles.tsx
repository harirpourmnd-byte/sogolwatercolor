import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/data/site";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "مقالات آموزش آبرنگ | سوگالری" },
      { name: "description", content: "مقالات تخصصی آموزش نقاشی آبرنگ، رنگ‌شناسی، انتخاب کاغذ و قلم‌مو و تکنیک‌های پیشرفته به قلم سوگل فتحی." },
      { name: "keywords", content: "آموزش آبرنگ، مقاله آبرنگ، رنگ‌شناسی، کاغذ آبرنگ، تکنیک آبرنگ" },
      { property: "og:title", content: "مقالات آموزش آبرنگ | سوگالری" },
      { property: "og:description", content: "آموزش‌های تخصصی نقاشی آبرنگ به قلم سوگل فتحی." },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "وبلاگ سوگالری",
        description: "مقالات تخصصی آموزش نقاشی آبرنگ",
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          description: a.excerpt,
          url: `/articles/${a.slug}`,
          datePublished: a.date,
          author: { "@type": "Person", name: "سوگل فتحی" },
        })),
      }),
    }],
  }),
  component: Articles,
});

function Articles() {
  const [feat, ...rest] = articles;
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-12 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-autumn">وبلاگ سوگالری</p>
          <h1 className="display text-4xl md:text-6xl mt-3">مقالات تخصصی آبرنگ</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            راهنماها، تجربه‌ها و تکنیک‌های نقاشی آبرنگ به قلم استاد سوگل فتحی و تیم سوگالری.
          </p>
        </div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-card shadow-xl border border-border"
        >
          <Link to="/articles/$slug" params={{ slug: feat.slug }} className="block aspect-[4/3] md:aspect-auto overflow-hidden">
            <img src={feat.cover} alt={feat.title} loading="lazy" width={1200} height={800}
              className="h-full w-full object-cover hover:scale-105 transition duration-700" />
          </Link>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs text-autumn">مقاله‌ی ویژه · {feat.tag} · {feat.readMin} دقیقه</div>
            <h2 className="display text-3xl md:text-4xl mt-3">
              <Link to="/articles/$slug" params={{ slug: feat.slug }} className="hover:text-fuchsia-art transition">{feat.title}</Link>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{feat.excerpt}</p>
            <Link to="/articles/$slug" params={{ slug: feat.slug }}
              className="mt-6 inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold w-fit">
              ادامه‌ی مقاله ←
            </Link>
          </div>
        </motion.article>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {rest.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block">
                <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
                  <img src={a.cover} alt={a.title} loading="lazy" width={1200} height={800}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="mt-4">
                  <div className="text-xs text-autumn">{a.tag} · {a.readMin} دقیقه · {a.date}</div>
                  <h2 className="display text-2xl mt-1 group-hover:text-fuchsia-art transition">{a.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
