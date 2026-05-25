"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const certificateGroups = [
  {
    provider: "Re:Coded",
    certificates: [
      {
        title: "Fullstack Web Development Bootcamp",
        href: "https://www.credential.net/26f7bbd2-4097-4981-a029-87786aeec745",
      },
    ],
  },
  {
    provider: "Coursera (Programming)",
    certificates: [
      {
        title: "Meta - Fullstack Web Developer (Django framework)",
        href: "https://www.coursera.org/account/accomplishments/certificate/LJXC9KQGFJS5",
      },
      {
        title: "TypeScript",
        href: "https://www.coursera.org/account/accomplishments/certificate/PHRF7ISJZTS3",
      },
      {
        title: "Web Application Technologies and Django",
        href: "https://www.coursera.org/account/accomplishments/certificate/A78T3X9FCYBX",
      },
      {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        href: "https://www.coursera.org/account/accomplishments/certificate/6CX8MU7WZJLS",
      },
    ],
  },
  {
    provider: "Coursera (IT)",
    certificates: [
      {
        title: "Google - The Bits and Bytes of Computer Networking",
        href: "https://www.coursera.org/account/accomplishments/certificate/C5YJ8WZ78HZL",
      },
      {
        title: "Google - Technical Support Fundamentals",
        href: "https://www.coursera.org/account/accomplishments/certificate/S2KD7PSVQEW5",
      },
    ],
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="space-y-2 pl-2">
        <li>
          <strong>Frontend:</strong> Next.js, React, TypeScript, JavaScript,
          HTML/CSS
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js, Python, Django
        </li>
        <li>
          <strong>Database:</strong> PostgreSQL, MongoDB, MySQL
        </li>
        <li>
          <strong>DevOps:</strong> Docker, CI/CD, Git
        </li>
        <li>
          <strong>Other:</strong> REST APIs, WebSocket, Socket.IO
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Computer Engineering - Dogus University - Istanbul, Turkey</li>
        <li>
          Robot Engineering (Double Major) - Dogus University - Istanbul,
          Turkey
        </li>
        <li>Fullstack Web Development - Re:Coded</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        {certificateGroups.map((group) => (
          <div key={group.provider}>
            <h3 className="text-pink-500">{group.provider}</h3>
            <ul className="list-disc space-y-1 pl-5">
              {group.certificates.map((certificate) => (
                <li key={certificate.href}>
                  <Link
                    href={certificate.href}
                    className="underline underline-offset-4 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certificate.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();
  const selectedTab = TAB_DATA.find((item) => item.id === tab) ?? TAB_DATA[0];

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
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Mohamad Karbejha professional workspace"
          className="rounded-lg"
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 id="about-heading" className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg mb-6">
            I&apos;m a Full Stack Developer with 6+ years of professional
            experience, currently working remotely at Techtile (Germany). I
            specialize in building production-grade web applications using
            Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.
            <br />
            <br />I hold two B.Sc. degrees from Dogus University: Computer
            Engineering and Robot Engineering. I&apos;ve worked across industries
            including HR, maritime systems, e-commerce, and SaaS platforms.
            <br />
            <br />
            I&apos;m multilingual (Arabic, English, Turkish) and open to new
            remote opportunities and relocation.
          </p>
          <div
            className="flex flex-row justify-start mt-8"
            role="tablist"
            aria-label="About section details"
          >
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                id={`${item.id}-tab`}
                controls={`${item.id}-panel`}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div
            id={`${selectedTab.id}-panel`}
            className="mt-8"
            role="tabpanel"
            aria-labelledby={`${selectedTab.id}-tab`}
          >
            {selectedTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
