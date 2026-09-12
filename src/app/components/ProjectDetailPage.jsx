import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getLocaleSettings, getLocalizedHref } from "../../lib/i18n";
import { serializeJsonLd } from "../../lib/seo-config";

const isValidProjectUrl = (url) => Boolean(url && url !== "/");

const ProjectDetailPage = ({ locale, dictionary, project, structuredData }) => {
  const settings = getLocaleSettings(locale);
  const details = dictionary.projects.details;
  const images = project.images?.length ? project.images : [project.image];

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
        aria-labelledby="project-detail-heading"
      >
      <Navbar
        locale={locale}
        nav={dictionary.nav}
        direction={settings.direction}
      />

      <div className="container mx-auto mt-24 px-6 py-8 sm:px-12 sm:py-12">
        <Link
          href={getLocalizedHref(locale)}
          className="inline-flex rounded-full border border-[#33353F] px-4 py-2 text-sm font-medium text-[#ADB7BE] transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        >
          <span aria-hidden="true">←</span>
          <span className="ms-2">{details.backToPortfolio}</span>
        </Link>

        <article className="mt-10 text-white">
          <header className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
              {details.selectedWork}
            </p>
            <h1
              id="project-detail-heading"
              className="text-4xl font-bold leading-tight sm:text-5xl"
            >
              {project.title}
            </h1>
            <p className="mt-5 max-w-4xl text-lg font-medium leading-8 text-primary-300 sm:text-xl">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#ADB7BE] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {isValidProjectUrl(project.previewUrl) && (
                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  {details.visitLive}
                </Link>
              )}
              {isValidProjectUrl(project.gitUrl) && (
                <Link
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#ADB7BE] px-5 py-2.5 text-sm font-semibold text-[#ADB7BE] transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  {details.viewSource}
                </Link>
              )}
              {isValidProjectUrl(project.youtubeUrl) && (
                <Link
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#ADB7BE] px-5 py-2.5 text-sm font-semibold text-[#ADB7BE] transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  {details.watchDemo}
                </Link>
              )}
            </div>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {images.map((image, index) => (
              <figure
                key={image}
                className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#181818] ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  preload={index === 0}
                  sizes={index === 0 ? "(min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                  className="object-contain"
                />
              </figure>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-10">
              <section aria-labelledby="project-overview-heading">
                <h2
                  id="project-overview-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  {details.overview}
                </h2>
                <p className="mt-4 leading-8 text-[#ADB7BE]">
                  {project.description}
                </p>
              </section>

              <section aria-labelledby="project-responsibilities-heading">
                <h2
                  id="project-responsibilities-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  {details.responsibilities}
                </h2>
                <p className="mt-4 leading-8 text-[#ADB7BE]">{project.role}</p>
              </section>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8">
              <section aria-labelledby="project-highlights-heading">
                <h2
                  id="project-highlights-heading"
                  className="text-2xl font-bold"
                >
                  {details.highlights}
                </h2>
                <ul className="mt-5 list-disc space-y-3 ps-5 leading-7 text-[#ADB7BE]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>

              <section
                className="mt-8 border-t border-white/10 pt-8"
                aria-labelledby="project-technologies-heading"
              >
                <h2
                  id="project-technologies-heading"
                  className="text-2xl font-bold"
                >
                  {details.technologies}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-[#33353F] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </article>
      </div>

      <Footer locale={locale} content={dictionary.footer} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      </main>
    </>
  );
};

export default ProjectDetailPage;
