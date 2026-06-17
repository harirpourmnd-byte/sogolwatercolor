import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { WatercolorBg } from "@/components/WatercolorBg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/data/site";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "مقاله یافت نشد | سوگالری" }] };
    return {
      meta: [
        { title: `${a.title} | سوگالری` },
        { name: "description", content: a.excerpt },
        { name: "keywords", content: `${a.tag}, آبرنگ, سوگل فتحی, آموزش نقاشی` },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a.cover },
        { property: "og:url", content: `/articles/${params.slug}` },
        { property: "article:author", content: "سوگل فتحی" },
        { property: "article:published_time", content: a.date },
        { name: "twitter:image", content: a.cover },
      ],
      links: [{ rel: "canonical", href: `/articles/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          image: a.cover,
          datePublished: a.date,
          author: { "@type": "Person", name: "سوگل فتحی" },
          publisher: { "@type": "Organization", name: "سوگالری" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-center px-6">
      <div>
        <h1 className="display text-4xl">مقاله یافت نشد</h1>
        <Link to="/articles" className="mt-4 inline-block underline">بازگشت به مقالات</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <p className="text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-3 underline">تلاش مجدد</button>
      </div>
    </div>
  ),
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  return (
    <>
      <WatercolorBg />
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-10 pb-16">
        <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground">← همه‌ی مقالات</Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mt-6 text-xs text-autumn">{article.tag} · {article.readMin} دقیقه مطالعه · {article.date}</div>
          <h1 className="display text-4xl md:text-6xl mt-3 leading-tight">{article.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="mt-10 aspect-[3/2] overflow-hidden rounded-3xl shadow-2xl paper-texture"
        >
          <img src={article.cover} alt={article.title} width={1200} height={800} className="h-full w-full object-cover" />
        </motion.div>
        <article className="prose-watercolor mt-12 space-y-6 text-lg leading-[2] text-foreground/90">
          {article.body.map((p: string, i: number) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.05 }}
            >
              {p}
            </motion.p>
          ))}
        </article>

        <div className="mt-16 rounded-3xl bg-card p-8 border border-border text-center">
          <div className="display text-2xl">نویسنده: سوگل فتحی</div>
          <p className="mt-2 text-sm text-muted-foreground">بنیان‌گذار سوگالری و مدرس نقاشی آبرنگ</p>
          <Link to="/courses" className="mt-5 inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold">
            دوره‌های آموزشی →
          </Link>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="display text-2xl mb-6">مقالات مرتبط</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug} to="/articles/$slug" params={{ slug: r.slug }}
                  className="group block rounded-2xl overflow-hidden bg-card border border-border shadow"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={r.cover} alt={r.title} loading="lazy" width={1200} height={800}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-autumn">{r.tag}</div>
                    <h3 className="display text-xl mt-1 group-hover:text-fuchsia-art transition">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
