'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import type { Project } from '@/types/portfolioTypes';

interface FeaturedProjectCardProps {
  project: Project;
  category: string;
  impact: string;
  viewProjectLabel: string;
  projectsUrl: string;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  category,
  impact,
  viewProjectLabel,
  projectsUrl,
  index,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide bg-blue-600 text-white rounded-md">
          {category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {impact}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
          <Link
            href={projectsUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {viewProjectLabel}
            <FaArrowRight className="text-[10px]" />
          </Link>

          <div className="flex items-center gap-2 ml-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <FaGithub className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
