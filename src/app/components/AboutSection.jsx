"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const AboutTabContent = ({ tab }) => {
  if (tab.type === "skills") {
    return (
      <ul className="space-y-2 ps-2">
        {tab.groups.map((group) => (
          <li key={group.label}>
            <strong>{group.label}:</strong> {group.value}
          </li>
        ))}
      </ul>
    );
  }

  if (tab.type === "certificates") {
    return (
      <div className="space-y-4">
        {tab.groups.map((group) => (
          <div key={group.provider}>
            <h3 className="text-pink-500">{group.provider}</h3>
            <ul className="list-disc space-y-1 ps-5">
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
    );
  }

  return (
    <ul className="list-disc space-y-2 ps-5">
      {tab.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const AboutSection = ({ content, direction }) => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();
  const selectedTab =
    content.tabs.find((item) => item.id === tab) ?? content.tabs[0];
  const textAlignClass = direction === "rtl" ? "text-right" : "text-left";

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
          alt={content.imageAlt}
          className="rounded-lg"
          loading="lazy"
        />
        <div className={`mt-4 md:mt-0 ${textAlignClass} flex flex-col h-full`}>
          <h2 id="about-heading" className="text-4xl font-bold text-white mb-4">
            {content.heading}
          </h2>
          <p className="text-base lg:text-lg mb-6">
            {content.paragraphs.map((paragraph) => (
              <React.Fragment key={paragraph}>
                {paragraph}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
          <div
            className="flex flex-row justify-start mt-8"
            role="tablist"
            aria-label={content.detailsLabel}
          >
            {content.tabs.map((item) => (
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
            <AboutTabContent tab={selectedTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
