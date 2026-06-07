"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import { getLocalePath } from "../../lib/i18n";

const Navbar = ({ locale, nav, direction }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const homePath = getLocalePath(locale);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDesktop = dropdownRef.current && !dropdownRef.current.contains(event.target);
      const isOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
      if (isOutsideDesktop && isOutsideMobile) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSwitch = (targetLocale) => {
    const hash = window.location.hash;
    const path = getLocalePath(targetLocale);
    window.location.href = `${path}${hash}`;
  };

  return (
    <nav
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100"
      aria-label={nav.ariaLabel}
      dir={direction}
    >
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={homePath} aria-label={nav.logoLabel}>
          <Image
            src="/images/logo.png"
            alt="Mohamad Karbejha logo"
            priority
            className="w-24 sm:w-28 md:w-36 lg:w-40"
            width={150}
            height={150}
            sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 112px"
          />
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          <div className="relative" ref={mobileDropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-[#181818] hover:border-white hover:text-white transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3.5 h-3.5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
                />
              </svg>
              <span className="uppercase">{locale}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-3 h-3 ml-1.5 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {langDropdownOpen && (
              <ul className="absolute right-0 mt-2 py-1 w-28 bg-[#181818] border border-[#33353F] rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <li>
                  <button
                    onClick={() => {
                      handleLanguageSwitch("en");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-center px-3 py-1.5 text-xs font-bold ${locale === "en" ? "text-primary-500 bg-zinc-800" : "text-slate-400 hover:text-white"}`}
                  >
                    English (EN)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLanguageSwitch("tr");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-center px-3 py-1.5 text-xs font-bold ${locale === "tr" ? "text-primary-500 bg-zinc-800" : "text-slate-400 hover:text-white"}`}
                  >
                    Türkçe (TR)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLanguageSwitch("ar");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-center px-3 py-1.5 text-xs font-bold ${locale === "ar" ? "text-primary-500 bg-zinc-800" : "text-slate-400 hover:text-white"}`}
                  >
                    العربية (AR)
                  </button>
                </li>
              </ul>
            )}
          </div>
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
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center rounded-full border border-[#33353F] px-4 py-2 text-sm font-semibold text-[#ADB7BE] bg-[#181818] hover:border-white hover:text-white transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
                    />
                  </svg>
                  {locale === "en" ? "English" : locale === "tr" ? "Türkçe" : "العربية"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-3.5 h-3.5 ml-2 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {langDropdownOpen && (
                  <ul className="absolute right-0 mt-2 py-1.5 w-36 bg-[#181818] border border-[#33353F] rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <li>
                      <button
                        onClick={() => {
                          handleLanguageSwitch("en");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2 text-sm font-bold transition-colors hover:bg-zinc-800 ${locale === "en" ? "text-primary-500" : "text-[#ADB7BE] hover:text-white"}`}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLanguageSwitch("tr");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2 text-sm font-bold transition-colors hover:bg-zinc-800 ${locale === "tr" ? "text-primary-500" : "text-[#ADB7BE] hover:text-white"}`}
                      >
                        Türkçe
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLanguageSwitch("ar");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2 text-sm font-bold transition-colors hover:bg-zinc-800 ${locale === "ar" ? "text-primary-500" : "text-[#ADB7BE] hover:text-white"}`}
                      >
                        العربية
                      </button>
                    </li>
                  </ul>
                )}
              </div>
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
