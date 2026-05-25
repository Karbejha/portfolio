"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "FlowHR",
    description:
      "A full-stack HR management system with attendance tracking, leave management, performance evaluation, and reporting for managers and employees.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "Express.js", "MongoDB", "TypeScript"],
    gitUrl: "https://github.com/Karbejha/FlowHR",
    previewUrl: "https://flow-hr-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Smart Appointment",
    description:
      "A full-stack appointment booking app built with Angular, ASP.NET Core, MySQL, responsive design, secure authentication, and server-side rendering.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web", "Mobile"],
    techStack: ["Angular", "ASP.NET Core", "MySQL"],
    gitUrl: "https://github.com/Karbejha/BookingSystem",
    previewUrl: null,
  },
  {
    id: 3,
    title: "Misas - Sanal Market",
    description:
      "A virtual market website and mobile application for browsing and purchasing products online.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    techStack: ["Web", "Mobile"],
    gitUrl: null,
    previewUrl: "https://misas.com.tr/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description:
      "An e-commerce website for browsing store products and product information.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    techStack: ["E-commerce", "Web"],
    gitUrl: null,
    previewUrl: "https://ayatekno.com.tr/en/store/",
  },
  {
    id: 5,
    title: "Food Ordering Application",
    description:
      "A food ordering application built with React, Next.js, Node.js, and MongoDB.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    techStack: ["Next.js", "Node.js", "MongoDB"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/capstone-room-8-1",
    previewUrl: null,
  },
  {
    id: 6,
    title: "SaaS Application",
    description:
      "Rankify is a SaaS website for SEO marketing and website design solutions across business types.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "TypeScript", "Node.js"],
    gitUrl: "https://github.com/Karbejha/SaaS-website",
    previewUrl: "https://saas-website-pi.vercel.app/",
  },
  {
    id: 7,
    title: "Movies Streaming Website",
    description: "Hotspot is a website for browsing movies and series online.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    techStack: ["React", "JavaScript", "REST API"],
    gitUrl: "https://github.com/Karbejha/HotspotFilms",
    previewUrl: null,
  },
  {
    id: 8,
    title: "YouTube Video Downloader",
    description:
      "A desktop application for downloading YouTube videos, built with Tkinter and Python.",
    image: "/images/projects/8.png",
    tag: ["All", "Desktop"],
    techStack: ["Python", "Tkinter"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 10,
    title: "Movies Website",
    description:
      "Wave Movies is a website that provides information about the latest movies and TV shows.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    techStack: ["React", "JavaScript", "REST API"],
    gitUrl: "https://github.com/202309-EKTA-JO-FSW/movie-project-room-18",
    previewUrl: "https://movie-project-room-18-q9iz.vercel.app",
  },
];

const projectTags = ["All", "Web", "Mobile", "Desktop"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-8" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-center text-3xl sm:text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
      >
        My Projects
      </h2>
      <div
        className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6"
        aria-label="Filter projects by type"
      >
        {projectTags.map((projectTag) => (
          <ProjectTag
            key={projectTag}
            onClick={setTag}
            name={projectTag}
            isSelected={tag === projectTag}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
