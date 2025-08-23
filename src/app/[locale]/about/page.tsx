'use client';

import AnimatedSection from "@/components/animation/animatedSection";
import CardContainer from "@/components/layout/CardContainer";
import ExperienceSection from "@/components/aboutSections/ExperienceSection";
import SkillsSection from "@/components/aboutSections/SkillsSection";
import EducationSection from "@/components/aboutSections/EducationSection";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import pp from "../../../../public/images/profiles/pp.jpg";
import ProfilSection from "@/components/aboutSections/ProfilSection";
import { FaBriefcase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useTranslations } from 'next-intl';


export default function About() {
    const t = useTranslations('about');
    
    return(
        <>
            <main>
                <Layout>
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full pt-40 mb-16">
                            <div className="relative group">
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-yellow-400/40 via-purple-500/40 to-blue-500/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-400/30 dark:ring-purple-500/30 shadow-2xl shadow-purple-500/10">
                                    <Image 
                                    src={pp} 
                                    alt="Photo de profil" 
                                    fill
                                    className="object-cover object-bottom"
                                    />
                                </div>
                                <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-900"></span>
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-blue-600 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">KOUADIO ABEL BEKANTIE</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                    {t('status')}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                                        Data Science
                                    </span>
                                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                        IA/ML
                                    </span>
                                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                                        Full Stack
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Section Profil */}
                    <AnimatedSection>
                        <CardContainer 
                            title={t('profilname')}
                            className="mb-8"
                            delay={0.2}
                            icon = {<FaUser size={28} className="text-gray-700 " />}
                        >
                            <ProfilSection profil={t('profil')} />
                        </CardContainer>
                    </AnimatedSection>

                    {/* Section Expérience */}
                    <AnimatedSection>
                        <CardContainer 
                            title={t('exprof')} 
                            className="mb-8"
                            delay={0.2}
                            icon = {<FaBriefcase size={28} className="text-gray-700 " />}
                        >
                            <ExperienceSection experiences={t.raw('experienceData')} />
                        </CardContainer>
                    </AnimatedSection>

                    {/* Section Compétences */}
                    <AnimatedSection>
                        <CardContainer 
                            title={t("competence")}
                            className="mb-8"
                            delay={0.4}
                            icon={<FaCode size={28} className="text-gray-700" />}
                        >
                            <SkillsSection skills={t.raw('skillsData')} />
                        </CardContainer>
                    </AnimatedSection>

                    {/* Section Éducation */}
                    <AnimatedSection>
                        <CardContainer 
                            title={t('edu')}
                            className="mb-8"
                            delay={0.6}
                            icon={<FaGraduationCap size={28} className="text-gray-700" />}
                        >
                            <EducationSection education={t.raw('educationData')} />
                        </CardContainer>
                    </AnimatedSection>
                </Layout>
            </main>
        </>
    )
}