import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getLocalePath } from "../../lib/i18n";

const Footer = ({ locale, content }) => {
  return (
    <footer className="border-t border-[#33353F] bg-transparent text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center gap-4">
            <Link href={getLocalePath(locale)} aria-label={content.logoLabel}>
              <Image
                src="/images/logo.png"
                alt="Mohamad Karbejha logo"
                width={300}
                height={200}
                className="h-14 w-auto min-w-[160px] object-contain mix-blend-lighten"
                sizes="300px"
              />
            </Link>
            <span className="text-slate-500 text-sm">
              {content.tagline}
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
