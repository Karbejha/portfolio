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
    id: 1,
    title: "FlowHR",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "Express.js", "MongoDB", "TypeScript"],
    gitUrl: "https://github.com/Karbejha/FlowHR",
    previewUrl: "https://flow-hr-seven.vercel.app/",
    descriptions: {
      en: "A full-stack HR management system with attendance tracking, leave management, performance evaluation, and reporting for managers and employees.",
      ar: "نظام متكامل لإدارة الموارد البشرية يشمل تتبع الحضور، وإدارة الإجازات، وتقييم الأداء، والتقارير للمديرين والموظفين.",
    },
  },
  {
    id: 2,
    title: "Smart Appointment",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web", "Mobile"],
    techStack: ["Angular", "ASP.NET Core", "MySQL"],
    gitUrl: "https://github.com/Karbejha/BookingSystem",
    previewUrl: null,
    descriptions: {
      en: "A full-stack appointment booking app built with Angular, ASP.NET Core, MySQL, responsive design, secure authentication, and server-side rendering.",
      ar: "تطبيق متكامل لحجز المواعيد مبني باستخدام Angular وASP.NET Core وMySQL، مع تصميم متجاوب، ومصادقة آمنة، وتصيير من جهة الخادم.",
    },
  },
  {
    id: 3,
    title: "Misas - Sanal Market",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    techStack: ["Web", "Mobile"],
    gitUrl: null,
    previewUrl: "https://misas.com.tr/",
    descriptions: {
      en: "A virtual market website and mobile application for browsing and purchasing products online.",
      ar: "موقع وتطبيق جوال لسوق افتراضي يتيحان تصفح المنتجات وشرائها عبر الإنترنت.",
    },
  },
  {
    id: 4,
    title: "E-commerce Application",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    techStack: ["E-commerce", "Web"],
    gitUrl: null,
    previewUrl: "https://ayatekno.com.tr/en/store/",
    descriptions: {
      en: "An e-commerce website for browsing store products and product information.",
      ar: "موقع تجارة إلكترونية لتصفح منتجات المتجر ومعلوماتها.",
    },
  },
  {
    id: 5,
    title: "Food Ordering Application",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    techStack: ["Next.js", "Node.js", "MongoDB"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/capstone-room-8-1",
    previewUrl: null,
    descriptions: {
      en: "A food ordering application built with React, Next.js, Node.js, and MongoDB.",
      ar: "تطبيق لطلب الطعام مبني باستخدام React وNext.js وNode.js وMongoDB.",
    },
  },
  {
    id: 6,
    title: "SaaS Application",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "TypeScript", "Node.js"],
    gitUrl: "https://github.com/Karbejha/SaaS-website",
    previewUrl: "https://saas-website-pi.vercel.app/",
    descriptions: {
      en: "Rankify is a SaaS website for SEO marketing and website design solutions across business types.",
      ar: "Rankify موقع SaaS يقدم حلول تسويق SEO وتصميم مواقع لمختلف أنواع الأعمال.",
    },
  },
  {
    id: 7,
    title: "Movies Streaming Website",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    techStack: ["React", "JavaScript", "REST API"],
    gitUrl: "https://github.com/Karbejha/HotspotFilms",
    previewUrl: null,
    descriptions: {
      en: "Hotspot is a website for browsing movies and series online.",
      ar: "Hotspot موقع لتصفح الأفلام والمسلسلات عبر الإنترنت.",
    },
  },
  {
    id: 8,
    title: "YouTube Video Downloader",
    image: "/images/projects/8.png",
    tag: ["All", "Desktop"],
    techStack: ["Python", "Tkinter"],
    gitUrl: null,
    previewUrl: null,
    descriptions: {
      en: "A desktop application for downloading YouTube videos, built with Tkinter and Python.",
      ar: "تطبيق سطح مكتب لتنزيل مقاطع فيديو YouTube، مبني باستخدام Tkinter وPython.",
    },
  },
  {
    id: 10,
    title: "Movies Website",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    techStack: ["React", "JavaScript", "REST API"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/movie-project-room-18",
    previewUrl: "https://movie-project-room-18-q9iz.vercel.app",
    descriptions: {
      en: "Wave Movies is a website that provides information about the latest movies and TV shows.",
      ar: "Wave Movies موقع يعرض معلومات عن أحدث الأفلام والمسلسلات.",
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
        { metric: "Projects", value: "10", postfix: "+" },
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
        unavailableGithub: "GitHub link unavailable",
        github: "GitHub",
        liveDemo: "Live Demo",
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
      tagline: "Full Stack Developer - Istanbul, Turkey",
      copyright: "Copyright 2026 Mohamad Karbejha. All rights reserved.",
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
        { metric: "مشروعاً", value: "10", postfix: "+" },
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
        unavailableGithub: "رابط GitHub غير متوفر",
        github: "GitHub",
        liveDemo: "عرض مباشر",
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
