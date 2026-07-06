'use client';

import { FaBullseye, FaExclamationTriangle, FaLightbulb, FaChartBar } from 'react-icons/fa';
import type { CaseStudy } from '@/types/portfolioTypes';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  tags?: string[];
  labels: {
    context: string;
    problem: string;
    solution: string;
    stack: string;
    results: string;
  };
}

const sections = [
  { key: 'context' as const, icon: FaBullseye, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
  { key: 'problem' as const, icon: FaExclamationTriangle, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30' },
  { key: 'solution' as const, icon: FaLightbulb, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
];

export default function CaseStudyContent({ caseStudy, tags, labels }: CaseStudyContentProps) {
  return (
    <div className="space-y-5">
      {sections.map(({ key, icon: Icon, color }) => (
        <div key={key} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 md:p-5">
          <div className="flex items-center gap-2.5 mb-2">
            <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${color}`}>
              <Icon className="text-sm" />
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
              {labels[key]}
            </h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-[42px]">
            {caseStudy[key]}
          </p>
        </div>
      ))}

      {tags && tags.length > 0 && (
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 md:p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg text-violet-600 bg-violet-50 dark:bg-violet-900/30">
              <FaChartBar className="text-sm" />
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
              {labels.stack}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 pl-[42px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 p-4 md:p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg text-blue-600 bg-blue-100 dark:bg-blue-900/40">
            <FaChartBar className="text-sm" />
          </span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-700 dark:text-blue-400">
            {labels.results}
          </h3>
        </div>
        <ul className="space-y-2 pl-[42px]">
          {caseStudy.results.map((result) => (
            <li key={result} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
