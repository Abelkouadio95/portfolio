'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from '@/components/animation/animatedSection';
import type { Experience } from '@/types/portfolioTypes';

interface CareerTimelineProps {
  label: string;
  title: string;
  subtitle: string;
  viewAll: string;
  aboutUrl: string;
  experiences: Experience[];
}

function shortCompany(company: string) {
  return company.split(':')[0].trim();
}

export default function CareerTimeline({
  label,
  title,
  subtitle,
  viewAll,
  aboutUrl,
  experiences,
}: CareerTimelineProps) {
  return (
    <section className="w-full px-4 relative overflow-hidden items-center w-full pt-8 md:pt-12 pb-16 md:pb-24 bg-slate-50 dark:bg-slate-900/50">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            {label}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent dark:from-blue-600 dark:via-blue-900" />

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute left-0 top-5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 shadow-sm z-10" />

              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 md:p-5 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-400">
                      {shortCompany(exp.company)}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="flex-shrink-0 self-start text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {exp.location && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-blue-400 text-[10px]" />
                    {exp.location}
                  </p>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          href={aboutUrl}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {viewAll}
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
