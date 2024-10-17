import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-transparent text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={50}
                objectFit="contain"
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            All rights reserved © {new Date().getFullYear()} Mohamad Karbejha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;