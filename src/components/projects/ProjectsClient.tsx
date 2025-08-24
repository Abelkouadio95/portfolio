"use client";
import { useState } from "react";
import AnimatedSection from "@/components/animation/animatedSection";
import CardContainer from "@/components/layout/CardContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import type { Project } from "@/types/portfolio";
import { FaFolderOpen } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ProjectsClient() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleVoirPlus = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const t = useTranslations('projects');
  const projectsData= t.raw('projectsData') as Project[];

  return (
    <div className="pt-24 md:pt-28">
      <AnimatedSection>
        <CardContainer
          title={t('projectsTitle')}
          icon={<FaFolderOpen size={28} className="text-gray-700" />}
          className="mb-8"
        >
          <p className="text-gray-700 dark:text-gray-300">
            {t('projectsContent')}
          </p>
        </CardContainer>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p) => (
            <ProjectCard key={p.id} project={p} onVoirPlus={handleVoirPlus} />
          ))}
        </div>
        <div className="mb-5"></div>
      </AnimatedSection>

      <ProjectModal project={selected} isOpen={open} onClose={handleClose} />
    </div>
  );
}
