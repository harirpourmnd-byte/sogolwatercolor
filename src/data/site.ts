const art1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", art2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", art3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", art4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", art5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", art6 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E";
const st1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", st2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", st3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E";
const c1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", c2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E";
const b1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", b2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E", b3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e0d5cc'/%3E%3C/svg%3E";

export const brand = {
  name: "سوگالری",
  artist: "سوگل فتحی",
  tagline: "هنر در جریان رنگ",
  email: "hello@sogallery.ir",
  instagram: "https://instagram.com/sogallery",
  telegram: "https://t.me/sogallery",
};

export type Painting = {
  slug: string;
  title: string;
  tag: string;
  price: string;
  size: string;
  src: string;
  desc: string;
};

export const paintings: Painting[] = [
  { slug: "zanbaq-arghavan", title: "زنبق‌های ارغوانی", tag: "گل‌نگاره", price: "۴٬۸۰۰٬۰۰۰", size: "۳۰×۴۰", src: art1, desc: "اثر اصیل آبرنگ روی کاغذ فابریانو ۳۰۰ گرم، الهام‌گرفته از گل‌های زعفران بهاری." },
  { slug: "ghorub-kuhestan", title: "غروب کوهستان", tag: "منظره", price: "۶٬۲۰۰٬۰۰۰", size: "۴۰×۵۰", src: art2, desc: "لایه‌های گرم نارنجی و ارغوانی در یک منظره‌ی انتزاعی از کوه‌های پاییز." },
  { slug: "porte-jaryan", title: "پرتره‌ی جریان", tag: "پرتره", price: "۸٬۴۰۰٬۰۰۰", size: "۵۰×۷۰", src: art3, desc: "پرتره‌ای انتزاعی با تکنیک Wet-on-Wet، حاصل چهل ساعت کار روی کاغذ آرشیوی." },
  { slug: "maghnoulia", title: "مگنولیا", tag: "گل‌نگاره", price: "۳٬۹۰۰٬۰۰۰", size: "۳۰×۴۰", src: art4, desc: "شاخه‌ی مگنولیای صورتی، مطالعه‌ی آرامش و سادگی." },
  { slug: "bam-haye-shahr", title: "بام‌های شهر", tag: "منظره", price: "۵٬۲۰۰٬۰۰۰", size: "۴۰×۵۰", src: art5, desc: "بام‌های گرم شهر در نور غروب، با لکه‌های نرم آبرنگ." },
  { slug: "anar-anjir", title: "انار و انجیر", tag: "طبیعت بی‌جان", price: "۴٬۵۰۰٬۰۰۰", size: "۳۰×۴۰", src: art6, desc: "طبیعت بی‌جان میوه‌های پاییزی، مطالعه‌ی نور و بافت." },
];

export type StudentWork = {
  slug: string;
  title: string;
  student: string;
  price: string;
  src: string;
  level: string;
};

export const studentWorks: StudentWork[] = [
  { slug: "lale-mahsa", title: "لاله‌های بهار", student: "مهسا کریمی", price: "۹۸۰٬۰۰۰", src: st1, level: "ترم سوم" },
  { slug: "moj-rang-niloofar", title: "موج رنگ", student: "نیلوفر احمدی", price: "۷۵۰٬۰۰۰", src: st2, level: "ترم اول" },
  { slug: "fenjan-sara", title: "فنجان چای", student: "سارا موسوی", price: "۸۲۰٬۰۰۰", src: st3, level: "ترم دوم" },
];

export type Course = {
  slug: string;
  title: string;
  level: "مقدماتی" | "متوسط" | "پیشرفته";
  duration: string;
  lessons: number;
  price: string;
  src: string;
  desc: string;
};

