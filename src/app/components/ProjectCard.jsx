import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const isValidProjectUrl = (url) => Boolean(url && url !== "/");

const ProjectCard = ({
  imgUrl,
  title,
  description,
  techStack = [],
  gitUrl,
  previewUrl,
  labels,
}) => {
  const hasGitUrl = isValidProjectUrl(gitUrl);
  const hasPreviewUrl = isValidProjectUrl(previewUrl) && previewUrl !== gitUrl;
  const formatLabel = (template) => template.replace("{title}", title);

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
      <div className="mt-3 flex h-[19rem] flex-col rounded-b-xl bg-[#181818] px-4 py-6 text-white md:h-80">
        <h3 className="mb-2 line-clamp-2 min-h-[3.5rem] text-xl font-semibold">
          {title}
        </h3>
        <p className="line-clamp-3 min-h-[5.25rem] text-[#ADB7BE]" title={description}>
          {description}
        </p>
        <div
          className="mt-4 flex min-h-[2rem] flex-wrap gap-2"
          aria-label={formatLabel(labels.techLabel)}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white bg-[#33353F] rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
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
              title={labels.unavailableGithub}
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
