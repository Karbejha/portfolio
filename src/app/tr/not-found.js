import Link from "next/link";
import { getDictionary, getLocaleSettings } from "../../lib/i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sayfa Bulunamadı",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TurkishNotFound() {
  const locale = "tr";
  const dictionary = getDictionary(locale);
  const settings = getLocaleSettings(locale);
  const content = dictionary.notFound;

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar
        locale={locale}
        nav={dictionary.nav}
        direction={settings.direction}
      />
      <div className="container mx-auto flex flex-grow flex-col items-center justify-center px-6 py-24 text-center sm:px-12">
        <h1 className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-[#ADB7BE] max-w-md mx-auto">
          {content.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            href="/tr/"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            {content.home}
          </Link>
          <Link
            href="/tr/#projects"
            className="px-6 py-3 rounded-full border border-[#33353F] text-white font-medium hover:bg-[#181818] transition-colors"
          >
            {content.projects}
          </Link>
        </div>
      </div>
      <Footer locale={locale} content={dictionary.footer} />
    </main>
  );
}
