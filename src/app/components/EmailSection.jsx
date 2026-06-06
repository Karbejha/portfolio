"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { siteConfig } from "../../lib/seo-config";

const EmailSection = ({ content }) => {
  const [state, handleSubmit] = useForm("xayrgoae");

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      />
      <div className="z-10">
        <h2 id="contact-heading" className="text-xl font-bold text-white my-2">
          {content.heading}
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {content.description}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.githubLabel}
          >
            <Image src={GithubIcon} alt="" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.linkedinLabel}
          >
            <Image src={LinkedinIcon} alt="" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div>
        {state.succeeded ? (
          <p className="text-green-500 text-lg mt-2" role="status">
            {content.success}
            <br />
            {content.successFollowUp}
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-xl font-medium">
                {content.emailLabel}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                autoComplete="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={content.emailPlaceholder}
              />
              <ValidationError
                prefix={content.emailErrorPrefix}
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                {content.subjectLabel}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                minLength={3}
                autoComplete="off"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={content.subjectPlaceholder}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                {content.messageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                required
                minLength={10}
                rows={5}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={content.messagePlaceholder}
              />
              <ValidationError
                prefix={content.messageErrorPrefix}
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary-500 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {state.submitting ? content.sending : content.send}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
