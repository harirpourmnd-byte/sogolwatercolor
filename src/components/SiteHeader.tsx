import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/data/site";

const links = [
  { to: "/", label: "خانه" },
  { to: "/shop", label: "گالری آثار" },
  { to: "/students", label: "آثار هنرجویان" },
  { to: "/courses", label: "دوره‌ها" },
  { to: "/articles", label: "مقالات" },
  { to: "/about", label: "درباره" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-block h-3 w-3 rounded-full bg-fuchsia-art shadow-[0_0_18px_var(--fuchsia-art)]" />
          <span className="display text-xl font-bold watercolor-text">{brand.name}</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="hover:text-foreground transition"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/courses"
            className="hidden sm:inline-flex rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition"
          >
            ثبت‌نام دوره
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            aria-label="منو"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-card/95 backdrop-blur">
          <ul className="mx-auto max-w-7xl px-5 py-4 grid gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-muted"
                  activeProps={{ className: "bg-muted font-semibold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
