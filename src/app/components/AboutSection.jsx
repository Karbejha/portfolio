"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python ( include: Django , PyQt5, Tkinter , NumPy , OpenCV ... )</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>        
        <li>JavaScript</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>MySQL-SQL</li>
      </ul>
    ),
    
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Engineering-DOĞUŞ ÜNİVERSİTY- Istanbul/Turkey</li>
        <li>Robot Engineering (Double Major)-DOĞUŞ ÜNİVERSİTY- Istanbul/Turkey</li>
        <li>Fullstack Web Development-Re:Coded</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Re:Coded</li>
        <Link href={"https://www.credential.net/26f7bbd2-4097-4981-a029-87786aeec745"}style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Fullstack Web Development Bootcamp</Link><br></br>
        <li>Coursera:</li>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/LJXC9KQGFJS5"} style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Meta - Fullstack Web Developer (Django framework)</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/A78T3X9FCYBX"}style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Web Application Technologies and Django</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/C5YJ8WZ78HZL"}style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Google - The Bits and Bytes of Computer Networking</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/S2KD7PSVQEW5"}style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Google - Technical Support Fundamentals</Link><br></br>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
