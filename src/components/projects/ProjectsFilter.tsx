'use client';

interface ProjectsFilterProps {
  categories: { key: string; label: string }[];
  active: string;
  onChange: (key: string) => void;
}

export default function ProjectsFilter({ categories, active, onChange }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === key
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
