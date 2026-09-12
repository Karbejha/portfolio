export const defaultLocale = "en";

export const locales = ["en", "ar", "tr"];

export const localePaths = {
  en: "/",
  ar: "/ar/",
  tr: "/tr/",
};

export const localeSettings = {
  en: {
    label: "English",
    shortLabel: "EN",
    alternateLabel: "العربية",
    direction: "ltr",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  ar: {
    label: "العربية",
    shortLabel: "ع",
    alternateLabel: "English",
    direction: "rtl",
    htmlLang: "ar",
    ogLocale: "ar",
  },
  tr: {
    label: "Türkçe",
    shortLabel: "TR",
    alternateLabel: "English",
    direction: "ltr",
    htmlLang: "tr",
    ogLocale: "tr_TR",
  },
};

const certificateGroups = [
  {
    provider: "Re:Coded",
    certificates: [
      {
        title: "Fullstack Web Development Bootcamp",
        href: "https://www.credential.net/26f7bbd2-4097-4981-a029-87786aeec745",
      },
    ],
  },
  {
    provider: "Coursera (Programming)",
    certificates: [
      {
        title: "Meta - Fullstack Web Developer (Django framework)",
        href: "https://www.coursera.org/account/accomplishments/certificate/LJXC9KQGFJS5",
      },
      {
        title: "TypeScript",
        href: "https://www.coursera.org/account/accomplishments/certificate/PHRF7ISJZTS3",
      },
      {
        title: "Web Application Technologies and Django",
        href: "https://www.coursera.org/account/accomplishments/certificate/A78T3X9FCYBX",
      },
      {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        href: "https://www.coursera.org/account/accomplishments/certificate/6CX8MU7WZJLS",
      },
    ],
  },
  {
    provider: "Coursera (IT)",
    certificates: [
      {
        title: "Google - The Bits and Bytes of Computer Networking",
        href: "https://www.coursera.org/account/accomplishments/certificate/C5YJ8WZ78HZL",
      },
      {
        title: "Google - Technical Support Fundamentals",
        href: "https://www.coursera.org/account/accomplishments/certificate/S2KD7PSVQEW5",
      },
    ],
  },
];

const projectFilters = [
  { id: "All", labels: { en: "All", ar: "الكل", tr: "Hepsi" } },
  { id: "Web", labels: { en: "Web", ar: "ويب", tr: "Web" } },
  { id: "Mobile", labels: { en: "Mobile", ar: "جوال", tr: "Mobil" } },
  {
    id: "Desktop",
    labels: { en: "Desktop", ar: "سطح المكتب", tr: "Masaüstü" },
  },
  {
    id: "Engineering",
    labels: { en: "Engineering", ar: "هندسة", tr: "Mühendislik" },
  },
];

const sharedProjects = [
  {
    id: 11,
    title: "Immorise",
    image: "https://immorise.com/assets/logo-horizontal-light.svg",
    imageBackground: "light",
    tag: ["All", "Web"],
    tagline:
      "AI-powered Digital Twin & Lifecycle Management Platform for Real Estate",
    role: "Full-Stack Developer responsible for the Twin Platform web layer, API integrations, dashboards, and property management modules.",
    highlights: [
      "AI-automated BIM modeling from point cloud and scan data",
      "4D cloud collaboration for energy and space management",
      "ESG, due diligence, CO2 monitoring, and stakeholder access modules",
      "Area calculations using DIN277, Gif, and WoFlV standards",
      "Trusted by the NVIDIA AI Inception Program",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "BIM/IFC",
    ],
    gitUrl: null,
    hideGitHubButton: true,
    previewUrl: "https://immorise.com",
    youtubeUrl: "https://www.youtube.com/watch?v=3NF2b19d_y4",
    descriptions: {
      en: "Immorise is a German PropTech SaaS platform that automates real estate management through AI-driven 3D Digital Twins. It digitizes physical properties from 3D scans or floor plans, turns them into interactive BIM-compliant digital twins, and hosts them in a cloud 4D collaboration hub for owners, investors, asset managers, and facility teams.",
      ar: "Immorise is a German PropTech SaaS platform that automates real estate management through AI-driven 3D Digital Twins. It digitizes physical properties from 3D scans or floor plans, turns them into interactive BIM-compliant digital twins, and hosts them in a cloud 4D collaboration hub for owners, investors, asset managers, and facility teams.",
      tr: "Immorise, yapay zeka destekli 3D Dijital İkizler aracılığıyla gayrimenkul yönetimini otomatikleştiren bir Alman PropTech SaaS platformudur. Fiziksel mülkleri 3D taramalardan veya kat planlarından dijitalleştirir, bunları etkileşimli BIM uyumlu dijital ikizlere dönüştürür ve mülk sahipleri, yatırımcılar, varlık yöneticileri ve tesis ekipleri için bulut tabanlı bir 4D iş birliği merkezinde barındırır.",
    },
  },
  {
    id: 12,
    title: "Diwan Group",
    image:
      "https://static1.squarespace.com/static/6540ce1603700862d2ee2de7/t/65646db9d184914c4fe0c65b/1701080505355/Diwan_Logo_White+350px.png",
    tag: ["All", "Web"],
    tagline: "MENA's Leading Content Network & Influencer Marketing Platform",
    role: "Full-Stack Developer architecting core web infrastructure, onboarding, creator-brand matching, and content management backend.",
    highlights: [
      "Multi-role platform for creators, brands, and media producers",
      "Creator analytics and brand partnership matching engine",
      "Content management and media asset monetization workflows",
      "Multi-language MCN infrastructure for MENA audiences",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Multi-tenant",
    ],
    gitUrl: null,
    previewUrl: "https://www.diwangroup.com",
    descriptions: {
      en: "Diwan Group is a digital media company and Multi-Channel Network platform serving MENA's creator economy. The platform connects creators, brands, and producers through one ecosystem for channel growth, brand partnership matching, content management, media asset monetization, and audience engagement at scale.",
      ar: "Diwan Group is a digital media company and Multi-Channel Network platform serving MENA's creator economy. The platform connects creators, brands, and producers through one ecosystem for channel growth, brand partnership matching, content management, media asset monetization, and audience engagement at scale.",
      tr: "Diwan Group, Orta Doğu ve Kuzey Afrika (MENA) bölgesinin içerik oluşturucu ekonomisine hizmet veren bir dijital medya şirketi ve Çok Kanallı Ağ (MCN) platformudur. Platform; içerik oluşturucuları, markaları ve yapımcıları kanal büyümesi, marka ortaklığı eşleştirmesi, içerik yönetimi, medya varlığı paraya dönüştürme ve geniş ölçekli kitle katılımı için tek bir ekosistemde birleştirir.",
    },
  },
  {
    id: 13,
    title: "Bridge MENA",
    image: "https://bmms-landing.vercel.app/logo.png",
    tag: ["All", "Web"],
    tagline:
      "Full-Service MENA Market Entry & Business Formation Platform for UAE & Saudi Arabia",
    role: "Full-Stack Developer building the platform architecture, marketing site, service catalog, dynamic routing, consultation funnel, and cost calculator.",
    highlights: [
      "Dynamic catalog for 30+ services across UAE and KSA expansion tracks",
      "Business Setup Cost Calculator and consultation booking flow",
      "Multi-region SEO architecture with App Router and SSR",
      "Dedicated journeys for enterprises, SMEs, high-growth businesses, and startups",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Vercel",
    ],
    gitUrl: null,
    previewUrl: "https://bmms-landing.vercel.app",
    descriptions: {
      en: "Bridge MENA is a business expansion platform that guides international companies through UAE and Saudi market entry. It covers company formation, HR and payroll, government relations, serviced offices, industry-specific growth strategies, a consultation funnel, a resources hub, and a Business Setup Cost Calculator.",
      ar: "Bridge MENA is a business expansion platform that guides international companies through UAE and Saudi market entry. It covers company formation, HR and payroll, government relations, serviced offices, industry-specific growth strategies, a consultation funnel, a resources hub, and a Business Setup Cost Calculator.",
      tr: "Bridge MENA, uluslararası şirketlerin BAE ve Suudi Arabistan pazarına giriş süreçlerine rehberlik eden bir iş genişletme platformudur. Şirket kuruluşu, İK ve bordro, devlet ilişkileri, hazır ofisler, sektöre özel büyüme stratejileri, danışmanlık hunisi, kaynak merkezi ve İş Kurma Maliyeti Hesaplayıcısını kapsar.",
    },
  },
  {
    id: 14,
    title: "SDR Mobile - Field Sales",
    image:
      "https://acilimsoft.com/wp-content/uploads/2022/03/sdr-mobil-logo.svg",
    images: [
      "https://acilimsoft.com/wp-content/uploads/2022/03/sdr-mobil-logo.svg",
      "/images/projects/sdrmobile/1-route.png",
      "/images/projects/sdrmobile/2-charts.png",
      "/images/projects/sdrmobile/3-delivery.png",
    ],
    tag: ["All", "Web", "Mobile"],
    tagline:
      "Mobile Field Sales Management Platform for Every Industry & Scale",
    role: "Full-Stack Developer responsible for the mobile sales application, route optimization, real-time reporting dashboards, and ERP integration modules.",
    highlights: [
      "Real-time field sales tracking with GPS-based route optimization",
      "Hot sales and order collection with offline-first mobile support",
      "Customer visit management with photo/signature capture workflows",
      "Centralized reporting dashboard for sales team performance analytics",
      "ERP integration and multi-warehouse inventory synchronization",
      "Trusted by 1,000+ field users across FMCG and distribution sectors",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Mobile",
    ],
    gitUrl: null,
    previewUrl: "https://acilimsoft.com/mobil-saha-satis-programi/",
    descriptions: {
      en: "SDR Mobile is an enterprise field sales management platform by Açılımsoft that empowers sales teams with mobile tools for hot sales, order collection, route optimization, and real-time reporting. The platform provides easy-to-use mobile apps for field reps and full operational control for the back office, serving 1,000+ active field users across industries including FMCG, food & beverage, and wholesale distribution.",
      ar: "SDR Mobile هو منصة إدارة مبيعات ميدانية متكاملة من Açılımsoft تمكّن فرق المبيعات من أدوات متنقلة للبيع المباشر وجمع الطلبات وتحسين المسارات وإعداد التقارير الفورية. توفر المنصة تطبيقات جوال سهلة الاستخدام للمندوبين الميدانيين وتحكمًا تشغيليًا كاملاً للمكتب الرئيسي، وتخدم أكثر من 1,000 مستخدم ميداني نشط في قطاعات السلع الاستهلاكية والأغذية والتوزيع.",
      tr: "SDR Mobil, Açılımsoft tarafından geliştirilen ve satış ekiplerini sıcak satış, sipariş toplama, rota optimizasyonu ve gerçek zamanlı raporlama için mobil araçlarla güçlendiren kurumsal bir saha satış yönetimi platformudur. Platform, saha temsilcileri için kullanımı kolay mobil uygulamalar ve arka ofis için tam operasyonel kontrol sağlayarak hızlı tüketim ürünleri, yiyecek-içecek ve toptan dağıtım dahil olmak üzere çeşitli sektörlerde 1.000'den fazla aktif saha kullanıcısına hizmet vermektedir.",
    },
  },
  {
    id: 15,
    title: "Three-S - Field Team Management",
    image: "https://acilimsoft.com/wp-content/uploads/2022/04/thee-s-logo.svg",
    images: [
      "https://acilimsoft.com/wp-content/uploads/2022/04/thee-s-logo.svg",
      "/images/projects/threes/1-map.png",
      "/images/projects/threes/2-shelf.png",
      "/images/projects/threes/3-mobile.png",
      "/images/projects/threes/4-problem.png",
      "/images/projects/threes/5-report.png",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=HUdEMnmwy7w",
    tag: ["All", "Web", "Desktop", "Mobile"],
    tagline:
      "Field Team Management & Merchandising Platform for Real-Time Operations",
    role: "Full-Stack Developer building the field operations platform, route management system, POP tracking modules, and competitive analysis dashboards.",
    highlights: [
      "Route planning and field team GPS tracking with visit verification",
      "POP (Point of Purchase) tracking and shelf display compliance monitoring",
      "Competitive price analysis and shelf share measurement tools",
      "Stock tracking, ordering, and inventory management at retail level",
      "Problem reporting and note management for field operations",
      "Serving 5,000+ active field users with real-time data collection",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Mobile",
    ],
    gitUrl: null,
    hideGitHubButton: true,
    previewUrl: "https://acilimsoft.com/saha-ekip-yonetimi/",
    descriptions: {
      en: "Three-S is an enterprise field team management and merchandising platform by Açılımsoft that enables companies to plan, monitor, measure, and manage field operations in real time. The platform collects critical data about own and competitor products from retail points, provides route management, POP tracking, shelf compliance monitoring, competitive price analysis, and detailed reporting — serving 5,000+ active users across FMCG and retail sectors.",
      ar: "Three-S هو منصة إدارة فرق ميدانية ومتابعة تجارية متكاملة من Açılımsoft تمكّن الشركات من تخطيط ومراقبة وقياس وإدارة العمليات الميدانية في الوقت الفعلي. تجمع المنصة بيانات مهمة عن المنتجات الخاصة والمنافسة من نقاط البيع، وتوفر إدارة المسارات وتتبع نقاط الشراء ومراقبة الامتثال على الرفوف وتحليل الأسعار التنافسية وإعداد التقارير المفصلة — تخدم أكثر من 5,000 مستخدم نشط في قطاعات السلع الاستهلاكية والتجزئة.",
      tr: "Three-S, Açılımsoft tarafından geliştirilen ve şirketlerin saha operasyonlarını gerçek zamanlı olarak planlamasını, izlemesini, ölçmesini ve yönetmesini sağlayan kurumsal bir saha ekibi yönetimi ve tanzim-teşhir platformudur. Perakende noktalarından kendi ürünleri ve rakip ürünler hakkında kritik veriler toplayan platform, rota yönetimi, POP takibi, raf uyumluluğu izleme, rakip fiyat analizi ve detaylı raporlama sunarak hızlı tüketim ürünleri ve perakende sektörlerinde 5.000'den fazla aktif kullanıcıya hizmet vermektedir.",
    },
  },
  {
    id: 16,
    title: "SDR B2B - E-Commerce System",
    image: "https://acilimsoft.com/wp-content/uploads/2023/07/sdr-b2b-logo.svg",
    images: [
      "https://acilimsoft.com/wp-content/uploads/2023/07/sdr-b2b-logo.svg",
      "/images/projects/sdrb2b/1-order.png",
      "/images/projects/sdrb2b/2-templates.png",
      "/images/projects/sdrb2b/3-sync.png",
      "/images/projects/sdrb2b/4-permissions.png",
      "/images/projects/sdrb2b/5-analytics.png",
    ],
    tag: ["All", "Web"],
    tagline: "B2B Wholesale E-Commerce & Dealer Management Platform",
    role: "Full-Stack Developer architecting the B2B e-commerce platform, admin panel, order/payment processing, product catalog management, and dealer portal.",
    highlights: [
      "24/7 online wholesale store for B2B order and payment processing",
      "Easy-to-use admin panel for product catalog and inventory management",
      "Dealer-specific pricing, promotions, and order history tracking",
      "Shipment management and logistics coordination workflows",
      "Sales analytics and detailed business intelligence reporting",
      "Scalable multi-tenant architecture for growing dealer networks",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Docker",
    ],
    gitUrl: null,
    previewUrl: "https://acilimsoft.com/b2b-e-ticaret-sistemi/",
    descriptions: {
      en: "SDR B2B is an enterprise wholesale e-commerce and dealer management platform by Açılımsoft that simplifies B2B business processes. The platform provides a 24/7 online store for wholesale orders and payments, an intuitive admin panel for product and inventory management, dealer-specific pricing and promotions, shipment coordination, and comprehensive sales reporting — enabling businesses to build and manage their digital sales channels effortlessly.",
      ar: "SDR B2B هو منصة تجارة إلكترونية بالجملة وإدارة وكلاء متكاملة من Açılımsoft تبسّط عمليات الأعمال التجارية بين الشركات. توفر المنصة متجرًا إلكترونيًا يعمل على مدار الساعة لطلبات الجملة والمدفوعات، ولوحة إدارة سهلة الاستخدام لإدارة المنتجات والمخزون، وتسعير وعروض خاصة بالوكلاء، وتنسيق الشحنات، وتقارير مبيعات شاملة — مما يمكّن الشركات من بناء وإدارة قنوات مبيعاتها الرقمية بسهولة.",
      tr: "SDR B2B, Açılımsoft tarafından geliştirilen ve B2B iş süreçlerini basitleştiren kurumsal bir toptan e-ticaret ve bayi yönetimi platformudur. Platform, toptan sipariş ve ödeme işlemleri için 7/24 çevrimiçi mağaza, ürün ve envanter yönetimi için sezgisel bir yönetici paneli, bayiye özel fiyatlandırma ve promosyonlar, sevkiyat koordinasyonu ve kapsamlı satış raporlaması sunarak işletmelerin dijital satış kanallarını zahmetsizce oluşturmasını ve yönetmesini sağlar.",
    },
  },
  {
    id: 1,
    title: "FlowHR",
    image: "/images/projects/flowhr/logo.png",
    images: ["/images/projects/flowhr/logo.png", "/images/projects/1.png"],
    tag: ["All", "Web"],
    tagline: "Revolutionary HR Management & Employee Workforce Platform",
    role: "Full-Stack Developer designing the core HR architecture, employee profile indexing, automated attendance tracking, and role-based department permissions.",
    highlights: [
      "Comprehensive employee profiles, role management, and organizational structure mapping",
      "Automated leave tracking system with application workflows and balance tracking",
      "Real-time time & attendance monitoring with geofencing check-in capability",
      "Secured role-based access control (RBAC) guaranteeing compliance and data privacy",
      "Detailed analytics dashboard with exportable reporting formats for HR managers",
      "Scalable cloud setup supporting multi-department hierarchy configurations",
    ],
    techStack: ["Next.js", "Express.js", "MongoDB", "TypeScript"],
    gitUrl: "https://github.com/Karbejha/FlowHR",
    previewUrl: "https://flowhr.karbejha.me",
    descriptions: {
      en: "FlowHR is an enterprise-grade HR management platform that streamlines organization workflow, time tracking, leaf approvals, and analytics. Built using Next.js and TypeScript, the system integrates a comprehensive employee database, secure role-based access control, and real-time dashboard analytics, reducing administrative HR overhead by up to 60%.",
      ar: "FlowHR هو نظام متكامل لإدارة الموارد البشرية يبسط سير عمل المؤسسة، وتتبع الوقت، والموافقة على الإجازات، والتحليلات. تم بناء النظام باستخدام Next.js وTypeScript، وهو يدمj قاعدة بيانات شاملة للموظفين، وتحكمًا آمنًا في الوصول على أساس الأدوار، وتحليلات فورية للوحة التحكم، مما يقلل من العبء الإداري للموارد البشرية بنسبة تصل إلى 60٪.",
      tr: "FlowHR, kuruluş iş akışını, zaman takibini, izin onaylarını ve analizleri kolaylaştıran kurumsal düzeyde bir İK yönetim platformudur. Next.js ve TypeScript kullanılarak oluşturulan sistem, kapsamlı bir çalışan veri tabanını, güvenli rol tabanlı erişim kontrolünü ve gerçek zamanlı gösterge paneli analizlerini entegre ederek idari İK yükünü %60'a kadar azaltır.",
    },
  },
  {
    id: 6,
    title: "Rankify",
    image: "/images/projects/rankify/logo.png",
    images: ["/images/projects/rankify/logo.png", "/images/projects/6.png"],
    tag: ["All", "Web"],
    tagline: "SaaS SEO Marketing & Website Optimization Platform",
    role: "Full-Stack Developer building the SaaS application, analytics dashboards, SEO tracking algorithms, and integrated customer sign-up/pricing modules.",
    highlights: [
      "Advanced analytics dashboard with key metric charts and data-driven insights",
      "Library of customizable templates aligned with brand identity",
      "Comprehensive built-in SEO tools for search optimization and ranking",
      "Automated lead generation tools to capture and nurture high-quality prospects",
      "Mobile responsive design optimized for seamless cross-device performance",
      "Fully integrated social media management and email marketing campaign workflows",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST API",
      "SEO",
    ],
    gitUrl: "https://github.com/Karbejha/SaaS-website",
    previewUrl: "https://saas-website-pi.vercel.app/",
    descriptions: {
      en: "Rankify is a professional SEO marketing and website optimization SaaS platform that helps businesses scale their digital strategy. The platform integrates advanced analytics dashboards, customizable website templates, comprehensive search engine optimization tools, and lead generation capabilities — empowering users to code smarter and rank higher.",
      ar: "Rankify هي منصة SaaS احترافية للتسويق وتحسين محركات البحث وتصميم المواقع تساعد الشركات على توسيع استراتيجيتها الرقمية. تدمج المنصة لوحات تحكم متقدمة للتحليلات، وقوالب مواقع قابلة للتخصيص، وأدوات شاملة لتحسين محركات البحث، وقدرات توليد العملاء المحتملين — مما يمكن المستخدمين من البرمجة بذكاء والظهور في المراتب الأولى.",
      tr: "Rankify, işletmelerin dijital stratejilerini ölçeklendirmelerine yardımcı olan profesyonel bir SEO pazarlama ve web sitesi optimizasyonu SaaS platformudur. Gelişmiş analitik gösterge panellerini, özelleştirilebilir web sitesi şablonlarını, kapsamlı arama motoru optimizasyonu araçlarını ve olası satış yaratma yeteneklerini entegre ederek kullanıcıların daha akıllıca kod yazmasını ve daha üst sıralarda yer almasını sağlar.",
    },
  },
  {
    id: 3,
    title: "Misas - Sanal Market",
    image: "/images/projects/misas/logo.png",
    images: [
      "/images/projects/misas/logo.png",
      "/images/projects/misas/1-manav.png",
      "/images/projects/3.png",
    ],
    tag: ["All", "Web", "Mobile"],
    tagline: "Online Grocery E-Commerce & Hybrid Delivery Management Platform",
    role: "Full-Stack Developer leading the development of the grocery e-commerce web platform, hybrid mobile applications, product catalog system, and delivery management portal.",
    highlights: [
      "Customer delivery time slot selection and scheduling system",
      "Responsive web catalog with instant category filtering and search",
      "Hybrid mobile app (iOS & Android) with cart synchronization",
      "Secure online payment gateway and loyalty reward point integrations",
      "Real-time order dispatching and delivery route tracking dashboard",
      "Robust database layout optimized for 10,000+ items and daily orders",
    ],
    techStack: [
      "React",
      "React Native",
      "Node.js",
      "MySQL",
      "REST API",
      "E-Commerce",
    ],
    gitUrl: null,
    previewUrl: "https://misas.com.tr/",
    descriptions: {
      en: "Misas Sanal Market is a full-service online grocery delivery platform that allows customers in Elazığ, Turkey, to order fresh produce, dairy, meats, personal care, and household items either via the web or mobile app. The system coordinates inventory across retail stores, facilitates order dispatching, enables secure payment processing, and optimizes delivery logistics to ensure groceries arrive at the user's door on their scheduled time slots.",
      ar: "Misas Sanal Market هي منصة متكاملة لتوصيل طلبات البقالة والمواد الغذائية عبر الإنترنت تتيح للعملاء طلب المنتجات الطازجة، ومنتجات الألبان، واللحوم، ومستحضرات العناية الشخصية، والمستلزمات المنزلية عبر الموقع أو تطبيق الجوال. ينسق النظام المخزون عبر المتاجر، ويسهل توزيع الطلبات، ويوفر معالجة آمنة للمدفوعات، ويحسن لوجستيات التوصيل لضمان وصول الطلبات إلى باب العميل في الفترات الزمنية المحددة.",
      tr: "Misaş Sanal Market, Elazığ'daki müşterilerin web veya mobil uygulama üzerinden taze meyve-sebze, süt ürünleri, et, kişisel bakım ve ev temizlik ürünleri sipariş etmelerini sağlayan tam hizmet sunan bir çevrimiçi market teslimat platformudur. Sistem, perakende mağazalar genelindeki envanteri koordine eder, sipariş gönderimini kolaylaştırır, güvenli ödeme işlemlerini sağlar ve siparişlerin belirlenen zaman dilimlerinde kullanıcının kapısına ulaşmasını garanti etmek için teslimat lojistiğini optimize eder.",
    },
  },
  {
    id: 17,
    featured: true,
    slug: "mpais",
    title: "Maritime Ports Authority Information System (MPAIS)",
    image: "/images/projects/mpais/3-weather.png",
    images: [
      "/images/projects/mpais/3-weather.png",
      "/images/projects/mpais/1-login.png",
      "/images/projects/mpais/2-reports.png",
      "/images/projects/mpais/4-live-map.png",
      "/images/projects/mpais/5-request-review.png",
      "/images/projects/mpais/6-request-print.png",
      "/images/projects/mpais/7-officer-dashboard.png",
      "/images/projects/mpais/8-request-templates.png",
      "/images/projects/mpais/9-live-map-alt.png",
      "/images/projects/mpais/10-request-print-alt.png",
    ],
    tag: ["All", "Web"],
    tagline:
      "Comprehensive Vessel Traffic, Port Operations & Maritime Compliance Platform",
    taglines: {
      en: "Comprehensive Vessel Traffic, Port Operations & Maritime Compliance Platform",
      ar: "منصة شاملة لحركة السفن وعمليات الميناء والامتثال البحري",
      tr: "Kapsamlı Gemi Trafiği, Liman Operasyonları ve Denizcilik Uyumluluğu Platformu",
    },
    role: "Full-Stack Developer responsible for the monorepo architecture, secure backend APIs, role-based dashboards, vessel workflows, reporting, audit logs, and multilingual frontend.",
    roles: {
      en: "Full-Stack Developer responsible for the monorepo architecture, secure backend APIs, role-based dashboards, vessel workflows, reporting, audit logs, and multilingual frontend.",
      ar: "مطوّر Full-Stack مسؤول عن بنية المونوريبو، وواجهات API الخلفية الآمنة، ولوحات التحكم المعتمدة على الأدوار، وسير عمل السفن، والتقارير، وسجلات التدقيق، والواجهة الأمامية متعددة اللغات.",
      tr: "Monorepo mimarisi, güvenli backend API'leri, rol tabanlı paneller, gemi iş akışları, raporlama, denetim kayıtları ve çok dilli frontend'den sorumlu Full-Stack Developer.",
    },
    highlights: [
      "Multi-role platform for shipping agents, port officers, VTS operators, and admins",
      "Vessel registration, arrival notifications, ETA changes, and movement tracking",
      "Pratique clearance workflow with certificate checks, attachments, and operation logs",
      "VTS logbook, incident logs, equipment status logs, watch shift logs, and statistics",
      "Violations, detentions, boycott blacklist, accounting, daily reports, and audit logging",
      "Shared Zod schemas and TypeScript types across frontend and backend",
      "Secure API design with authentication, authorization, validation, and audit trails",
      "Multilingual Next.js interface using next-intl",
    ],
    highlightsByLocale: {
      en: [
        "Multi-role platform for shipping agents, port officers, VTS operators, and admins",
        "Vessel registration, arrival notifications, ETA changes, and movement tracking",
        "Pratique clearance workflow with certificate checks, attachments, and operation logs",
        "VTS logbook, incident logs, equipment status logs, watch shift logs, and statistics",
        "Violations, detentions, boycott blacklist, accounting, daily reports, and audit logging",
        "Shared Zod schemas and TypeScript types across frontend and backend",
        "Secure API design with authentication, authorization, validation, and audit trails",
        "Multilingual Next.js interface using next-intl",
      ],
      ar: [
        "منصة متعددة الأدوار لوكلاء الشحن وضباط الميناء ومشغلي VTS والمديرين",
        "تسجيل السفن وإشعارات الوصول وتعديلات وقت الوصول المتوقع وتتبع الحركة",
        "سير عمل لشهادات البراتيك مع فحص الشهادات والمرفقات وسجلات العمليات",
        "سجل VTS وسجلات الحوادث وحالة المعدات والمناوبات والإحصاءات",
        "إدارة المخالفات والاحتجاز والقائمة السوداء والمحاسبة والتقارير اليومية وسجلات التدقيق",
        "مخططات Zod وأنواع TypeScript مشتركة بين الواجهة الأمامية والخلفية",
        "تصميم API آمن مع المصادقة والتفويض والتحقق من المدخلات وسجلات التدقيق",
        "واجهة Next.js متعددة اللغات باستخدام next-intl",
      ],
      tr: [
        "Nakliye acenteleri, liman görevlileri, VTS operatörleri ve yöneticiler için çok rollü platform",
        "Gemi kaydı, varış bildirimleri, ETA değişiklikleri ve hareket takibi",
        "Sertifika kontrolleri, ekler ve operasyon kayıtları içeren pratique izin süreci",
        "VTS seyir defteri, olay kayıtları, ekipman durum kayıtları, vardiya kayıtları ve istatistikler",
        "İhlaller, alıkoymalar, boykot kara listesi, muhasebe, günlük raporlar ve denetim kayıtları",
        "Frontend ve backend arasında paylaşılan Zod şemaları ve TypeScript tipleri",
        "Kimlik doğrulama, yetkilendirme, doğrulama ve denetim kayıtları içeren güvenli API tasarımı",
        "next-intl kullanan çok dilli Next.js arayüzü",
      ],
    },
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "Docker",
      "Tailwind CSS",
      "next-intl",
    ],
    gitUrl: null,
    previewUrl: "https://marine-system-web.vercel.app",
    descriptions: {
      en: "MPAIS is a production-style maritime port authority information system for managing vessel traffic, port officer workflows, shipping agent operations, VTS logs, pratique clearances, arrival notifications, vessel movements, violations, detentions, accounting records, reports, and audit trails. The system is built as a full-stack TypeScript monorepo with a secure Express API, Prisma/PostgreSQL data model, shared Zod validation, and a multilingual Next.js dashboard for agents, officers, and VTS operators.",
      ar: "MPAIS هو نظام معلومات متكامل لهيئات الموانئ البحرية لإدارة حركة السفن وعمليات الميناء وسير عمل وكلاء الشحن وضباط الميناء ومشغلي VTS. يدعم النظام إشعارات الوصول، تسجيل السفن، شهادات البراتيك، حركة السفن، المخالفات، الاحتجاز، السجلات المحاسبية، التقارير، وسجلات التدقيق. تم بناؤه كتطبيق Full-Stack باستخدام TypeScript مع Next.js وExpress وPrisma وPostgreSQL وZod وواجهة متعددة اللغات.",
      tr: "MPAIS, deniz limanı otoriteleri için geliştirilen kapsamlı bir bilgi yönetim sistemidir. Gemi trafiği, liman görevlisi süreçleri, acente işlemleri, VTS kayıtları, pratique izinleri, varış bildirimleri, gemi hareketleri, ihlaller, alıkoymalar, muhasebe kayıtları, raporlar ve denetim kayıtlarını yönetir. Sistem TypeScript tabanlı bir monorepo olarak Next.js, Express, Prisma, PostgreSQL, Zod ve çok dilli bir kullanıcı arayüzü ile geliştirilmiştir.",
    },
  },
  {
    id: 18,
    featured: true,
    slug: "ea400",
    title: "EA400 Hydrographic Data Processor & Bathymetric Modeler",
    image: "/images/projects/ea400/1-overview.png",
    images: [
      "/images/projects/ea400/1-overview.png",
      "/images/projects/ea400/2-map-view.png",
    ],
    tag: ["All", "Web", "Engineering"],
    tagline: "High-Performance Hydrographic Data Processing, Temporal GPS Interpolation & Seafloor Bathymetry Modeling Platform",
    taglines: {
      en: "High-Performance Hydrographic Data Processing, Temporal GPS Interpolation & Seafloor Bathymetry Modeling Platform",
      ar: "منصة متطورة لمعالجة البيانات الهيدروغرافية والمزامنة الزمنية ونمذجة تضاريس قاع البحر",
      tr: "Yüksek Başarımlı Hidrografik Veri İşleme, Zamansal GPS İnterpolasyonu ve Batimetrik Taban Modelleme Platformu",
    },
    role: "Lead Full-Stack & Systems Engineer responsible for low-level binary parser algorithms, microsecond temporal GPS synchronization, metric geodetic transformations (UTM), bathymetric surface interpolation engines (TIN/IDW), and local WebGL bathymetry visualization.",
    roles: {
      en: "Lead Full-Stack & Systems Engineer responsible for low-level binary parser algorithms, microsecond temporal GPS synchronization, metric geodetic transformations (UTM), bathymetric surface interpolation engines (TIN/IDW), and local WebGL bathymetry visualization.",
      ar: "مهندس برمجيات ونظم متكاملة مسؤول عن تطوير خوارزميات فك تشفير الملفات الثنائية، المزامنة الزمنية الدقيقة، التحويل الجيوديسي المتري (UTM)، نمذجة أسطح الأعماق (TIN/IDW)، وعارض الخرائط التفاعلي.",
      tr: "Düşük seviyeli ikili ayrıştırıcı algoritmaları, mikrosaniye zamansal GPS senkronizasyonu, metrik jeodezik dönüşümler (UTM), batimetrik yüzey enterpolasyon motorları (TIN/IDW) ve yerel WebGL haritalamasından sorumlu Sistem ve Full-Stack Mühendisi.",
    },
    highlights: [
      "Streaming binary parser decoding Kongsberg EA400 datagrams (CON0, NME0, DEP0) with minimal memory footprint",
      "Microsecond-level temporal synchronization and binary-search linear interpolation of NMEA navigation fixes",
      "Loss-of-lock detection converting unacquired bottom pings (0.0m) to clean null values for engineering safety",
      "High-precision geodetic transformation engine projecting WGS 84 lat/lon to planar metric UTM Zone 36N (EPSG:32636)",
      "Seafloor bathymetric gridding via Constrained Delaunay TIN & IDW with large-triangle pruning to prevent seabed hallucination",
      "Automated derivation of depth contours (GeoJSON) and 32-bit floating-point GeoTIFF rasters with embedded hydrographic metadata",
      "Dynamic Web Mercator raster tile streaming on the fly via rio-tiler without third-party GIS map servers",
      "100% air-gapped, offline-ready containerized architecture tailored for offshore survey vessels with zero cloud reliance",
    ],
    highlightsByLocale: {
      en: [
        "Streaming binary parser decoding Kongsberg EA400 datagrams (CON0, NME0, DEP0) with minimal memory footprint",
        "Microsecond-level temporal synchronization and binary-search linear interpolation of NMEA navigation fixes",
        "Loss-of-lock detection converting unacquired bottom pings (0.0m) to clean null values for engineering safety",
        "High-precision geodetic transformation engine projecting WGS 84 lat/lon to planar metric UTM Zone 36N (EPSG:32636)",
        "Seafloor bathymetric gridding via Constrained Delaunay TIN & IDW with large-triangle pruning to prevent seabed hallucination",
        "Automated derivation of depth contours (GeoJSON) and 32-bit floating-point GeoTIFF rasters with embedded hydrographic metadata",
        "Dynamic Web Mercator raster tile streaming on the fly via rio-tiler without third-party GIS map servers",
        "100% air-gapped, offline-ready containerized architecture tailored for offshore survey vessels with zero cloud reliance",
      ],
      ar: [
        "فك تشفير تدفق البيانات الثنائية لأجهزة Kongsberg EA400 (CON0, NME0, DEP0) بأقل استهلاك ممكن للذاكرة",
        "مزامنة زمنية فائقة الدقة بالميكروثانية واستيفاء خطي لمواقع NMEA باستخدام البحث الثنائي",
        "معالجة ذكية لحالات فقدان ارتداد الإشارة (0.0 م) وتحويلها إلى حقول فارغة لحماية الحسابات الهندسية",
        "محرك تحويل جيوديسي عالي الدقة لإسقاط الإحداثيات إلى النظام المتري WGS 84 / UTM Zone 36N",
        "توليد أسطح تضاريس قاع البحر عبر Delaunay TIN و IDW مع ميزة حماية الفجوات غير الممسوحة من التنبؤ الوهمي",
        "اشتقاق خطوط الأعماق الكنتورية (GeoJSON) ونماذج الارتفاعات الرقمية بصيغة 32-bit Float GeoTIFF",
        "بث ديناميكي لبلاطات الخرائط على الخادم المحلي باستخدام rio-tiler دون الحاجة لخوادم GIS وسيطة",
        "معمارية معزولة بالكامل (Air-Gapped) وتعمل دون اتصال بالإنترنت مناسبة لبيئات السفن في عرض البحر",
      ],
      tr: [
        "Kongsberg EA400 datagramlarını (CON0, NME0, DEP0) minimum bellek kullanımıyla çözen akış ikili ayrıştırıcısı",
        "Mikrosaniye hassasiyetinde zamansal senkronizasyon ve ikili arama ile NMEA seyir düzeltmelerinin doğrusal enterpolasyonu",
        "Mühendislik güvenliği için kilit kaybı tespit edilerek okunamayan dip derinliklerinin (0.0m) temiz null değerlere dönüştürülmesi",
        "WGS 84 coğrafi koordinatlarını düzlemsel metrik UTM Zone 36N (EPSG:32636) sistemine dönüştüren yüksek hassasiyetli jeodezik motor",
        "Haritalanmamış alanlarda yapay taban tahminini önlemek amacıyla büyük üçgen budamalı Kısıtlı Delaunay TIN ve IDW ile taban ızgaralaması",
        "Gömülü hidrografik üstveriler içeren derinlik eşyükselti eğrileri (GeoJSON) ve 32-bit Float GeoTIFF rasterlarının otomatik üretimi",
        "Üçüncü taraf GIS harita sunucularına ihtiyaç duymadan rio-tiler ile anlık dinamik Web Mercator karo akışı",
        "Açık deniz araştırma gemileri için özel olarak tasarlanmış, sıfır bulut bağımlılığına sahip %100 çevrimdışı ve yalıtılmış (air-gapped) mimari",
      ],
    },
    techStack: [
      "Python",
      "FastAPI",
      "NumPy",
      "SciPy",
      "RasterIO",
      "pyproj",
      "ContourPy",
      "rio-tiler",
      "MapLibre GL",
      "Docker",
    ],
    gitUrl: "https://github.com/Karbejha/kongsberg-ea400-converter",
    previewUrl: null,
    descriptions: {
      en: "EA400 Converter is a specialized hydrographic data processing and bathymetric modeling platform designed for Kongsberg EA400 Single-Beam Echo Sounders. The application extracts raw dual-frequency soundings (38 kHz and 200 kHz) and NMEA navigation records from binary .out survey files, performs microsecond linear temporal interpolation, and projects coordinates to planar metric systems (UTM Zone 36N). It generates seafloor terrain surfaces using Constrained Delaunay TIN and IDW with gap-pruning safeguards, extracts derived depth contours, and exports production-grade deliverables (32-bit Float GeoTIFF, CAD NEZ matrices, XYZ point clouds, and GeoJSON tracks) alongside an interactive, air-gapped WebGL bathymetry inspector.",
      ar: "EA400 Converter هو نظام برمجي وهندسي متخصص لمعالجة بيانات المسح الهيدروغرافي ونمذجة قاع البحر لأجهزة Kongsberg EA400 أحادية الحزمة. يستخرج النظام نبضات الأعماق للتردد المزدوج (38 و 200 كيلوهرتز) وبيانات الملاحة من الملفات الثنائية (.out)، ويجري مزامنة زمنية خطية بالميكروثانية مع تحويل الإحداثيات إلى النظام المتري (UTM Zone 36N). يقوم بتوليد أسطح تضاريس القاع عبر Delaunay TIN و IDW مع حماية الفجوات غير الممسوحة، واشتقاق خطوط الكنتور، وتصدير مخرجات جاهزة لبرامج CAD و GIS (مثل GeoTIFF 32-bit ومصفوفات NEZ وسحب نقاط XYZ) مدعومة بخريطة تفاعلية محلية بالكامل.",
      tr: "EA400 Converter, Kongsberg EA400 Tek Hüzmeli İskandiller için geliştirilmiş özel bir hidrografik veri işleme ve batimetrik modelleme platformudur. İkili .out araştırma dosyalarından çift frekanslı (38 kHz ve 200 kHz) derinlik verilerini ve NMEA seyir kayıtlarını ayıklar, mikrosaniye doğrusal zamansal enterpolasyon gerçekleştirir ve koordinatları düzlemsel metrik sistemlere (UTM Zone 36N) dönüştürür. Kısıtlı Delaunay TIN ve IDW kullanarak taban topoğrafyası yüzeyleri oluşturur, derinlik eşyükselti eğrilerini çıkarır ve tamamen çevrimdışı çalışan etkileşimli bir WebGL haritası eşliğinde üretime hazır mühendislik çıktıları (32-bit Float GeoTIFF, CAD NEZ matrisleri, XYZ nokta bulutları) üretir.",
    },
  },
];

const projectTranslations = {
  11: {
    titles: { ar: "Immorise", tr: "Immorise" },
    taglines: {
      ar: "منصة التوأم الرقمي وإدارة دورة الحياة للعقارات المدعومة بالذكاء الاصطناعي",
      tr: "Gayrimenkul için Yapay Zekâ Destekli Dijital İkiz ve Yaşam Döngüsü Yönetim Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن طبقة الويب لمنصة التوأم الرقمي وتكاملات API ولوحات التحكم ووحدات إدارة العقارات.",
      tr: "Dijital İkiz Platformunun web katmanı, API entegrasyonları, panelleri ve mülk yönetimi modüllerinden sorumlu Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "نمذجة BIM آلية بالذكاء الاصطناعي من بيانات السحب النقطية والمسح",
        "تعاون سحابي رباعي الأبعاد لإدارة الطاقة والمساحات",
        "وحدات ESG والعناية الواجبة ومراقبة ثاني أكسيد الكربون وإدارة وصول أصحاب المصلحة",
        "حساب المساحات وفق معايير DIN277 وGif وWoFlV",
        "موثوق به ضمن برنامج NVIDIA AI Inception",
      ],
      tr: [
        "Nokta bulutu ve tarama verilerinden yapay zekâ destekli otomatik BIM modelleme",
        "Enerji ve alan yönetimi için 4D bulut iş birliği",
        "ESG, durum tespiti, CO2 izleme ve paydaş erişim modülleri",
        "DIN277, Gif ve WoFlV standartlarına göre alan hesaplamaları",
        "NVIDIA AI Inception Programı tarafından güvenilen platform",
      ],
    },
    descriptions: {
      ar: "Immorise هي منصة SaaS ألمانية في مجال التقنية العقارية تعمل على أتمتة إدارة العقارات من خلال توائم رقمية ثلاثية الأبعاد مدعومة بالذكاء الاصطناعي. تعمل على رقمنة العقارات الفعلية انطلاقًا من عمليات المسح ثلاثي الأبعاد أو المخططات، وتحويلها إلى توائم رقمية تفاعلية متوافقة مع BIM، واستضافتها ضمن مركز تعاون سحابي رباعي الأبعاد للمالكين والمستثمرين ومديري الأصول وفرق المرافق.",
    },
  },
  12: {
    titles: { ar: "Diwan Group", tr: "Diwan Group" },
    taglines: {
      ar: "شبكة المحتوى الرائدة ومنصة تسويق المؤثرين في منطقة الشرق الأوسط وشمال أفريقيا",
      tr: "MENA'nın Önde Gelen İçerik Ağı ve Influencer Pazarlama Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن هندسة البنية الأساسية للويب وعمليات الانضمام ومطابقة المبدعين مع العلامات التجارية وخلفية إدارة المحتوى.",
      tr: "Temel web altyapısı, onboarding, içerik üreticisi-marka eşleştirme ve içerik yönetimi backend mimarisinden sorumlu Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "منصة متعددة الأدوار للمبدعين والعلامات التجارية ومنتجي الوسائط",
        "تحليلات المبدعين ومحرك مطابقة شراكات العلامات التجارية",
        "سير عمل لإدارة المحتوى وتحقيق الدخل من الأصول الإعلامية",
        "بنية MCN متعددة اللغات لجمهور الشرق الأوسط وشمال أفريقيا",
      ],
      tr: [
        "İçerik üreticileri, markalar ve medya yapımcıları için çok rollü platform",
        "İçerik üreticisi analizleri ve marka ortaklığı eşleştirme motoru",
        "İçerik yönetimi ve medya varlıklarından gelir elde etme iş akışları",
        "MENA kitleleri için çok dilli MCN altyapısı",
      ],
    },
    descriptions: {
      ar: "Diwan Group، شركة إعلامية رقمية ومنصة شبكة متعددة القنوات، تخدم اقتصاد المبدعين في منطقة الشرق الأوسط وشمال أفريقيا. تجمع المنصة المبدعين والعلامات التجارية والمنتجين ضمن منظومة واحدة لنمو القنوات ومطابقة الشراكات وإدارة المحتوى وتحقيق الدخل من الأصول الإعلامية والتفاعل مع الجمهور على نطاق واسع.",
    },
  },
  13: {
    titles: { ar: "Bridge MENA", tr: "Bridge MENA" },
    taglines: {
      ar: "منصة متكاملة لدخول أسواق الشرق الأوسط وتأسيس الأعمال في الإمارات والسعودية",
      tr: "BAE ve Suudi Arabistan için Tam Hizmet MENA Pazarına Giriş ve Şirket Kuruluşu Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن بناء بنية المنصة والموقع التسويقي وكتالوج الخدمات والتوجيه الديناميكي ومسار الاستشارات وحاسبة التكاليف.",
      tr: "Platform mimarisi, pazarlama sitesi, hizmet kataloğu, dinamik yönlendirme, danışmanlık hunisi ve maliyet hesaplayıcısını geliştiren Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "كتالوج ديناميكي يضم أكثر من 30 خدمة لمسارات التوسع في الإمارات والسعودية",
        "حاسبة تكلفة تأسيس الأعمال ومسار حجز الاستشارات",
        "بنية SEO متعددة المناطق باستخدام App Router وSSR",
        "رحلات مخصصة للشركات والمؤسسات الصغيرة والمتوسطة والشركات الناشئة",
      ],
      tr: [
        "BAE ve Suudi Arabistan genişleme rotalarında 30'dan fazla hizmet içeren dinamik katalog",
        "Şirket Kuruluşu Maliyet Hesaplayıcısı ve danışmanlık rezervasyon akışı",
        "App Router ve SSR kullanan çok bölgeli SEO mimarisi",
        "Kurumsal şirketler, KOBİ'ler, hızlı büyüyen işletmeler ve girişimler için özel yolculuklar",
      ],
    },
    descriptions: {
      ar: "Bridge MENA هي منصة لتوسّع الأعمال ترشد الشركات الدولية خلال دخول أسواق الإمارات والسعودية. تشمل تأسيس الشركات والموارد البشرية والرواتب والعلاقات الحكومية والمكاتب المجهزة واستراتيجيات النمو المتخصصة ومسار الاستشارات ومركز الموارد وحاسبة تكلفة تأسيس الأعمال.",
    },
  },
  14: {
    titles: {
      ar: "SDR Mobile - المبيعات الميدانية",
      tr: "SDR Mobil - Saha Satışı",
    },
    taglines: {
      ar: "منصة إدارة المبيعات الميدانية عبر الجوال لكل صناعة وحجم",
      tr: "Her Sektör ve Ölçek için Mobil Saha Satış Yönetim Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن تطبيق المبيعات الميدانية للجوال وتحسين المسارات ولوحات التقارير الفورية ووحدات تكامل ERP.",
      tr: "Mobil satış uygulaması, rota optimizasyonu, gerçek zamanlı raporlama panelleri ve ERP entegrasyon modüllerinden sorumlu Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "تتبع المبيعات الميدانية الفوري مع تحسين المسارات بالاعتماد على GPS",
        "المبيعات الساخنة وجمع الطلبات مع دعم العمل دون اتصال أولًا",
        "إدارة زيارات العملاء مع التقاط الصور والتوقيعات",
        "لوحة تقارير مركزية لتحليل أداء فريق المبيعات",
        "تكامل ERP ومزامنة المخزون بين المستودعات",
        "موثوق به من أكثر من 1,000 مستخدم ميداني في قطاعات السلع الاستهلاكية والتوزيع",
      ],
      tr: [
        "GPS tabanlı rota optimizasyonu ile gerçek zamanlı saha satış takibi",
        "Çevrimdışı öncelikli mobil destekle sıcak satış ve sipariş toplama",
        "Fotoğraf ve imza yakalama akışlarıyla müşteri ziyaret yönetimi",
        "Satış ekibi performans analizleri için merkezi raporlama paneli",
        "ERP entegrasyonu ve çoklu depo envanter senkronizasyonu",
        "FMCG ve dağıtım sektörlerinde 1.000'den fazla saha kullanıcısı tarafından kullanılıyor",
      ],
    },
  },
  15: {
    titles: {
      ar: "Three-S - إدارة الفرق الميدانية",
      tr: "Three-S - Saha Ekibi Yönetimi",
    },
    taglines: {
      ar: "منصة إدارة الفرق الميدانية والتسويق الميداني للعمليات الفورية",
      tr: "Gerçek Zamanlı Operasyonlar için Saha Ekibi Yönetimi ve Merchandising Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن بناء منصة العمليات الميدانية ونظام إدارة المسارات ووحدات تتبع نقاط البيع ولوحات تحليل المنافسة.",
      tr: "Saha operasyonları platformu, rota yönetim sistemi, POP takip modülleri ve rekabet analizi panellerini geliştiren Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "تخطيط المسارات وتتبع الفرق الميدانية عبر GPS مع التحقق من الزيارات",
        "تتبع نقاط البيع ومراقبة الالتزام بعروض الرفوف",
        "أدوات تحليل الأسعار التنافسية وقياس حصة الرفوف",
        "تتبع المخزون والطلبات وإدارة المخزون على مستوى المتجر",
        "الإبلاغ عن المشكلات وإدارة الملاحظات للعمليات الميدانية",
        "يخدم أكثر من 5,000 مستخدم ميداني نشط مع جمع البيانات الفوري",
      ],
      tr: [
        "Ziyaret doğrulamayla rota planlama ve GPS saha ekibi takibi",
        "POP takibi ve raf sergileme uyumluluğu izleme",
        "Rekabetçi fiyat analizi ve raf payı ölçüm araçları",
        "Perakende seviyesinde stok takibi, sipariş ve envanter yönetimi",
        "Saha operasyonları için sorun bildirme ve not yönetimi",
        "Gerçek zamanlı veri toplamayla 5.000'den fazla aktif saha kullanıcısına hizmet",
      ],
    },
  },
  16: {
    titles: {
      ar: "SDR B2B - نظام التجارة الإلكترونية",
      tr: "SDR B2B - E-Ticaret Sistemi",
    },
    taglines: {
      ar: "منصة التجارة الإلكترونية بالجملة وإدارة الوكلاء بين الشركات",
      tr: "B2B Toptan E-Ticaret ve Bayi Yönetim Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن هندسة منصة التجارة الإلكترونية بين الشركات ولوحة الإدارة ومعالجة الطلبات والمدفوعات وإدارة كتالوج المنتجات وبوابة الوكلاء.",
      tr: "B2B e-ticaret platformu, yönetim paneli, sipariş/ödeme işleme, ürün kataloğu yönetimi ve bayi portalı mimarisinden sorumlu Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "متجر جملة إلكتروني يعمل على مدار الساعة لمعالجة الطلبات والمدفوعات بين الشركات",
        "لوحة إدارة سهلة لإدارة كتالوج المنتجات والمخزون",
        "أسعار وعروض مخصصة للوكلاء مع تتبع سجل الطلبات",
        "سير عمل لإدارة الشحن وتنسيق الخدمات اللوجستية",
        "تحليلات المبيعات وتقارير ذكاء أعمال مفصلة",
        "بنية متعددة المستأجرين قابلة للتوسع مع نمو شبكة الوكلاء",
      ],
      tr: [
        "B2B sipariş ve ödeme işlemleri için 7/24 çevrimiçi toptan mağaza",
        "Ürün kataloğu ve envanter yönetimi için kullanımı kolay yönetim paneli",
        "Bayiye özel fiyatlandırma, promosyonlar ve sipariş geçmişi takibi",
        "Sevkiyat yönetimi ve lojistik koordinasyon iş akışları",
        "Satış analizleri ve ayrıntılı iş zekâsı raporlaması",
        "Büyüyen bayi ağları için ölçeklenebilir çok kiracılı mimari",
      ],
    },
  },
  1: {
    titles: { ar: "FlowHR", tr: "FlowHR" },
    taglines: {
      ar: "منصة متطورة لإدارة الموارد البشرية والقوى العاملة",
      tr: "Devrimci İK Yönetimi ve Çalışan İş Gücü Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن تصميم بنية الموارد البشرية الأساسية وفهرسة ملفات الموظفين وتتبع الحضور الآلي وصلاحيات الأقسام المعتمدة على الأدوار.",
      tr: "Temel İK mimarisi, çalışan profili indeksleme, otomatik devam takibi ve rol tabanlı departman izinlerini tasarlayan Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "ملفات شاملة للموظفين وإدارة الأدوار ورسم هيكل المؤسسة",
        "نظام آلي لتتبع الإجازات مع سير عمل الطلبات ومتابعة الأرصدة",
        "مراقبة فورية للوقت والحضور مع إمكانية تسجيل الدخول عبر تحديد النطاق الجغرافي",
        "تحكم آمن بالوصول قائم على الأدوار لضمان الامتثال وخصوصية البيانات",
        "لوحة تحليلات مفصلة مع صيغ تقارير قابلة للتصدير لمديري الموارد البشرية",
        "إعداد سحابي قابل للتوسع يدعم هياكل الأقسام متعددة المستويات",
      ],
      tr: [
        "Kapsamlı çalışan profilleri, rol yönetimi ve organizasyon yapısı haritalama",
        "Başvuru akışları ve bakiye takibi içeren otomatik izin takip sistemi",
        "Coğrafi sınırlandırmalı giriş özelliğiyle gerçek zamanlı zaman ve devam takibi",
        "Uyumluluk ve veri gizliliğini güvence altına alan rol tabanlı erişim kontrolü",
        "İK yöneticileri için dışa aktarılabilir rapor formatlarına sahip ayrıntılı analiz paneli",
        "Çok departmanlı hiyerarşi yapılarını destekleyen ölçeklenebilir bulut kurulumu",
      ],
    },
  },
  6: {
    titles: { ar: "Rankify", tr: "Rankify" },
    taglines: {
      ar: "منصة SaaS لتسويق تحسين محركات البحث وتحسين المواقع",
      tr: "SaaS SEO Pazarlama ve Web Sitesi Optimizasyon Platformu",
    },
    roles: {
      ar: "مطور Full-Stack مسؤول عن بناء تطبيق SaaS ولوحات التحليلات وخوارزميات تتبع SEO ووحدات التسجيل والتسعير المتكاملة للعملاء.",
      tr: "SaaS uygulaması, analiz panelleri, SEO takip algoritmaları ve entegre müşteri kayıt/fiyatlandırma modüllerini geliştiren Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "لوحة تحليلات متقدمة مع مخططات للمقاييس الأساسية ورؤى قائمة على البيانات",
        "مكتبة قوالب قابلة للتخصيص ومتوافقة مع هوية العلامة التجارية",
        "أدوات SEO مدمجة وشاملة لتحسين البحث والترتيب",
        "أدوات آلية لتوليد العملاء المحتملين وجذب العملاء ذوي الجودة",
        "تصميم متجاوب مع الجوال ومحسّن للأداء عبر الأجهزة المختلفة",
        "إدارة متكاملة لوسائل التواصل وحملات التسويق عبر البريد الإلكتروني",
      ],
      tr: [
        "Temel metrik grafikleri ve veri odaklı içgörüler içeren gelişmiş analiz paneli",
        "Marka kimliğiyle uyumlu özelleştirilebilir şablon kütüphanesi",
        "Arama optimizasyonu ve sıralama için kapsamlı yerleşik SEO araçları",
        "Kaliteli aday müşterileri yakalayıp beslemek için otomatik müşteri adayı oluşturma araçları",
        "Cihazlar arası sorunsuz performans için optimize edilmiş mobil uyumlu tasarım",
        "Entegre sosyal medya yönetimi ve e-posta pazarlama kampanyası iş akışları",
      ],
    },
  },
  3: {
    titles: {
      ar: "ميساس - السوق الافتراضي",
      tr: "Misas - Sanal Market",
    },
    taglines: {
      ar: "منصة متكاملة للتجارة الإلكترونية للبقالة وإدارة التوصيل الهجينة",
      tr: "Çevrimiçi Market E-Ticaret ve Hibrit Teslimat Yönetim Platformu",
    },
    roles: {
      ar: "مطور Full-Stack يقود تطوير منصة تجارة البقالة الإلكترونية وتطبيقات الجوال الهجينة ونظام كتالوج المنتجات وبوابة إدارة التوصيل.",
      tr: "Market e-ticaret web platformu, hibrit mobil uygulamalar, ürün kataloğu sistemi ve teslimat yönetim portalının geliştirilmesine liderlik eden Full-Stack Developer.",
    },
    highlights: {
      ar: [
        "نظام اختيار وجدولة الفترات الزمنية لتوصيل طلبات العملاء",
        "كتالوج ويب متجاوب مع تصفية فورية للفئات والبحث",
        "تطبيق جوال هجين لنظامي iOS وAndroid مع مزامنة السلة",
        "تكاملات آمنة لبوابة الدفع الإلكتروني ونقاط المكافآت",
        "لوحة فورية لتوزيع الطلبات وتتبع مسارات التوصيل",
        "بنية قاعدة بيانات قوية محسنة لأكثر من 10,000 منتج وطلب يومي",
      ],
      tr: [
        "Müşteri teslimat zaman aralığı seçimi ve planlama sistemi",
        "Anında kategori filtreleme ve arama özellikli duyarlı web kataloğu",
        "Sepet senkronizasyonuna sahip hibrit iOS ve Android mobil uygulama",
        "Güvenli çevrimiçi ödeme ve sadakat puanı entegrasyonları",
        "Gerçek zamanlı sipariş dağıtımı ve teslimat rota takibi paneli",
        "10.000'den fazla ürün ve günlük sipariş için optimize edilmiş güçlü veritabanı yapısı",
      ],
    },
  },
  17: {
    titles: {
      ar: "نظام معلومات هيئة الموانئ البحرية (MPAIS)",
      tr: "Deniz Limanları Otoritesi Bilgi Sistemi (MPAIS)",
    },
  },
  18: {
    titles: {
      ar: "معالج البيانات الهيدروغرافية ومصمم النماذج الباثيمترية EA400",
      tr: "EA400 Hidrografik Veri İşleyici ve Batimetrik Modelleyici",
    },
  },
};

