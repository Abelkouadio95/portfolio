'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaDatabase, FaCogs, FaChartLine } from 'react-icons/fa';
import AnimatedSection from '@/components/animation/animatedSection';

interface WorkStep {
  title: string;
  description: string;
}

interface WorkMethodProps {
  label: string;
  title: string;
  subtitle: string;
  steps: WorkStep[];
}

const stepIcons = [FaSearch, FaDatabase, FaCogs, FaChartLine];

export default function WorkMethod({ label, title, subtitle, steps }: WorkMethodProps) {
  return (
    <section className="w-full py-16 md:py-20 -mx-4 md:-mx-8 lg:-mx-30 px-4 md:px-8 lg:px-30 bg-slate-50 dark:bg-slate-900/50">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            {label}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = stepIcons[index] ?? FaSearch;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Icon className="text-base" />
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200 dark:bg-blue-800 z-10" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
