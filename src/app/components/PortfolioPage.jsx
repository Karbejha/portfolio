import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";
import Footer from "./Footer";
import AchievementsSection from "./AchievementsSection";
import ExperienceSection from "./ExperienceSection";
import { getDictionary, getLocaleSettings } from "../../lib/i18n";

export default function PortfolioPage({ locale }) {
  const dictionary = getDictionary(locale);
  const settings = getLocaleSettings(locale);

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition-transform focus-visible:translate-y-0"
      >
        {dictionary.nav.skipToContent}
      </a>
      <main
        id="main-content"
        className="flex min-h-screen flex-col overflow-x-clip bg-[#121212]"
      >
      <Navbar
        locale={locale}
        nav={dictionary.nav}
        direction={settings.direction}
      />
      <div className="container mt-24 mx-auto px-6 py-4 sm:px-12">
        <HeroSection
          locale={locale}
          content={dictionary.hero}
          direction={settings.direction}
        />
        <AchievementsSection content={dictionary.achievements} />
        <ExperienceSection
          content={dictionary.experience}
          direction={settings.direction}
        />
        <AboutSection content={dictionary.about} direction={settings.direction} />
        <ProjectsSection content={dictionary.projects} locale={locale} />
        <EmailSection content={dictionary.contact} />
      </div>
      <Footer locale={locale} content={dictionary.footer} />
      </main>
    </>
  );
}
