import { Link } from "@tanstack/react-router";
import { brand } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-16">
      <div className="mx-auto max-w-7xl px-5 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-fuchsia-art" />
            <span className="display font-bold text-lg watercolor-text">{brand.name}</span>
          </div>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm">
            گالری مستقل آبرنگ به سرپرستی استاد {brand.artist}. خانه‌ی هنر، آموزش و آثار اصیل آبرنگ ایرانی.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">پیمایش</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">گالری آثار</Link></li>
            <li><Link to="/students" className="hover:text-foreground">آثار هنرجویان</Link></li>
            <li><Link to="/courses" className="hover:text-foreground">دوره‌های آموزشی</Link></li>
            <li><Link to="/articles" className="hover:text-foreground">مقالات</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">ارتباط</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href={`mailto:${brand.email}`} className="hover:text-foreground">{brand.email}</a></li>
            <li><a href={brand.instagram} className="hover:text-foreground">اینستاگرام</a></li>
            <li><a href={brand.telegram} className="hover:text-foreground">تلگرام</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground flex justify-between flex-wrap gap-3">
          <div>© ۱۴۰۵ {brand.name} — تمامی حقوق محفوظ است.</div>
          <div>طراحی و توسعه با عشق به هنر آبرنگ</div>
        </div>
      </div>
    </footer>
  );
}
