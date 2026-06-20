"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon, EyeIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ImageCarousel from "./ImageCarousel";
import { AnimatePresence, motion } from "framer-motion";

const isValidProjectUrl = (url) => Boolean(url && url !== "/");

const createProjectId = (projectId) => `project-${projectId}-details`;

const getCollapsedDescription = (description, maxLength = 190) => {
  if (!description || description.length <= maxLength) {
    return description;
  }

  const excerpt = description.slice(0, maxLength).trim();
  const lastSpace = excerpt.lastIndexOf(" ");

  return `${excerpt.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}...`;
};

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : "";
};

const ProjectCard = ({
  projectId,
  imgUrl,
  images,
  youtubeUrl,
  title,
  tagline,
  description,
  role,
  highlights = [],
  techStack = [],
  gitUrl,
  hideGitHubButton = false,
  previewUrl,
  labels,
  priority = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);
  const hasGitUrl = isValidProjectUrl(gitUrl);
  const hasPreviewUrl = isValidProjectUrl(previewUrl) && previewUrl !== gitUrl;
  const hasExpandableContent = Boolean(
    role || highlights.length > 0 || (description?.length ?? 0) > 170,
  );
  const formatLabel = (template) => template.replace("{title}", title);
  const detailsId = createProjectId(projectId);
  const visibleDescription =
    hasExpandableContent && !isExpanded
      ? getCollapsedDescription(description)
      : description;
  const hasCarousel = images && images.length > 1;

  return (
    <article className="flex h-full flex-col">
      <div className="h-52 md:h-72 rounded-t-xl relative group bg-[#181818] overflow-hidden">
        {hasCarousel ? (
          <ImageCarousel
            images={images}
            alt={formatLabel(labels.imageAlt)}
          />
        ) : (
          <>
            <Image
              src={imgUrl}
              alt={formatLabel(labels.imageAlt)}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain"
              priority={priority}
            />
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-focus-within:flex group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 transition-all duration-500">
              {hasGitUrl && (
                <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={formatLabel(labels.repositoryLabel)}
                  className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white focus:border-white group/link"
                >
                  <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-focus/link:text-white" />
                </Link>
              )}
              {hasPreviewUrl && (
                <Link
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={formatLabel(labels.previewLabel)}
                  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white focus:border-white group/link"
                >
                  <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-focus/link:text-white" />
                </Link>
              )}
            </div>
          </>
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col rounded-b-xl bg-[#181818] px-4 py-6 text-white">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        {tagline && (
          <p className="mb-3 text-sm font-medium text-primary-400">
            {tagline}
          </p>
        )}

        <div
          id={detailsId}
          className="space-y-4 text-[#ADB7BE]"
        >
          <p>{visibleDescription}</p>
          {isExpanded && (
            <>
              {role && (
                <p className="text-sm">
                  <span className="font-semibold text-white">
                    {labels.role}:{" "}
                  </span>
                  {role}
                </p>
              )}
              {highlights.length > 0 && (
                <ul className="list-disc space-y-2 ps-5 text-sm">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>

        {hasExpandableContent && (
          <button
            type="button"
            aria-controls={detailsId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
            className="mt-3 inline-flex w-fit items-center gap-1 rounded-full text-sm font-medium text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-[#181818]"
          >
            {isExpanded ? labels.showLess : labels.showMore}
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        <div
          className="mt-5 flex flex-wrap content-start gap-2"
          aria-label={formatLabel(labels.techLabel)}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="h-fit text-xs text-white bg-[#33353F] rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {hasGitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ADB7BE] px-3 py-1.5 text-xs md:text-sm text-[#ADB7BE] hover:border-white hover:text-white shrink-0 whitespace-nowrap"
            >
              <CodeBracketIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {labels.github}
            </Link>
          ) : !hideGitHubButton ? (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ADB7BE] px-3 py-1.5 text-xs md:text-sm text-[#ADB7BE] opacity-50 shrink-0 whitespace-nowrap"
            >
              <CodeBracketIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {labels.github}
            </span>
          ) : null}
          {hasPreviewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ADB7BE] px-3 py-1.5 text-xs md:text-sm text-[#ADB7BE] hover:border-white hover:text-white shrink-0 whitespace-nowrap"
            >
              <EyeIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {labels.liveDemo}
            </Link>
          )}
          {youtubeUrl && (
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#ADB7BE] px-3 py-1.5 text-xs md:text-sm text-[#ADB7BE] hover:border-white hover:text-white hover:bg-white/5 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 shrink-0 whitespace-nowrap"
            >
              <PlayIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {labels.watchDemo}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl mx-4 bg-[#181818] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#181818]">
                <h4 className="text-lg font-semibold text-white">
                  {title} - {labels.watchDemo}
                </h4>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Video Responsive Container */}
              <div className="relative w-full pb-[56.25%] h-0 bg-black">
                <iframe
                  src={`${getYouTubeEmbedUrl(youtubeUrl)}?autoplay=1&rel=0`}
                  title={`${title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectCard;
