import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={150}
          layout="responsive"
        />
        </Link>
        <p className="text-slate-600">All rights reserved ® Mohamad Karbejha</p>
      </div>
    </footer>
  );
};

export default Footer;
