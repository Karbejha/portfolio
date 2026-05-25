"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { siteConfig } from "../../lib/seo-config";

const EmailSection = () => {
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
          Let&apos;s Work Together
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently open to full-time remote roles and freelance
          projects. Feel free to reach out - I respond within 24 hours.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mohamad Karbejha on GitHub"
          >
            <Image src={GithubIcon} alt="" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mohamad Karbejha on LinkedIn"
          >
            <Image src={LinkedinIcon} alt="" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div>
        {state.succeeded ? (
          <p className="text-green-500 text-lg mt-2" role="status">
            Email sent successfully!
            <br />
            I&apos;ll get back to you soon.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-xl font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                autoComplete="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                minLength={3}
                autoComplete="off"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter the subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                minLength={10}
                rows={5}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary-500 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