const buildProjects = (locale) =>
  sharedProjects
    .map((project) => {
      const translations = projectTranslations[project.id] ?? {};

      return {
        ...project,
        title: translations.titles?.[locale] ?? project.title,
        description:
          translations.descriptions?.[locale] ??
          project.descriptions?.[locale] ??
          project.descriptions?.[defaultLocale] ??
          "",
        tagline:
          translations.taglines?.[locale] ??
          project.taglines?.[locale] ??
          project.tagline,
        role:
          translations.roles?.[locale] ?? project.roles?.[locale] ?? project.role,
        highlights:
          translations.highlights?.[locale] ??
          project.highlightsByLocale?.[locale] ??
          project.highlights,
      };
    })
    .sort(
      (projectA, projectB) =>
        Number(Boolean(projectB.featured)) - Number(Boolean(projectA.featured)),
    );

const buildFilters = (locale) =>
  projectFilters.map((filter) => ({
    id: filter.id,
    label: filter.labels[locale],
  }));

export const dictionaries = {
  en: {
    seo: {
      title:
        "Mohamad Karbejha - Full Stack Developer | Next.js, TypeScript, Node.js",
      description:
        "Full Stack Developer with 6+ years of experience building scalable web applications. Core stack: Next.js, TypeScript, Node.js, Express.js, PostgreSQL. Based in Istanbul, Turkey - open to remote and relocation.",
      webPageName: "Mohamad Karbejha - Full Stack Developer Portfolio",
      websiteDescription:
        "Professional portfolio showcasing full stack development skills and projects.",
      personDescription:
        "Full Stack Developer with 6+ years of experience building scalable web applications using Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.",
      imageAlt: "Mohamad Karbejha - Full Stack Developer",
    },
    nav: {
      ariaLabel: "Main navigation",
      skipToContent: "Skip to content",
      logoLabel: "Go to homepage",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      languageToggleLabel: "Switch to Arabic",
      links: [
        { title: "Experience", path: "#experience" },
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contact", path: "#contact" },
      ],
    },
    hero: {
      ariaLabel: "Hero section",
      greeting: "Hi, I'm Mohamad Karbejha",
      role: "Full Stack Developer - 6+ Years of Experience",
      intro: "I build fast, scalable web applications from database to UI.",
      stack: "Core stack: Next.js, TypeScript, Node.js, PostgreSQL, Express.",
      skillsLabel: "Key skills",
      keySkills: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "React",
        "Python",
      ],
      hireMe: "Hire Me",
      hireMeLabel: "Contact Mohamad Karbejha for hiring opportunities",
      cv: "View CV/Resume",
      cvLabel: "View Mohamad Karbejha's CV or resume",
      imageAlt: "Mohamad Karbejha - Full Stack Developer and Software Engineer",
    },
    achievements: {
      ariaLabel: "Career achievements",
      locale: "en-US",
      items: [
        { metric: "Projects", value: "20", postfix: "+" },
        { metric: "Years of Experience", value: "6", postfix: "+" },
      ],
    },
    experience: {
      eyebrow: "Experience snapshot",
      heading: "Building products from systems to interfaces",
      description:
        "I bring 6+ years of full-stack experience across production web applications, internal tools, and data-heavy platforms — from backend architecture to polished user interfaces.",
      items: [
        {
          label: "Current role",
          title: "Full Stack Developer",
          organization: "Techtile · Germany · Remote",
          description:
            "Building production-grade applications with Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.",
          tagsLabel: "Current role technologies",
          tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        },
        {
          label: "Domain experience",
          title: "Cross-industry product delivery",
          organization: "HR · Maritime · E-commerce · SaaS",
          description:
            "Designing end-to-end workflows, dashboards, APIs, role-based access, and multilingual experiences for different operational teams.",
          tagsLabel: "Areas of experience",
          tags: ["Dashboards", "RBAC", "APIs", "Multilingual"],
        },
      ],
    },
    about: {
      heading: "About Me",
      imageAlt: "Mohamad Karbejha professional workspace",
      detailsLabel: "About section details",
      paragraphs: [
        "I'm a Full Stack Developer with 6+ years of professional experience, currently working remotely at Techtile (Germany). I specialize in building production-grade web applications using Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.",
        "I hold two B.Sc. degrees from Dogus University: Computer Engineering and Robot Engineering. I've worked across industries including HR, maritime systems, e-commerce, and SaaS platforms.",
        "I'm multilingual (Arabic, English, Turkish) and open to new remote opportunities and relocation.",
      ],
      tabs: [
        {
          title: "Skills",
          id: "skills",
          type: "skills",
          groups: [
            {
              label: "Frontend",
              value: "Next.js, React, TypeScript, JavaScript, HTML/CSS",
            },
            { label: "Backend", value: "Node.js, Express.js, Python, Django" },
            { label: "Database", value: "PostgreSQL, MongoDB, MySQL" },
            { label: "DevOps", value: "Docker, CI/CD, Git" },
            { label: "Other", value: "REST APIs, WebSocket, Socket.IO" },
          ],
        },
        {
          title: "Education",
          id: "education",
          type: "list",
          items: [
            "Computer Engineering - Dogus University - Istanbul, Turkey",
            "Robot Engineering (Double Major) - Dogus University - Istanbul, Turkey",
            "Fullstack Web Development - Re:Coded",
          ],
        },
        {
          title: "Certifications",
          id: "certifications",
          type: "certificates",
          groups: certificateGroups,
        },
      ],
    },
    projects: {
      heading: "My Projects",
      featured: {
        eyebrow: "Selected work",
        heading: "A closer look at complex products",
        description:
          "These projects highlight the kind of systems I enjoy building: operationally important, data-heavy, and designed for real users.",
        viewDetails: "View project details",
      },
      details: {
        backToPortfolio: "Back to portfolio",
        selectedWork: "Selected case study",
        overview: "Project overview",
        responsibilities: "My responsibilities",
        highlights: "Key highlights",
        technologies: "Technologies",
        visitLive: "Visit live project",
        viewSource: "View source code",
        watchDemo: "Watch demo",
      },
      filtersLabel: "Filter projects by type",
      resultsCount: "Showing {shown} of {total} projects",
      showMoreProjects: "Show more projects",
      filters: buildFilters("en"),
      cards: {
        repositoryLabel: "View {title} GitHub repository",
        previewLabel: "View {title} live demo",
        imageAlt: "{title} project screenshot",
        techLabel: "{title} technologies",
        role: "Role",
        showMore: "Show more",
        showLess: "Show less",
        github: "GitHub",
        liveDemo: "Live Demo",
        watchDemo: "Watch Demo",
        closeModal: "Close video dialog",
        previousImage: "Previous image",
        nextImage: "Next image",
        goToImage: "Go to image {index}",
      },
      items: buildProjects("en"),
    },
      contact: {
        heading: "Let's Work Together",
        description:
          "I'm currently open to full-time remote roles and freelance projects. Feel free to reach out - I respond within 24 hours.",
        nameLabel: "Your name",
        namePlaceholder: "Enter your name",
        githubLabel: "Visit Mohamad Karbejha on GitHub",
        linkedinLabel: "Visit Mohamad Karbejha on LinkedIn",
      success: "Email sent successfully!",
      successFollowUp: "I'll get back to you soon.",
      emailLabel: "Your email",
      emailPlaceholder: "Enter your email",
        emailErrorPrefix: "Email",
        emailLinkLabel: "Email Mohamad Karbejha directly",
      subjectLabel: "Subject",
      subjectPlaceholder: "Enter the subject",
      messageLabel: "Message",
      messagePlaceholder: "Let's talk about...",
      messageErrorPrefix: "Message",
      sending: "Sending...",
      send: "Send Message",
    },
    footer: {
      logoLabel: "Go to homepage",
      tagline: "",
      copyright: "Copyright 2026 Mohamad Karbejha © All rights reserved.",
    },
    loading: {
      title: "Loading...",
      description: "Please wait while we load Mohamad Karbejha's portfolio",
    },
    notFound: {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      home: "Go Home",
      projects: "View Projects",
      metadataTitle: "Page Not Found - Mohamad Karbejha",
      metadataDescription: "The page you are looking for does not exist.",
    },
  },
  ar: {
    seo: {
      title: "محمد كربجها - مطور ويب متكامل | Next.js وTypeScript وNode.js",
      description:
        "مطور ويب متكامل بخبرة تزيد عن 6 سنوات في بناء تطبيقات ويب سريعة وقابلة للتوسع. أعمل باستخدام Next.js وTypeScript وNode.js وExpress.js وPostgreSQL، ومقيم في إسطنبول ومتاح للعمل عن بعد أو الانتقال.",
      webPageName: "محمد كربجها - معرض أعمال مطور ويب متكامل",
      websiteDescription:
        "معرض أعمال احترافي يعرض مهارات ومشاريع تطوير الويب المتكامل.",
      personDescription:
        "مطور ويب متكامل بخبرة تزيد عن 6 سنوات في بناء تطبيقات ويب قابلة للتوسع باستخدام Next.js وTypeScript وNode.js وExpress.js وPostgreSQL.",
      imageAlt: "محمد كربجها - مطور ويب متكامل",
    },
    nav: {
      ariaLabel: "التنقل الرئيسي",
      skipToContent: "الانتقال إلى المحتوى",
      logoLabel: "الانتقال إلى الصفحة الرئيسية",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      languageToggleLabel: "التبديل إلى الإنجليزية",
      links: [
        { title: "الخبرة", path: "#experience" },
        { title: "نبذة", path: "#about" },
        { title: "المشاريع", path: "#projects" },
        { title: "تواصل", path: "#contact" },
      ],
    },
    hero: {
      ariaLabel: "القسم الرئيسي",
      greeting: "مرحباً، أنا محمد كربجها",
      role: "مطور ويب متكامل - خبرة تزيد عن 6 سنوات",
      intro:
        "أبني تطبيقات ويب سريعة وقابلة للتوسع من قاعدة البيانات إلى الواجهة.",
      stack:
        "التقنيات الأساسية: Next.js وTypeScript وNode.js وPostgreSQL وExpress.",
      skillsLabel: "المهارات الأساسية",
      keySkills: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "React",
        "Python",
      ],
      hireMe: "تواصل معي",
      hireMeLabel: "تواصل مع محمد كربجها لفرص العمل",
      cv: "عرض السيرة الذاتية",
      cvLabel: "عرض السيرة الذاتية لمحمد كربجها",
      imageAlt: "محمد كربجها - مطور ويب متكامل ومهندس برمجيات",
    },
    achievements: {
      ariaLabel: "إنجازات مهنية",
      locale: "ar",
      items: [
        { metric: "مشروعاً", value: "20", postfix: "+" },
        { metric: "سنوات خبرة", value: "6", postfix: "+" },
      ],
    },
    experience: {
      eyebrow: "لمحة عن الخبرة",
      heading: "أبني المنتجات من الأنظمة الخلفية حتى الواجهات",
      description:
        "أمتلك أكثر من 6 سنوات من الخبرة في تطوير المنتجات المتكاملة، من تطبيقات الويب الجاهزة للإنتاج إلى الأدوات الداخلية والمنصات التي تعتمد على البيانات.",
      items: [
        {
          label: "الدور الحالي",
          title: "مطور Full Stack",
          organization: "Techtile · ألمانيا · عن بعد",
          description:
            "أبني تطبيقات جاهزة للإنتاج باستخدام Next.js وTypeScript وNode.js وExpress.js وPostgreSQL.",
          tagsLabel: "تقنيات الدور الحالي",
          tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        },
        {
          label: "خبرة في مجالات متعددة",
          title: "تطوير منتجات متكاملة",
          organization: "الموارد البشرية · الأنظمة البحرية · التجارة الإلكترونية · SaaS",
          description:
            "أصمم سير العمل ولوحات التحكم وواجهات API والصلاحيات وتجارب الاستخدام متعددة اللغات لفرق تشغيلية مختلفة.",
          tagsLabel: "مجالات الخبرة",
          tags: ["لوحات التحكم", "RBAC", "واجهات API", "متعدد اللغات"],
        },
      ],
    },
    about: {
      heading: "نبذة عني",
      imageAlt: "مساحة عمل محمد كربجها الاحترافية",
      detailsLabel: "تفاصيل قسم النبذة",
      paragraphs: [
        "أنا مطور ويب متكامل بخبرة مهنية تزيد عن 6 سنوات، أعمل حالياً عن بعد مع Techtile في ألمانيا. أتخصص في بناء تطبيقات ويب جاهزة للإنتاج باستخدام Next.js وTypeScript وNode.js وExpress.js وPostgreSQL.",
        "أحمل درجتي بكالوريوس من جامعة دوغوش: هندسة الحاسوب وهندسة الروبوت. عملت في مجالات متعددة تشمل الموارد البشرية، والأنظمة البحرية، والتجارة الإلكترونية، ومنصات SaaS.",
        "أتحدث العربية والإنجليزية والتركية، ومتاح لفرص عمل جديدة عن بعد أو مع إمكانية الانتقال.",
      ],
      tabs: [
        {
          title: "المهارات",
          id: "skills",
          type: "skills",
          groups: [
            {
              label: "الواجهة الأمامية",
              value: "Next.js, React, TypeScript, JavaScript, HTML/CSS",
            },
            { label: "الخلفية", value: "Node.js, Express.js, Python, Django" },
            { label: "قواعد البيانات", value: "PostgreSQL, MongoDB, MySQL" },
            { label: "DevOps", value: "Docker, CI/CD, Git" },
            { label: "أخرى", value: "REST APIs, WebSocket, Socket.IO" },
          ],
        },
        {
          title: "التعليم",
          id: "education",
          type: "list",
          items: [
            "هندسة الحاسوب - جامعة دوغوش - إسطنبول، تركيا",
            "هندسة الروبوت (تخصص مزدوج) - جامعة دوغوش - إسطنبول، تركيا",
            "تطوير الويب المتكامل - Re:Coded",
          ],
        },
        {
          title: "الشهادات",
          id: "certifications",
          type: "certificates",
          groups: certificateGroups,
        },
      ],
    },
    projects: {
      heading: "مشاريعي",
      featured: {
        eyebrow: "أعمال مختارة",
        heading: "نظرة أقرب على منتجات معقدة",
        description:
          "تعكس هذه المشاريع نوع الأنظمة التي أحب بناءها: منتجات مهمة تشغيلياً، تعتمد على البيانات، ومصممة لمستخدمين حقيقيين.",
        viewDetails: "عرض تفاصيل المشروع",
      },
      details: {
        backToPortfolio: "العودة إلى معرض الأعمال",
        selectedWork: "دراسة حالة مختارة",
        overview: "نظرة عامة على المشروع",
        responsibilities: "مسؤولياتي",
        highlights: "أبرز ما تم بناؤه",
        technologies: "التقنيات",
        visitLive: "زيارة المشروع",
        viewSource: "عرض الكود المصدري",
        watchDemo: "مشاهدة الفيديو",
      },
      filtersLabel: "تصفية المشاريع حسب النوع",
      resultsCount: "عرض {shown} من أصل {total} مشروعًا",
      showMoreProjects: "عرض المزيد من المشاريع",
      filters: buildFilters("ar"),
      cards: {
        repositoryLabel: "عرض مستودع {title} على GitHub",
        previewLabel: "عرض النسخة الحية من {title}",
        imageAlt: "لقطة شاشة لمشروع {title}",
        techLabel: "تقنيات {title}",
        role: "الدور",
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
        github: "GitHub",
        liveDemo: "عرض مباشر",
        watchDemo: "فيديو توضيحي",
        closeModal: "إغلاق نافذة الفيديو",
        previousImage: "الصورة السابقة",
        nextImage: "الصورة التالية",
        goToImage: "الانتقال إلى الصورة {index}",
      },
      items: buildProjects("ar"),
    },
      contact: {
        heading: "لنعمل معاً",
        description:
          "أنا متاح حالياً لأدوار بدوام كامل عن بعد ومشاريع مستقلة. لا تتردد في التواصل، أجيب عادة خلال 24 ساعة.",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك",
        githubLabel: "زيارة محمد كربجها على GitHub",
      linkedinLabel: "زيارة محمد كربجها على LinkedIn",
      success: "تم إرسال الرسالة بنجاح!",
      successFollowUp: "سأعود إليك قريباً.",
      emailLabel: "بريدك الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
        emailErrorPrefix: "البريد الإلكتروني",
        emailLinkLabel: "إرسال بريد إلكتروني مباشرة إلى محمد كربجها",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "أدخل الموضوع",
      messageLabel: "الرسالة",
      messagePlaceholder: "لنتحدث عن...",
      messageErrorPrefix: "الرسالة",
      sending: "جارٍ الإرسال...",
      send: "إرسال الرسالة",
    },
    footer: {
      logoLabel: "الانتقال إلى الصفحة الرئيسية",
      tagline: "",
      copyright: "حقوق النشر 2026 محمد كربجها. جميع الحقوق محفوظة.",
    },
    loading: {
      title: "جارٍ التحميل...",
      description: "يرجى الانتظار أثناء تحميل معرض أعمال محمد كربجها",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      home: "العودة للرئيسية",
      projects: "عرض المشاريع",
      metadataTitle: "الصفحة غير موجودة - محمد كربجها",
      metadataDescription: "الصفحة التي تبحث عنها غير موجودة.",
    },
  },
  tr: {
    seo: {
      title:
        "Mohamad Karbejha - Full Stack Geliştirici | Next.js, TypeScript, Node.js",
      description:
        "Ölçeklenebilir web uygulamaları geliştirme konusunda 6 yıldan fazla deneyime sahip Full Stack Geliştirici. Ana teknoloji yığını: Next.js, TypeScript, Node.js, Express.js, PostgreSQL. İstanbul, Türkiye merkezli - uzaktan veya taşınarak çalışmaya uygun.",
      webPageName: "Mohamad Karbejha - Full Stack Geliştirici Portfolyosu",
      websiteDescription:
        "Full stack geliştirme becerilerini ve projelerini gösteren profesyonel portfolyo.",
      personDescription:
        "Next.js, TypeScript, Node.js, Express.js ve PostgreSQL kullanarak ölçeklenebilir web uygulamaları oluşturan 6 yıldan fazla deneyimli Full Stack Geliştirici.",
      imageAlt: "Mohamad Karbejha - Full Stack Geliştirici",
    },
    nav: {
      ariaLabel: "Ana menü",
      skipToContent: "İçeriğe geç",
      logoLabel: "Ana sayfaya git",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      languageToggleLabel: "Dili değiştir",
      links: [
        { title: "Deneyim", path: "#experience" },
        { title: "Hakkımda", path: "#about" },
        { title: "Projeler", path: "#projects" },
        { title: "İletişim", path: "#contact" },
      ],
    },
    hero: {
      ariaLabel: "Giriş bölümü",
      greeting: "Merhaba, Ben Mohamad Karbejha",
      role: "Full Stack Geliştirici - 6+ Yıllık Deneyim",
      intro:
        "Veri tabanından kullanıcı arayüzüne kadar hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum.",
      stack:
        "Ana teknoloji yığını: Next.js, TypeScript, Node.js, PostgreSQL, Express.",
      skillsLabel: "Önemli beceriler",
      keySkills: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "React",
        "Python",
      ],
      hireMe: "İletişime Geç",
      hireMeLabel: "İş fırsatları için Mohamad Karbejha ile iletişime geçin",
      cv: "Özgeçmişi Görüntüle",
      cvLabel: "Mohamad Karbejha'nın özgeçmişini görüntüleyin",
      imageAlt:
        "Mohamad Karbejha - Full Stack Geliştirici ve Yazılım Mühendisi",
    },
    achievements: {
      ariaLabel: "Kariyer başarıları",
      locale: "tr-TR",
      items: [
        { metric: "Proje", value: "20", postfix: "+" },
        { metric: "Yıllık Deneyim", value: "6", postfix: "+" },
      ],
    },
    experience: {
      eyebrow: "Deneyim özeti",
      heading: "Sistemlerden arayüzlere ürünler geliştiriyorum",
      description:
        "Üretime hazır web uygulamalarından veri odaklı platformlara kadar uçtan uca ürün geliştirmede 6 yıldan fazla full-stack deneyime sahibim.",
      items: [
        {
          label: "Mevcut rol",
          title: "Full Stack Developer",
          organization: "Techtile · Almanya · Uzaktan",
          description:
            "Next.js, TypeScript, Node.js, Express.js ve PostgreSQL kullanarak üretime hazır uygulamalar geliştiriyorum.",
          tagsLabel: "Mevcut rol teknolojileri",
          tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
        },
        {
          label: "Alan deneyimi",
          title: "Farklı sektörlerde ürün geliştirme",
          organization: "İK · Denizcilik · E-ticaret · SaaS",
          description:
            "Farklı operasyon ekipleri için uçtan uca iş akışları, gösterge panelleri, API'ler, rol tabanlı erişim ve çok dilli deneyimler tasarlıyorum.",
          tagsLabel: "Deneyim alanları",
          tags: ["Paneller", "RBAC", "API'ler", "Çok dilli"],
        },
      ],
    },
    about: {
      heading: "Hakkımda",
      imageAlt: "Mohamad Karbejha profesyonel çalışma alanı",
      detailsLabel: "Hakkımda bölümü ayrıntıları",
      paragraphs: [
        "Şu anda Techtile (Almanya) bünyesinde uzaktan çalışan, 6 yıldan fazla profesyonel deneyime sahip bir Full Stack Geliştiriciyim. Next.js, TypeScript, Node.js, Express.js ve PostgreSQL kullanarak üretime hazır web uygulamaları geliştirme konusunda uzmanım.",
        "Doğuş Üniversitesi'nden iki lisans derecem var: Bilgisayar Mühendisliği ve Robot Mühendisliği (Çift Anadal). İK, denizcilik sistemleri, e-ticaret ve SaaS platformları gibi farklı sektörlerde çalıştım.",
        "Çok dilliyim (Arapça, İngilizce, Türkçe) ve yeni uzaktan çalışma fırsatlarına veya yer değiştirmeye açığım.",
      ],
      tabs: [
        {
          title: "Beceriler",
          id: "skills",
          type: "skills",
          groups: [
            {
              label: "Ön Yüz (Frontend)",
              value: "Next.js, React, TypeScript, JavaScript, HTML/CSS",
            },
            {
              label: "Arka Yüz (Backend)",
              value: "Node.js, Express.js, Python, Django",
            },
            { label: "Veri Tabanı", value: "PostgreSQL, MongoDB, MySQL" },
            { label: "DevOps", value: "Docker, CI/CD, Git" },
            { label: "Diğer", value: "REST API'ler, WebSocket, Socket.IO" },
          ],
        },
        {
          title: "Eğitim",
          id: "education",
          type: "list",
          items: [
            "Bilgisayar Mühendisliği - Doğuş Üniversitesi - İstanbul, Türkiye",
            "Robot Mühendisliği (Çift Anadal) - Doğuş Üniversitesi - İstanbul, Türkiye",
            "Fullstack Web Geliştirme - Re:Coded",
          ],
        },
        {
          title: "Sertifikalar",
          id: "certifications",
          type: "certificates",
          groups: certificateGroups,
        },
      ],
    },
    projects: {
      heading: "Projelerim",
      featured: {
        eyebrow: "Seçili çalışmalar",
        heading: "Karmaşık ürünlere daha yakından bakış",
        description:
          "Bu projeler; operasyonel olarak önemli, veri odaklı ve gerçek kullanıcılar için tasarlanan sistemleri nasıl geliştirdiğimi gösterir.",
        viewDetails: "Proje ayrıntılarını görüntüle",
      },
      details: {
        backToPortfolio: "Portföye dön",
        selectedWork: "Seçili vaka çalışması",
        overview: "Proje özeti",
        responsibilities: "Sorumluluklarım",
        highlights: "Öne çıkanlar",
        technologies: "Teknolojiler",
        visitLive: "Canlı projeyi ziyaret et",
        viewSource: "Kaynak kodunu görüntüle",
        watchDemo: "Demoyu izle",
      },
      filtersLabel: "Projeleri türüne göre filtrele",
      resultsCount: "{total} projeden {shown} tanesi gösteriliyor",
      showMoreProjects: "Daha fazla proje göster",
      filters: buildFilters("tr"),
      cards: {
        repositoryLabel: "{title} GitHub deposunu görüntüle",
        previewLabel: "{title} canlı demosunu görüntüle",
        imageAlt: "{title} proje ekran görüntüsü",
        techLabel: "{title} teknolojileri",
        role: "Rol",
        showMore: "Daha fazla göster",
        showLess: "Daha az göster",
        github: "GitHub",
        liveDemo: "Canlı Demo",
        watchDemo: "Demoyu İzle",
        closeModal: "Video penceresini kapat",
        previousImage: "Önceki görsel",
        nextImage: "Sonraki görsel",
        goToImage: "{index}. görsele git",
      },
      items: buildProjects("tr"),
    },
      contact: {
        heading: "Birlikte Çalışalım",
        description:
          "Şu anda tam zamanlı uzaktan pozisyonlara ve serbest projelere açığım. İletişime geçmekten çekinmeyin - 24 saat içinde yanıt veriyorum.",
        nameLabel: "Adınız",
        namePlaceholder: "Adınızı girin",
        githubLabel: "Mohamad Karbejha'yı GitHub'da ziyaret edin",
      linkedinLabel: "Mohamad Karbejha'yı LinkedIn'de ziyaret edin",
      success: "E-posta başarıyla gönderildi!",
      successFollowUp: "Yakında size döneceğim.",
      emailLabel: "E-posta adresiniz",
      emailPlaceholder: "E-posta adresinizi girin",
        emailErrorPrefix: "E-posta",
        emailLinkLabel: "Mohamad Karbejha'ya doğrudan e-posta gönderin",
      subjectLabel: "Konu",
      subjectPlaceholder: "Konuyu girin",
      messageLabel: "Mesaj",
      messagePlaceholder: "Hakkında konuşmak istediğiniz konu...",
      messageErrorPrefix: "Mesaj",
      sending: "Gönderiliyor...",
      send: "Mesaj Gönder",
    },
    footer: {
      logoLabel: "Ana sayfaya git",
      tagline: "",
      copyright: "Telif Hakkı 2026 Mohamad Karbejha © Tüm hakları saklıdır.",
    },
    loading: {
      title: "Yükleniyor...",
      description:
        "Mohamad Karbejha'nın portfolyosu yüklenirken lütfen bekleyin",
    },
    notFound: {
      title: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya taşınmış.",
      home: "Ana Sayfaya Git",
      projects: "Projeleri Görüntüle",
      metadataTitle: "Sayfa Bulunamadı - Mohamad Karbejha",
      metadataDescription: "Aradığınız sayfa mevcut değil.",
    },
  },
};

export const getDictionary = (locale = defaultLocale) =>
  dictionaries[locale] ?? dictionaries[defaultLocale];

export const getLocaleSettings = (locale = defaultLocale) =>
  localeSettings[locale] ?? localeSettings[defaultLocale];

export const getLocalePath = (locale = defaultLocale) =>
  localePaths[locale] ?? localePaths[defaultLocale];

export const getLocalizedHref = (locale, hash = "") =>
  `${getLocalePath(locale)}${hash}`;

export const getFeaturedProjects = (locale = defaultLocale) =>
  getDictionary(locale).projects.items.filter((project) => project.featured);

export const getProjectBySlug = (locale = defaultLocale, slug) =>
  getDictionary(locale).projects.items.find((project) => project.slug === slug);
