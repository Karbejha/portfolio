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
        <li>C# ( include: ASP.NET Core, WebAPIs , ASP.NET MVC , Authentication: ASP.NET Identity,Entity Framework Core )</li>
        <li>Python ( include: Django , PyQt5, Tkinter , NumPy , OpenCV ... )</li>
        <li>Angular</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>        
        <li>JavaScript</li>
        <li>Express.js</li>
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
        <li>Coursera(Programming):</li>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/LJXC9KQGFJS5"} style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Meta - Fullstack Web Developer (Django framework)</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/PHRF7ISJZTS3"} style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• TypeScript</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/A78T3X9FCYBX"} style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Web Application Technologies and Django</Link><br></br>
        <Link href={"https://www.coursera.org/account/accomplishments/certificate/6CX8MU7WZJLS"} style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">• Google Cloud Fundamentals: Core Infrastructure</Link><br></br>
        <li>Coursera(IT):</li>
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
    <section className="text-white" id="about" aria-labelledby="about-heading">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500} 
          alt="Mohamad Karbejha - About me image showing professional workspace" 
          className="rounded-lg"
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 id="about-heading" className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-6">
            I am a <strong>Full Stack Web Developer</strong> with a passion for creating
            interactive and responsive web applications. I have experience
            working with <strong>C#, ASP.NET Core, React, Next.js, Python, Django,
            JavaScript, Angular, Node.js, Express, MongoDB, MySQL</strong> and <strong>Git</strong>.
            I am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications.
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
          <div className="mt-8" aria-live="polite">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      
      {/* Structured Data for About Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamad Karbejha",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Web Developer with expertise in C#, ASP.NET Core, React, Next.js, Python, and modern web technologies",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full Stack Developer",
              "description": "Develops both frontend and backend components of web applications",
              "skills": [
                "C# Programming",
                "ASP.NET Core",
                "React.js",
                "Next.js",
                "Python",
                "Django",
                "JavaScript",
                "Angular",
                "Node.js",
                "MongoDB",
                "MySQL",
                "Entity Framework Core",
                "Web APIs",
                "ASP.NET MVC",
                "ASP.NET Identity"
              ]
            },
            "knowsAbout": [
              "Full Stack Development",
              "Web Development",
              "Software Engineering",
              "Database Management",
              "API Development",
              "Frontend Development",
              "Backend Development",
              "Responsive Design",
              "Authentication Systems",
              "Cloud Computing"
            ]
          })
        }}
      />
    </section>
  );
};

export default AboutSection;
