'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon } from "../icons";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from 'next-intl';

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "", onClick }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'fr';

  return (
    <Link href={`/${locale}${href}`} className={`${className} relative group`} onClick={onClick}>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full px-4 md:px-32 py-4 md:py-8 pb-2 font-medium flex items-center justify-between z-50">
      <div className="text-lg font-bold">
        <Link href="/">ABEL KOUADIO</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10">
        <CustomLink href="/" title={t('home')} />
        <CustomLink href="/about" title={t('about')} />
        <CustomLink href="/certifications" title="Certifications" />
        <CustomLink href="/projects" title={t('projects')} />
      </nav>

      {/* Desktop Social Links */}
      <nav className="hidden md:flex items-center justify-center flex-wrap">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-gray-200 md:hidden"
        >
          <nav className="flex flex-col p-4 space-y-4">
            <CustomLink href="/" title={t('home')} className="text-lg" onClick={() => setIsMenuOpen(false)} />
            <CustomLink href="/about" title={t('about')} className="text-lg" onClick={() => setIsMenuOpen(false)} />
            <CustomLink href="/certifications" title="Certifications" className="text-lg" onClick={() => setIsMenuOpen(false)} />
            <CustomLink href="/projects" title={t('projects')} className="text-lg" onClick={() => setIsMenuOpen(false)} />
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
              <motion.a href="https://www.linkedin.com/in/abel-kouadio-50333527b/" 
              target={"_blank"}
              className="w-6"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}> <LinkedInIcon/></motion.a>
              <motion.a href="https://github.com/Abelkouadio95"
              target="_blank"
              className="w-6"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}><GithubIcon/></motion.a>
              <div>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
