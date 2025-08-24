"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types/portfolio";
import { useTranslations } from "next-intl";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations('projects');
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
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
            className="relative z-[61] w-[min(900px,92vw)] max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <button
              aria-label="Fermer"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow border border-gray-200 dark:border-gray-700"
            >
              <FaTimes />
            </button>

            <div className="relative h-60 w-full rounded-t-2xl overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-contain p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
                {project.longDescription.map((ld,i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 mb-2">
                    {ld}
                  </p>
                ))
                }
              {project.tags && (
                <div className="mt-5 mb-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('tech')} </h3>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 border border-gray-400 ">
                          {tag}
                        </span>
                    ))}
                  </div>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{t('features')} </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    {project.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-7 mb-4 text-sm">
                <p>{t('p1')} </p>
                <p>{t('p2')} </p>
              </div>
              

              <div className="flex flex-wrap gap-3 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> Voir la démo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-black transition"
                  >
                    <FaGithub /> Code source
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
