"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsSection = ({ content }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = content.items.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
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
      <div
        className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6"
        aria-label={content.filtersLabel}
      >
        {content.filters.map((projectTag) => (
          <ProjectTag
            key={projectTag.id}
            onClick={setTag}
            name={projectTag.id}
            label={projectTag.label}
            isSelected={tag === projectTag.id}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            className="h-full"
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              techStack={project.techStack}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              labels={content.cards}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
