"use client";
import { motion } from "framer-motion";
import type { Skill } from "@/types/portfolioTypes";
import { useTranslations } from "next-intl";

interface SkillsSectionProps {
  skills: Skill[];
}

const getSkillColor = (level: Skill["level"]) => {
  switch (level) {
    case "intermédiaire":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "avancé":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "expert":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};

const getCategoryColor = (category: Skill["category"]) => {
  switch (category) {
    case "frontend":
      return "border-blue-500";
    case "backend":
      return "border-green-500";
    case "data":
      return "border-red-500";
    case "tools":
      return "border-orange-500";
    case "languages":
      return "border-pink-500";
    case "db":
      return "border-gray-500";
    case "ov":
      return "border-purple-500";
    default:
      return "border-gray-500";
  }
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const t = useTranslations('about');
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels = {
    data: t('data'),
    languages: t('languages'),
    frontend: t('frontend'),
    backend: t('backend'),
    tools: t('tools'),
    db: t('Db'),
    ov : t('Viz')
  };

  return (
    <div className="space-y-6">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`border-l-4 ${getCategoryColor(category as Skill["category"])} pl-4`}
        >
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h4>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${getSkillColor(skill.level)} border border-gray-200 dark:border-gray-600`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 