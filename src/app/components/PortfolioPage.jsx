import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";
import Footer from "./Footer";
import AchievementsSection from "./AchievementsSection";
import { getDictionary, getLocaleSettings } from "../../lib/i18n";

export default function PortfolioPage({ locale }) {
  const dictionary = getDictionary(locale);
  const settings = getLocaleSettings(locale);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
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
        <AboutSection content={dictionary.about} direction={settings.direction} />
        <ProjectsSection content={dictionary.projects} />
        <EmailSection content={dictionary.contact} />
      </div>
      <Footer locale={locale} content={dictionary.footer} />
    </main>
  );
}
