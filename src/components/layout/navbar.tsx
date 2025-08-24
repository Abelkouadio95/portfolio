'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GithubIcon, LinkedInIcon } from "../icons";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from 'next-intl';

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'fr';

  return (
    <Link href={`/${locale}${href}`} className={`${className} relative group`}>
      {title}
      <span
        className={`
          absolute left-0 -bottom-0.5 h-[2px] bg-black
          transition-all duration-300 ease-out
          ${pathname === `/${locale}${href}` ? "w-full" : "w-0"}
          group-hover:w-full
        `}
      />
    </Link>
  );
};

export function Navbar() {
  const t = useTranslations('nav');
  
  return (
    <header className="fixed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  w-full px-32 py-8 pb-2 font-medium flex items-center justify-between z-50">
      <nav className="flex gap-10">
        <CustomLink href="/" title={t('home')} />
        <CustomLink href="/about" title={t('about')} />
        <CustomLink href="/projects" title={t('projects')} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://www.linkedin.com/in/abel-kouadio-50333527b/" 
        target={"_blank"}
        className="w-5 mr-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}> <LinkedInIcon/></motion.a>
        <motion.a href="https://github.com/Abelkouadio95"
        target="_blank"
        className="w-6 ml-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}><GithubIcon/></motion.a>
        <div className="ml-3">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
