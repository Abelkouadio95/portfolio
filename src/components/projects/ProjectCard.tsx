"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaBookOpen } from "react-icons/fa";
import type { Project } from "@/types/portfolioTypes";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
  onVoirPlus: (project: Project) => void;
}

export default function ProjectCard({ project, onVoirPlus }: ProjectCardProps) {
  const t = useTranslations('projects');
  const hasCaseStudy = !!project.caseStudy;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all overflow-hidden hover:border-blue-300 dark:hover:border-blue-700"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {hasCaseStudy && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wide bg-blue-600 text-white rounded-md shadow-sm">
            <FaBookOpen className="text-[9px]" />
            {t('caseStudy')}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onVoirPlus(project)}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white transition ${
              hasCaseStudy
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600'
            }`}
          >
            <FaBookOpen className="text-xs" />
            {hasCaseStudy ? t('caseStudyBtn') : t('seeMore')}
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition"
            >
              <FaExternalLinkAlt className="text-xs" /> Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition"
            >
              <FaGithub className="text-xs" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
