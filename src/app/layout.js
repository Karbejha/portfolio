import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Mohamad Karbejha - Full Stack Developer | C# ASP.NET Core | React | Next.js',
    template: '%s | Mohamad Karbejha Portfolio'
  },
  description: 'Experienced Full Stack Developer specializing in C# ASP.NET Core, React, Next.js, and Python. Computer Engineering graduate with expertise in web development, software engineering, and IT consulting. Multilingual professional skilled in building scalable applications.',
  keywords: [
    'Mohamad Karbejha',
    'Full Stack Developer',
    'C# Developer',
    'ASP.NET Core',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'Software Engineer',
    'IT Consultant',
    'Computer Engineering',
    'Web APIs',
    'Entity Framework Core',
    'JavaScript',
    'Python',
    'Django',
    'Angular',
    'Node.js',
    'MongoDB',
    'MySQL',
    'Portfolio',
    'Turkey',
    'Istanbul',
    'Fullstack Developer',
    'Authentication',
    'Database Management',
    'Responsive Design',
    'Modern Web Applications'
  ],
  authors: [{ name: 'Mohamad Karbejha' }],
  creator: 'Mohamad Karbejha',
  publisher: 'Mohamad Karbejha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://karbejha.site'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'tr-TR': '/tr-TR',
      'ar-SA': '/ar-SA',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Mohamad Karbejha - Full Stack Developer | C# ASP.NET Core Expert',
    description: 'Experienced Full Stack Developer specializing in C# ASP.NET Core, React, Next.js, and Python. Computer Engineering graduate with expertise in web development and software engineering.',
    siteName: 'Mohamad Karbejha Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamad Karbejha - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamad Karbejha - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in C# ASP.NET Core, React, Next.js, and Python.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googled96d8fe7bd564ca7',
    yandex: 'yandex-verification-placeholder',
    yahoo: 'yahoo-verification-placeholder',
    other: {
      'msvalidate.01': 'DE98BD5140ED95B0034263DE0DE408D0',
    },
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://karbejha.site" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#121212" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Computer Engineering Degree",
                  "educationalLevel": "Bachelor's Degree",
                  "credentialCategory": "degree"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Fullstack Web Development Bootcamp",
                  "credentialCategory": "certificate"
                }
              ],
              "workLocation": {
                "@type": "Place",
                "name": "Istanbul, Turkey"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P66D4W75M2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P66D4W75M2');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  )
}
