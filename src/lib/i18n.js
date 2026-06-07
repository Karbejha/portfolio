export const defaultLocale = "en";

export const locales = ["en", "ar"];

export const localePaths = {
  en: "/",
  ar: "/ar/",
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
  { id: "All", labels: { en: "All", ar: "الكل" } },
  { id: "Web", labels: { en: "Web", ar: "ويب" } },
  { id: "Mobile", labels: { en: "Mobile", ar: "جوال" } },
  { id: "Desktop", labels: { en: "Desktop", ar: "سطح المكتب" } },
];

const sharedProjects = [
  {
    id: 11,
    title: "Immorise",
    image: "https://immorise.com/wp-content/uploads/2024/09/screenshot.jpg",
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
    previewUrl: "https://immorise.com",
    descriptions: {
      en: "Immorise is a German PropTech SaaS platform that automates real estate management through AI-driven 3D Digital Twins. It digitizes physical properties from 3D scans or floor plans, turns them into interactive BIM-compliant digital twins, and hosts them in a cloud 4D collaboration hub for owners, investors, asset managers, and facility teams.",
      ar: "Immorise is a German PropTech SaaS platform that automates real estate management through AI-driven 3D Digital Twins. It digitizes physical properties from 3D scans or floor plans, turns them into interactive BIM-compliant digital twins, and hosts them in a cloud 4D collaboration hub for owners, investors, asset managers, and facility teams.",
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
    previewUrl: "https://acilimsoft.com/saha-ekip-yonetimi/",
    descriptions: {
      en: "Three-S is an enterprise field team management and merchandising platform by Açılımsoft that enables companies to plan, monitor, measure, and manage field operations in real time. The platform collects critical data about own and competitor products from retail points, provides route management, POP tracking, shelf compliance monitoring, competitive price analysis, and detailed reporting — serving 5,000+ active users across FMCG and retail sectors.",
      ar: "Three-S هو منصة إدارة فرق ميدانية ومتابعة تجارية متكاملة من Açılımsoft تمكّن الشركات من تخطيط ومراقبة وقياس وإدارة العمليات الميدانية في الوقت الفعلي. تجمع المنصة بيانات مهمة عن المنتجات الخاصة والمنافسة من نقاط البيع، وتوفر إدارة المسارات وتتبع نقاط الشراء ومراقبة الامتثال على الرفوف وتحليل الأسعار التنافسية وإعداد التقارير المفصلة — تخدم أكثر من 5,000 مستخدم نشط في قطاعات السلع الاستهلاكية والتجزئة.",
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
    previewUrl: "https://flowhr.karbejha.site",
    descriptions: {
      en: "FlowHR is an enterprise-grade HR management platform that streamlines organization workflow, time tracking, leaf approvals, and analytics. Built using Next.js and TypeScript, the system integrates a comprehensive employee database, secure role-based access control, and real-time dashboard analytics, reducing administrative HR overhead by up to 60%.",
      ar: "FlowHR هو نظام متكامل لإدارة الموارد البشرية يبسط سير عمل المؤسسة، وتتبع الوقت، والموافقة على الإجازات، والتحليلات. تم بناء النظام باستخدام Next.js وTypeScript، وهو يدمج قاعدة بيانات شاملة للموظفين، وتحكمًا آمنًا في الوصول على أساس الأدوار، وتحليلات فورية للوحة التحكم، مما يقلل من العبء الإداري للموارد البشرية بنسبة تصل إلى 60٪.",
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
    },
  },
  {
    id: 3,
    title: "Misas - Sanal Market",
    image:
      "https://misas.com.tr/wp-content/uploads/2025/09/misas-logo-web-color.svg",
    images: [
      "https://misas.com.tr/wp-content/uploads/2025/09/misas-logo-web-color.svg",
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
    },
  },
];

const buildProjects = (locale) =>
  sharedProjects.map((project) => ({
    ...project,
    description: project.descriptions[locale],
  }));

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
      logoLabel: "Go to homepage",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      languageToggleLabel: "Switch to Arabic",
      links: [
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
        { metric: "Projects", value: "9", postfix: "+" },
        { metric: "Years of Experience", value: "6", postfix: "+" },
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
      filtersLabel: "Filter projects by type",
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
      },
      items: buildProjects("en"),
    },
    contact: {
      heading: "Let's Work Together",
      description:
        "I'm currently open to full-time remote roles and freelance projects. Feel free to reach out - I respond within 24 hours.",
      githubLabel: "Visit Mohamad Karbejha on GitHub",
      linkedinLabel: "Visit Mohamad Karbejha on LinkedIn",
      success: "Email sent successfully!",
      successFollowUp: "I'll get back to you soon.",
      emailLabel: "Your email",
      emailPlaceholder: "Enter your email",
      emailErrorPrefix: "Email",
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
      logoLabel: "الانتقال إلى الصفحة الرئيسية",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      languageToggleLabel: "التبديل إلى الإنجليزية",
      links: [
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
        { metric: "مشروعاً", value: "9", postfix: "+" },
        { metric: "سنوات خبرة", value: "6", postfix: "+" },
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
      filtersLabel: "تصفية المشاريع حسب النوع",
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
      },
      items: buildProjects("ar"),
    },
    contact: {
      heading: "لنعمل معاً",
      description:
        "أنا متاح حالياً لأدوار بدوام كامل عن بعد ومشاريع مستقلة. لا تتردد في التواصل، أجيب عادة خلال 24 ساعة.",
      githubLabel: "زيارة محمد كربجها على GitHub",
      linkedinLabel: "زيارة محمد كربجها على LinkedIn",
      success: "تم إرسال الرسالة بنجاح!",
      successFollowUp: "سأعود إليك قريباً.",
      emailLabel: "بريدك الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      emailErrorPrefix: "البريد الإلكتروني",
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
};

export const getDictionary = (locale = defaultLocale) =>
  dictionaries[locale] ?? dictionaries[defaultLocale];

export const getLocaleSettings = (locale = defaultLocale) =>
  localeSettings[locale] ?? localeSettings[defaultLocale];

export const getLocalePath = (locale = defaultLocale) =>
  localePaths[locale] ?? localePaths[defaultLocale];

export const getLocalizedHref = (locale, hash = "") =>
  `${getLocalePath(locale)}${hash}`;
