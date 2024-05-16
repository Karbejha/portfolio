"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is my personal portfolio website built with React.js and Next.js.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://github.com/Karbejha/portfolio",
  },
  {
    id: 2,
    title: "Movies Website",
    description: "Wave Movies is a website that provides information about the latest movies and TV shows.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/movie-project-room-18",
    previewUrl: "https://movie-project-room-18-q9iz.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "AYATEKNO is a e-commerce website that provides information about the latest products.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ayatekno.com.tr/en/store/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "This is a food ordering application built with React.js and Next.js in Front-end , Node.js and MongoDB in Back-end.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/capstone-room-8-1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Movies Streaming website",
    description: "Hotspot is  a website to watch movies and series online.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Karbejha/HotspotFilms",
    previewUrl: "http://dou.freecluster.eu/?i=1",
  },
  {
    id: 6,
    title: "YouTube Video Downloader",
    description: "Desktop application to download YouTube videos, built with Tkinter and Python.",
    image: "/images/projects/6.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
