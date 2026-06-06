"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import { getLocalePath } from "../../lib/i18n";

const Navbar = ({ locale, nav, direction }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const alternateLocale = locale === "ar" ? "en" : "ar";
  const alternatePath = getLocalePath(alternateLocale);
  const homePath = getLocalePath(locale);

  const handleLanguageSwitch = () => {
    const hash = window.location.hash;
    window.location.href = `${alternatePath}${hash}`;
  };

  return (
    <nav
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100"
      aria-label={nav.ariaLabel}
      dir={direction}
    >
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={homePath} aria-label={nav.logoLabel}>
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

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={handleLanguageSwitch}
            className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-200 hover:border-white hover:text-white"
            aria-label={nav.languageToggleLabel}
          >
            {alternateLocale === "ar" ? "ع" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setNavbarOpen((isOpen) => !isOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            aria-label={navbarOpen ? nav.closeMenu : nav.openMenu}
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
          <ul className="flex items-center gap-10 p-4 md:p-0 md:flex-row mt-0">
            {nav.links.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleLanguageSwitch}
                className="rounded-full border border-[#ADB7BE] px-4 py-2 text-sm font-semibold text-[#ADB7BE] hover:border-white hover:text-white"
                aria-label={nav.languageToggleLabel}
              >
                {alternateLocale === "ar" ? "العربية" : "English"}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={nav.links}
          onLinkClick={() => setNavbarOpen(false)}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
