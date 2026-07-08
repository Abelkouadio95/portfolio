'use client';

import Link from 'next/link';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '@/components/animation/animatedSection';
import { LinkedInIcon, LinkArrow } from '@/components/icons';

interface FinalCtaProps {
  title: string;
  subtitle: string;
  projectsCta: string;
  cv: string;
  cvLink: string;
  linkedin: string;
  linkedinUrl: string;
  projectsUrl: string;
}

export default function FinalCta({
  title,
  subtitle,
  projectsCta,
  cv,
  cvLink,
  linkedin,
  linkedinUrl,
  projectsUrl,
}: FinalCtaProps) {
  return (
    <section className="w-full px-4 relative overflow-hidden items-center w-full pt-8 md:pt-12 pb-16 md:pb-24">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center bg-slate-900 dark:bg-slate-800 rounded-2xl px-6 py-12 md:px-12 md:py-16 shadow-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={projectsUrl}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
            >
              {projectsCta}
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href={cvLink}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg font-semibold text-sm border border-white/20 hover:border-white/40 transition-all duration-200 w-full sm:w-auto"
            >
              <FaDownload className="text-xs" />
              {cv}
            </Link>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              {linkedin}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
