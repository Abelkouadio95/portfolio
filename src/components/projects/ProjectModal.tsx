"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import type { Project } from "@/types/portfolioTypes";
import CaseStudyContent from "./CaseStudyContent";
import { useTranslations } from "next-intl";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations('projects');
  const isCaseStudy = !!project?.caseStudy;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`relative z-[61] max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl ${isCaseStudy ? 'w-[min(960px,92vw)]' : 'w-[min(900px,92vw)]'}`}
          >
            <button
              aria-label="Fermer"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 shadow border border-slate-200 dark:border-slate-700 z-10"
            >
              <FaTimes />
            </button>

            <div className="relative h-52 md:h-60 w-full rounded-t-2xl overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-contain p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
              />
            </div>

            <div className="p-6 md:p-8">
              {isCaseStudy && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-xs font-semibold uppercase tracking-wide bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-md">
                  <FaBookOpen className="text-[10px]" />
                  {t('caseStudy')}
                </span>
              )}

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h2>

              {isCaseStudy ? (
                <CaseStudyContent
                  caseStudy={project.caseStudy!}
                  tags={project.tags}
                  labels={{
                    context: t('context'),
                    problem: t('problem'),
                    solution: t('solution'),
                    stack: t('tech'),
                    results: t('results'),
                  }}
                />
              ) : (
                <>
                  {project.longDescription.map((ld, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-300 mb-2 text-sm leading-relaxed">
                      {ld}
                    </p>
                  ))}

                  {project.tags && (
                    <div className="mt-5 mb-5">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">{t('tech')}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">{t('features')}</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {project.features.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-5 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>{t('pOne')}</p>
                    <p>{t('pTwo')}</p>
                  </div>
                </>
              )}

              <div className="flex flex-wrap gap-3 pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> {t('demo')}
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                  >
                    <FaGithub /> {t('sourceCode')}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
