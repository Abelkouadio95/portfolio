"use client";
import { Education } from "@/types/portfolioTypes";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "../animation/animatedSection";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  const t = useTranslations('about');
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <AnimatedSection>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-blue-100 dark:border-blue-900"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {edu.degree}
              </h4>
              <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-medium">
                {edu.period}
              </span>
            </div>
            <p className="text-blue-700 dark:text-blue-300 font-medium mb-2">
              {edu.institution}
            </p>
            <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-2 flex items-center gap-x-2">
              <FaMapMarkerAlt  color="#ef4444" />
              {edu.location}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
              {edu.description}
            </p>
            {edu.mention && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('mention')}: <span className="text-green-600 dark:text-green-400">{edu.mention}</span>
                </span>
              </div>
            )}
            {edu.relevantCourses && (
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('courses')}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );
} 