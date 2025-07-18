"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="hero" aria-label="Hero section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mohamad Karbejha",
                1000,
                "Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              aria-label="Dynamic professional titles"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            <strong>Full Stack Web Developer</strong> with extensive expertise in <strong>C# technologies</strong>, including <strong>ASP.NET Core</strong>, <strong>Web APIs</strong>, <strong>ASP.NET MVC</strong>, <strong>ASP.NET Identity</strong> for secure authentication, and <strong>Entity Framework Core</strong> for database management. Skilled in building scalable web applications with modern frameworks and clean architecture. Additional experience in <strong>HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB</strong>, and <strong>Python technologies</strong> such as <strong>Django, OpenCV, NumPy, Tkinter</strong>, and <strong>PyQt5</strong>. Proficient in SQL databases and IT system administration. <strong>Multilingual</strong> in English, Turkish, and Arabic, based in <strong>Istanbul, Turkey</strong>.
          </p>
          <div className="flex flex-wrap gap-2 mb-6" aria-label="Key skills">
            {['C#', 'ASP.NET Core', 'React', 'Next.js', 'Python', 'Django', 'JavaScript', 'Node.js', 'MongoDB', 'SQL'].map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              aria-label="Contact Mohamad Karbejha for hiring opportunities"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/13kbn9MvEJ_noMgMQCgIb8NjEWYxf5lp0/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              aria-label="View Mohamad Karbejha's CV/Resume"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV/Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-2 lg:mt-0 flex justify-center sm:justify-end"
        >
          <div className="flex justify-center items-center">
            <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative flex justify-center items-center">
              <Image
                src="/images/hero-image.png"
                alt="Mohamad Karbejha - Full Stack Developer and Software Engineer"
                className="w-full h-full object-cover rounded-full"
                width={300}
                height={300}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
