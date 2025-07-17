import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export const metadata = {
  title: 'Mohamad Karbejha - Full Stack Developer | C# ASP.NET Core Expert',
  description: 'Experienced Full Stack Developer from Istanbul, Turkey. Specialized in C# ASP.NET Core, React, Next.js, Python, and modern web technologies. Computer Engineering graduate with proven expertise in building scalable applications.',
  keywords: [
    'Mohamad Karbejha',
    'Full Stack Developer Istanbul',
    'C# Developer Turkey',
    'ASP.NET Core Expert',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'Web Developer Istanbul',
    'Software Engineer Turkey',
    'Computer Engineering',
    'Fullstack Developer',
    'Web APIs',
    'Entity Framework Core',
    'JavaScript Expert',
    'Django Developer',
    'Angular Developer',
    'Node.js Developer',
    'MongoDB Expert',
    'MySQL Developer',
    'Portfolio Website',
    'Turkish Developer',
    'Multilingual Developer'
  ],
  openGraph: {
    title: 'Mohamad Karbejha - Full Stack Developer | C# ASP.NET Core Expert',
    description: 'Experienced Full Stack Developer from Istanbul, Turkey. Specialized in C# ASP.NET Core, React, Next.js, Python, and modern web technologies.',
    url: '/',
    siteName: 'Mohamad Karbejha Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamad Karbejha - Full Stack Developer',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamad Karbejha - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in C# ASP.NET Core, React, Next.js, and Python.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Mohamad Karbejha - Full Stack Developer Portfolio",
            "description": "Experienced Full Stack Developer from Istanbul, Turkey. Specialized in C# ASP.NET Core, React, Next.js, Python, and modern web technologies.",
            "url": "https://karbejha.site",
            "mainEntity": {
              "@type": "Person",
              "name": "Mohamad Karbejha",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in C# ASP.NET Core, React, Next.js, and Python",
              "url": "https://karbejha.site",
              "image": "https://karbejha.site/images/hero-image.png",
              "sameAs": [
                "https://github.com/Karbejha",
                "https://www.linkedin.com/in/mohamad-karbejha"
              ],
              "knowsAbout": [
                "C# Programming",
                "ASP.NET Core",
                "React.js",
                "Next.js",
                "Python",
                "Django",
                "Web Development",
                "Software Engineering",
                "Full Stack Development"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Doğuş University",
                "location": "Istanbul, Turkey"
              },
              "workLocation": {
                "@type": "Place",
                "name": "Istanbul, Turkey"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://karbejha.site"
                }
              ]
            }
          })
        }}
      />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection/>
      </div>
      <Footer />
    </main>
  );
}
