import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-transparent text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/images/logo.png"
                alt="Mohamad Karbejha logo"
                width={150}
                height={50}
                className="w-auto h-auto object-contain"
                sizes="150px"
              />
            </Link>
            <span className="text-slate-500 text-sm">
              Full Stack Developer - Istanbul, Turkey
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            Copyright 2026 Mohamad Karbejha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
