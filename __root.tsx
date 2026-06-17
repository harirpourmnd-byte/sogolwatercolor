import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl font-bold watercolor-text">۴۰۴</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">صفحه پیدا نشد</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          صفحه‌ای که دنبالش بودید موجود نیست یا منتقل شده.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">صفحه بارگذاری نشد</h1>
        <p className="mt-2 text-sm text-muted-foreground">مشکلی پیش آمد. لطفاً دوباره تلاش کنید.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            تلاش دوباره
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm">خانه</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#5a2347" },
      { title: "سوگالری | گالری آبرنگ سوگل فتحی" },
      { name: "description", content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ." },
      { name: "keywords", content: "آبرنگ، نقاشی آبرنگ، آموزش آبرنگ، سوگل فتحی، سوگالری، تابلو آبرنگ، فروش تابلو، دوره آبرنگ، گالری هنر" },
      { name: "author", content: "سوگل فتحی" },
      { property: "og:site_name", content: "سوگالری" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fa_IR" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "سوگالری | گالری آبرنگ سوگل فتحی" },
      { name: "twitter:title", content: "سوگالری | گالری آبرنگ سوگل فتحی" },
      { property: "og:description", content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ." },
      { name: "twitter:description", content: "سوگالری — گالری آبرنگ سوگل فتحی. فروش تابلوهای اصیل آبرنگ، آثار هنرجویان، دوره‌های آموزشی و مقالات تخصصی نقاشی آبرنگ." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HPr4vKbW9uhmk5HEOerpLsMW3Pu2/social-images/social-1781221798553-file_00000000f6a071f48be8aa7b71f92359.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HPr4vKbW9uhmk5HEOerpLsMW3Pu2/social-images/social-1781221798553-file_00000000f6a071f48be8aa7b71f92359.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Vazirmatn:wght@300;400;600;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "سوگالری",
          alternateName: "Sogallery",
          description: "گالری آبرنگ سوگل فتحی — فروش آثار اصیل، دوره‌های آموزشی و مقالات نقاشی آبرنگ.",
          founder: { "@type": "Person", name: "سوگل فتحی" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
