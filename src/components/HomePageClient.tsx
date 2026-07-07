'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/animation/animatedSection';
import StatCounter from '@/components/home/StatCounter';
import FeaturedProjectCard from '@/components/home/FeaturedProjectCard';
import TrustBanner from '@/components/home/TrustBanner';
import CareerTimeline from '@/components/home/CareerTimeline';
import CertificationsBanner from '@/components/home/CertificationsBanner';
import WorkMethod from '@/components/home/WorkMethod';
import FinalCta from '@/components/home/FinalCta';
import Layout from './layout/layout';
import { LinkedInIcon, LinkArrow } from './icons';
import { useTranslations } from 'next-intl';
import type { Project, Experience, Certification } from '@/types/portfolioTypes';
import me from '../../public/images/profiles/Me.png';

export default function HomePageClient() {
  const t = useTranslations('home');
  const tProjects = useTranslations('projects');
  const tAbout = useTranslations('about');
  const tCerts = useTranslations('certifications');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] === 'en' ? 'en' : 'fr';

  const stats = t.raw('stats') as { value: string; label: string }[];
  const technologies = t.raw('technologies') as string[];
  const certifications = t.raw('badge.certifications') as string[];
  const challenges = t.raw('challenges.items') as string[];
  const featuredItems = t.raw('featuredProjects.items') as { id: string; category: string; impact: string }[];
  const trustItems = t.raw('trust.items') as { name: string; imageUrl?: string }[];
  const allProjects = tProjects.raw('projectsData') as Project[];
  const experiences = tAbout.raw('experienceData') as Experience[];
  const certifData = tCerts.raw('certifData') as Certification[];
  const highlightIds = t.raw('certificationsHighlight.ids') as string[];
  const highlightedCerts = highlightIds
    .map((id) => certifData.find((c) => c.id === id))
    .filter((c): c is Certification => c !== undefined);
  const workSteps = t.raw('workMethod.steps') as { title: string; description: string }[];
  const projectsUrl = `/${locale}/projects`;
  const aboutUrl = `/${locale}/about`;
  const certificationsUrl = `/${locale}/certifications`;

  return (
    <Layout>
      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16 pt-8 md:pt-12 pb-16 md:pb-24">
        {/* Text */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-2">
              {t('greeting')}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
              <span className="relative inline-block">
                {t('name')}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900/40 -z-10 rounded-sm" />
              </span>
            </h1>
            <p className="text-base md:text-lg font-semibold text-blue-700 dark:text-blue-400 mb-5">
              {t('role')}
            </p>
          </motion.div>

          <AnimatedSection>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 max-w-xl">
              {t('hook')}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8 max-w-xl">
              {t('intervention')}
            </p>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-xl mb-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          {/* Tech stack */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 max-w-xl">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className="px-3 py-1 text-xs md:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-xl">
            <Link
              href={`/${locale}/projects`}
              className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-slate-800 dark:hover:bg-blue-500 hover:shadow-md transition-all duration-200 w-full sm:w-auto"
            >
              {t('projectsCta')}
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href={t('cvLink')}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-5 py-2.5 rounded-lg font-semibold text-sm border border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 w-full sm:w-auto"
            >
              <FaDownload className="text-xs" />
              {t('cv')}
            </Link>

            <a
              href={t('linkedinUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#004182] transition-all duration-200 w-full sm:w-auto"
            >
              {t('linkedin')}
            </a>
          </div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[45%] relative order-1 lg:order-2"
        >
          <div className="relative group mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-100/50 via-slate-100/30 to-slate-200/50 dark:from-blue-900/15 dark:via-slate-800/15 dark:to-slate-700/15 opacity-80 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-300/40 dark:shadow-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-700 aspect-[4/5] max-h-[480px] lg:max-h-[520px]">
              <Image
                src={me}
                alt={t('name')}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={95}
                className="object-cover object-[center_25%] group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            {/* Certification badge */}
            <div className="absolute -bottom-4 left-80 md:bottom-4 md:right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 px-4 py-3 max-w-[220px]">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-1.5">
                {t('badge.title')}
              </p>
              <ul className="space-y-0.5">
                {certifications.map((cert) => (
                  <li key={cert} className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenges section */}
      <section className="w-full py-16 md:py-20 -mx-4 md:-mx-8 lg:-mx-30 px-4 md:px-8 lg:px-30 bg-slate-50 dark:bg-slate-900/50 rounded-none">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              {t('challenges.label')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {t('challenges.title')}
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              {t('challenges.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group"
            >
              <span className="mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300" />
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
              {t('challenges.punchline')}
            </p>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              {t('challenges.cta')}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured projects */}
      <section className="w-full py-16 md:py-20">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              {t('featuredProjects.label')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {t('featuredProjects.title')}
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              {t('featuredProjects.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featuredItems.map((item, index) => {
            const project = allProjects.find((p) => p.id === item.id);
            if (!project) return null;
            return (
              <FeaturedProjectCard
                key={item.id}
                project={project}
                category={item.category}
                impact={item.impact}
                viewProjectLabel={t('featuredProjects.viewProject')}
                projectsUrl={projectsUrl}
                index={index}
              />
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href={projectsUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t('featuredProjects.viewAll')}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

      <CareerTimeline
        label={t('timeline.label')}
        title={t('timeline.title')}
        subtitle={t('timeline.subtitle')}
        viewAll={t('timeline.viewAll')}
        aboutUrl={aboutUrl}
        experiences={experiences}
      />
      <TrustBanner
        label={t('trust.label')}
        title={t('trust.title')}
        subtitle={t('trust.subtitle')}
        items={trustItems}
      />

      <CertificationsBanner
        label={t('certificationsHighlight.label')}
        title={t('certificationsHighlight.title')}
        subtitle={t('certificationsHighlight.subtitle')}
        count={t('certificationsHighlight.count')}
        viewAll={t('certificationsHighlight.viewAll')}
        certificationsUrl={certificationsUrl}
        certifications={highlightedCerts}
      />

      <WorkMethod
        label={t('workMethod.label')}
        title={t('workMethod.title')}
        subtitle={t('workMethod.subtitle')}
        steps={workSteps}
      />

      <FinalCta
        title={t('finalCta.title')}
        subtitle={t('finalCta.subtitle')}
        projectsCta={t('finalCta.projectsCta')}
        cv={t('finalCta.cv')}
        cvLink={t('cvLink')}
        linkedin={t('finalCta.linkedin')}
        linkedinUrl={t('linkedinUrl')}
        projectsUrl={projectsUrl}
      />
    </Layout>
  );
}
