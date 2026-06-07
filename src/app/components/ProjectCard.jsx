"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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

const ProjectCard = ({
  projectId,
  imgUrl,
  title,
  tagline,
  description,
  role,
  highlights = [],
  techStack = [],
  gitUrl,
  previewUrl,
  labels,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <article className="flex h-full flex-col">
      <div className="h-52 md:h-72 rounded-t-xl relative group bg-[#181818] overflow-hidden">
        <Image
          src={imgUrl}
          alt={formatLabel(labels.imageAlt)}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
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

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {hasGitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#ADB7BE] px-4 py-2 text-sm text-[#ADB7BE] hover:border-white hover:text-white"
            >
              <CodeBracketIcon className="h-4 w-4" />
              {labels.github}
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-2 rounded-full border border-[#ADB7BE] px-4 py-2 text-sm text-[#ADB7BE] opacity-50"
            >
              <CodeBracketIcon className="h-4 w-4" />
              {labels.github}
            </span>
          )}
          {hasPreviewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#ADB7BE] px-4 py-2 text-sm text-[#ADB7BE] hover:border-white hover:text-white"
            >
              <EyeIcon className="h-4 w-4" />
              {labels.liveDemo}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