export const courses: Course[] = [
  {
    slug: "abrang-moghadamati",
    title: "آبرنگ از صفر — دوره‌ی مقدماتی",
    level: "مقدماتی",
    duration: "۸ هفته",
    lessons: 24,
    price: "۲٬۴۰۰٬۰۰۰",
    src: c1,
    desc: "اولین گام در دنیای آبرنگ. شناخت ابزار، رنگ‌شناسی پایه و تکنیک‌های Wet-on-Dry.",
  },
  {
    slug: "tekniks-pishrafte",
    title: "تکنیک‌های پیشرفته‌ی Wet-on-Wet",
    level: "متوسط",
    duration: "۶ هفته",
    lessons: 18,
    price: "۳٬۲۰۰٬۰۰۰",
    src: c2,
    desc: "خلق بافت‌های رویاگونه، گلازه‌کاری و کنترل آب روی کاغذ.",
  },
  {
    slug: "porte-abrang",
    title: "پرتره با آبرنگ",
    level: "پیشرفته",
    duration: "۱۰ هفته",
    lessons: 30,
    price: "۴٬۸۰۰٬۰۰۰",
    src: c1,
    desc: "مطالعه‌ی آناتومی، نور و رنگ پوست در پرتره‌ی آبرنگ.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readMin: number;
  tag: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "shoru-naghashi-abrang",
    title: "شروع نقاشی آبرنگ: راهنمای کامل مبتدیان",
    excerpt: "هر آنچه برای آغاز سفر هنری خود با آبرنگ نیاز دارید — از انتخاب کاغذ و قلم‌مو تا اولین لکه‌ی رنگ.",
    cover: b1,
    date: "۱۴۰۵/۰۷/۱۲",
    readMin: 8,
    tag: "آموزش",
    body: [
      "آبرنگ، هنری است که در آن آب، رنگ و کاغذ با هم گفت‌وگو می‌کنند. برخلاف رنگ روغن یا اکریلیک، در آبرنگ کنترل کامل ممکن نیست و همین، زیبایی این هنر است.",
      "برای شروع، به سه چیز نیاز دارید: کاغذ آبرنگ مرغوب (حداقل ۳۰۰ گرم، ترجیحاً فابریانو یا آرشز)، یک پالت رنگ پایه با شش رنگ اصلی، و دو قلم‌موی گرد سایز ۶ و ۱۰.",
      "اولین تمرین: یک کاغذ را با آب صاف خیس کنید و سپس یک قطره رنگ ارغوانی روی آن بگذارید. ببینید رنگ چگونه روی کاغذ مرطوب پخش می‌شود. این، اولین درس کنترل آب است.",
      "صبور باشید. آبرنگ هنر صبر است. هر اثر، حاصل ده‌ها تمرین کوچک و شکست‌خورده است که در نهایت به یک لحظه‌ی شگفت ختم می‌شود.",
    ],
  },
  {
    slug: "ranj-shenasi-abrang",
    title: "رنگ‌شناسی در آبرنگ: ساخت پالت اختصاصی",
    excerpt: "چگونه از شش رنگ پایه، یک پالت بی‌نهایت بسازیم؟ راهنمای رنگ‌شناسی برای نقاش آبرنگ.",
    cover: b2,
    date: "۱۴۰۵/۰۶/۲۸",
    readMin: 6,
    tag: "رنگ‌شناسی",
    body: [
      "رنگ، زبان نقاش است. در آبرنگ، به‌جای خرید ده‌ها رنگ آماده، یاد بگیرید از شش رنگ پایه، طیف بی‌نهایتی بسازید.",
      "سه رنگ گرم پیشنهادی: زرد کادمیوم، قرمز آلیزارین، نارنجی پاییزی. سه رنگ سرد: آبی اولترامارین، بنفش انگوری، سبز ویریدین.",
      "ترکیب آلیزارین با اولترامارین، یک ارغوانی عمیق و عمیقاً عاطفی می‌دهد — رنگی که در پالت سوگالری بسیار استفاده می‌شود.",
      "همیشه ترکیبات خود را روی یک کاغذ تست یادداشت کنید. این کاغذ، خاطره‌ی پالت شخصی شماست.",
    ],
  },
  {
    slug: "kaqaz-abrang-rahnema",
    title: "کاغذ آبرنگ: راهنمای انتخاب درست",
    excerpt: "کاغذ، بوم نقاش آبرنگ است. تفاوت Cold Press و Hot Press و گراماژ مناسب را بشناسید.",
    cover: b3,
    date: "۱۴۰۵/۰۶/۰۵",
    readMin: 5,
    tag: "ابزار",
    body: [
      "بسیاری از شکست‌های اولیه در آبرنگ، نه به‌خاطر تکنیک، بلکه به‌خاطر کاغذ نامناسب است. کاغذ معمولی پس از خیس شدن چروک می‌شود و رنگ را به درستی نگه نمی‌دارد.",
      "Cold Press: بافت دانه‌دار، مناسب اکثر کارها، عالی برای مبتدیان. Hot Press: بافت صاف، مناسب جزئیات دقیق و پرتره.",
      "گراماژ ۳۰۰ به بالا تضمین می‌کند کاغذ کمتر چروک شود. ۶۴۰ گرم، استاندارد آثار حرفه‌ای است.",
      "برای کارهای آرشیوی، کاغذ ۱۰۰٪ کتان (Cotton) را انتخاب کنید — دوام چندصد ساله دارد.",
    ],
  },
];




