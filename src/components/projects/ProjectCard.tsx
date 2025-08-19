"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onVoirPlus: (project: Project) => void;
}

export default function ProjectCard({ project, onVoirPlus }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
      transition={{ duration: 0.05, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-gray-100/50 dark:ring-gray-700/50 rounded-xl pointer-events-none"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 4).map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onVoirPlus(project)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            <FaInfoCircle /> Voir plus
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-black transition"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
