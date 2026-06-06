import Link from "next/link";
import { getDictionary, getLocalizedHref } from "../../lib/i18n";

export const metadata = {
  title: getDictionary("en").notFound.metadataTitle,
  description: getDictionary("en").notFound.metadataDescription,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const { notFound } = getDictionary("en");

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4">{notFound.title}</h2>
        <p className="text-xl text-[#ADB7BE] mb-8">{notFound.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={getLocalizedHref("en")}
            className="px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white rounded-full inline-block"
          >
            {notFound.home}
          </Link>
          <Link
            href={getLocalizedHref("en", "#projects")}
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full inline-block"
          >
            {notFound.projects}
          </Link>
        </div>
      </div>
    </div>
  );
}
