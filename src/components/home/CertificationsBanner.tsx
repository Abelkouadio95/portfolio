'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaAward } from 'react-icons/fa';
import AnimatedSection from '@/components/animation/animatedSection';
import type { Certification } from '@/types/portfolioTypes';

interface CertificationsBannerProps {
  label: string;
  title: string;
  subtitle: string;
  count: string;
  viewAll: string;
  certificationsUrl: string;
  certifications: Certification[];
}

function HighlightCertCard({ cert, index }: { cert: Certification; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
    >
      <div className="relative h-28 md:h-32 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-4">
        {!imageError && cert.imageUrl ? (
          <div className="relative h-full w-full">
            <Image
              src={cert.imageUrl}
              alt={cert.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <FaAward className="text-2xl text-blue-500" />
            <span className="text-xs font-semibold">{cert.issuer}</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          {cert.issuer}
        </p>
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2 flex-1">
          {cert.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{cert.date}</p>
      </div>
    </motion.div>
  );
}

export default function CertificationsBanner({
  label,
  title,
  subtitle,
  count,
  viewAll,
  certificationsUrl,
  certifications,
}: CertificationsBannerProps) {
  return (
    <section className="w-full py-16 md:py-20">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            {label}
          </p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              {title}
            </h2>
            <span className="px-3 py-1 text-sm font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
              {count}
            </span>
          </div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
        {certifications.map((cert, index) => (
          <HighlightCertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href={certificationsUrl}
          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-2.5 rounded-lg font-semibold text-sm border border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all duration-200"
        >
          {viewAll}
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
