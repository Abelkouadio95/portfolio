"use client";
import { useState, useMemo } from "react";
import AnimatedSection from "@/components/animation/animatedSection";
import CardContainer from "@/components/layout/CardContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import type { Project } from "@/types/portfolioTypes";
import { FaFolderOpen } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ProjectsClient() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleVoirPlus = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const t = useTranslations('projects');
  const projectsData = t.raw('projectsData') as Project[];

  const categories = useMemo(() => [
    { key: 'all', label: t('filterAll') },
    { key: 'dataEngineering', label: t('filterDataEngineering') },
    { key: 'machineLearning', label: t('filterMachineLearning') },
    { key: 'aiFullStack', label: t('filterAiFullStack') },
    { key: 'businessIntelligence', label: t('filterBusinessIntelligence') },
    { key: 'dataAnalysis', label: t('filterDataAnalysis') },
    { key: 'fullStack', label: t('filterFullStack') },
  ], [t]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [projectsData, activeFilter]);

  return (
    <div className="pt-16 md:pt-24 lg:pt-28">
      <AnimatedSection>
        <CardContainer
          title={t('projectsTitle')}
          icon={<FaFolderOpen size={24} className="text-gray-700 md:w-7 md:h-7" />}
          className="mb-8"
        >
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
            {t('projectsContent')}
          </p>
        </CardContainer>
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsFilter
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        {filteredProjects.length > 0 ? (
          <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} onVoirPlus={handleVoirPlus} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">{t('noResults')}</p>
        )}
        <div className="mb-5" />
      </AnimatedSection>

      <ProjectModal project={selected} isOpen={open} onClose={handleClose} />
    </div>
  );
}
