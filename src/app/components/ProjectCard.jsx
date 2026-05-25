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
}) => {
  const hasGitUrl = isValidProjectUrl(gitUrl);
  const hasPreviewUrl = isValidProjectUrl(previewUrl) && previewUrl !== gitUrl;

  return (
    <article>
      <div className="h-52 md:h-72 rounded-t-xl relative group bg-[#181818] overflow-hidden">
        <Image
          src={imgUrl}
          alt={`${title} project screenshot`}
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
              aria-label={`View ${title} GitHub repository`}
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
              aria-label={`View ${title} live demo`}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white focus:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-focus/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>
        <div
          className="flex flex-wrap gap-2 mt-4"
          aria-label={`${title} technologies`}
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
        <div className="flex flex-wrap gap-3 mt-4">
          {hasGitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#ADB7BE] px-4 py-2 text-sm text-[#ADB7BE] hover:border-white hover:text-white"
            >
              <CodeBracketIcon className="h-4 w-4" />
              GitHub
            </Link>
          ) : (
            <span
              aria-disabled="true"
              title="GitHub link unavailable"
              className="inline-flex items-center gap-2 rounded-full border border-[#ADB7BE] px-4 py-2 text-sm text-[#ADB7BE] opacity-50"
            >
              <CodeBracketIcon className="h-4 w-4" />
              GitHub
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
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
