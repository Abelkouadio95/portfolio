"use client";
import { Experience } from "@/types/portfolioTypes";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";


interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="space-y-10">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-l-4 border-blue-500 pl-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {exp.title}
            </h4>
            <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-0">
            {exp.company}
          </p>
          <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-2 flex items-center gap-x-2">
            <FaMapMarkerAlt  color="#ef4444" />
            {exp.location}
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-medium leading-relaxed">
            {exp.description}
          </p>
          <div className="pl-10 pt-4">
            {exp.details && (
            <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.details.map((det, detIndex) => (
                  <li key={detIndex} >
                    {det}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {exp.technologies && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
} 