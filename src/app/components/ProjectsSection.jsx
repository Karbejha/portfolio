"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { getLocalizedHref } from "../../lib/i18n";

const PROJECTS_PER_BATCH = 6;

const usePrefersReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setShouldReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return shouldReduceMotion;
};

const ProjectsSection = ({ content, locale }) => {
  const [tag, setTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_BATCH);
  const ref = useRef(null);
  const nextProjectToFocus = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = usePrefersReducedMotion();
  const featuredProjects = content.items.filter((project) => project.featured);

  const filteredProjects = content.items.filter((project) =>
    project.tag.includes(tag),
  );
  const shownCount = Math.min(visibleCount, filteredProjects.length);
  const hasMoreProjects = shownCount < filteredProjects.length;
  const countLabel = content.resultsCount
    .replace("{shown}", shownCount)
    .replace("{total}", filteredProjects.length);

  const handleTagChange = (nextTag) => {
    if (nextTag === tag) return;

    nextProjectToFocus.current = null;
    setTag(nextTag);
    setVisibleCount(PROJECTS_PER_BATCH);
  };

  const handleShowMore = () => {
    nextProjectToFocus.current = shownCount;
    setVisibleCount((count) => count + PROJECTS_PER_BATCH);
  };

  useEffect(() => {
    if (nextProjectToFocus.current === null) return;

    // Continue keyboard navigation at the first newly revealed project.
    ref.current?.children[nextProjectToFocus.current]?.focus();
    nextProjectToFocus.current = null;
  }, [visibleCount]);

  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-center text-3xl sm:text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
      >
        {content.heading}
      </h2>
      {content.featured && featuredProjects.length > 0 && (
        <div
          data-featured-projects
          className="mb-12 rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-950/40 via-[#181818] to-secondary-950/30 p-6 sm:p-8"
          aria-labelledby="featured-projects-heading"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            {content.featured.eyebrow}
          </p>
          <h3 id="featured-projects-heading" className="text-2xl font-bold text-white sm:text-3xl">
            {content.featured.heading}
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-[#ADB7BE]">
            {content.featured.description}
          </p>
          <ul className="mt-6 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <li
                key={project.id}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-[#121212]/80 p-5"
              >
                <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-primary-300">
                  {project.tagline}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#33353F] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  <Link
                    href={getLocalizedHref(locale, `projects/${project.slug}/`)}
                    className="ms-auto text-sm font-medium text-primary-300 underline underline-offset-4 hover:text-white"
                  >
                    {content.featured.viewDetails}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6"
        aria-label={content.filtersLabel}
      >
        {content.filters.map((projectTag) => (
          <ProjectTag
            key={projectTag.id}
            onClick={handleTagChange}
            name={projectTag.id}
            label={projectTag.label}
            isSelected={tag === projectTag.id}
          />
        ))}
      </div>
      <ul
        id="projects-list"
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
      >
        {/* Keep project content in the HTML; reveal it in batches. */}
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            id={`project-${project.id}`}
            hidden={index >= shownCount}
            tabIndex={-1}
            aria-label={project.title}
            className="h-full scroll-mt-28 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
            variants={cardVariants}
            initial="initial"
            animate={isInView && index < shownCount ? "animate" : "initial"}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              delay: shouldReduceMotion ? 0 : (index % PROJECTS_PER_BATCH) * 0.1,
            }}
          >
            <ProjectCard
              projectId={project.id}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              role={project.role}
              highlights={project.highlights}
              imgUrl={project.image}
              imageBackground={project.imageBackground}
              images={project.images}
              youtubeUrl={project.youtubeUrl}
              techStack={project.techStack}
              gitUrl={project.gitUrl}
              hideGitHubButton={project.hideGitHubButton}
              previewUrl={project.previewUrl}
              labels={content.cards}
            />
          </motion.li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-center gap-4">
        <p role="status" aria-atomic="true" className="text-sm text-[#ADB7BE]">
          {countLabel}
        </p>
        {hasMoreProjects && (
          <button
            type="button"
            onClick={handleShowMore}
            aria-controls="projects-list"
            className="rounded-full border-2 border-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
          >
            {content.showMoreProjects}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
