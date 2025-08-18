'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GithubIcon, LinkedInIcon } from "../icons";
import { motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          absolute left-0 -bottom-0.5 h-[2px] bg-black
          transition-all duration-300 ease-out
          ${pathname === href ? "w-full" : "w-0"}
          group-hover:w-full
        `}
      />
    </Link>
  );
};

export function Navbar() {
  return (
    <header className="fixed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  w-full px-32 py-8 pb-2 font-medium flex items-center justify-between z-50">
      <nav className="flex gap-10">
        <CustomLink href="/" title="Accueil" />
        <CustomLink href="/about" title="A propos" />
        <CustomLink href="/projects" title="Projets" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/"
        className="w-7 mr-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}> <LinkedInIcon/></motion.a>
        <motion.a href="/"
        className="w-8 ml-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}><GithubIcon/></motion.a>
      </nav>
    </header>
  );
}
