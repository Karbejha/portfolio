import "../globals.css";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import {
  getLocalizedMetadata,
  getStructuredData,
  serializeJsonLd,
} from "../../lib/seo-config";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = getLocalizedMetadata("tr");

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#121212",
};

export default function TurkishRootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(getStructuredData("tr")),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-tr" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
