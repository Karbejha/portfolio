"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100"
      aria-label="Main navigation"
    >
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo.png"
            alt="Mohamad Karbejha logo"
            loading="lazy"
            className="w-24 sm:w-28 md:w-36 lg:w-40"
            width={150}
            height={150}
            sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 112px"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            type="button"
            onClick={() => setNavbarOpen((isOpen) => !isOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navbarOpen}
            aria-controls="mobile-menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          onLinkClick={() => setNavbarOpen(false)}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
