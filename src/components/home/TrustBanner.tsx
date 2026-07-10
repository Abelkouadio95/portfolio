'use client';

import Image from 'next/image';

interface TrustItem {
  name: string;
  imageUrl?: string;
}

interface TrustBannerProps {
  label: string;
  title: string;
  subtitle: string;
  items: TrustItem[];
}

function TrustLogo({ item }: { item: TrustItem }) {
  return (
    <div className="group flex-shrink-0 flex items-center justify-center min-w-[200px] md:min-w-[240px] h-20 md:h-24 px-6 bg-white rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
      {item.imageUrl ? (
        <div className="relative w-full h-16 md:h-20">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <span className="text-base md:text-lg font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-tight text-center leading-tight">
          {item.name}
        </span>
      )}
    </div>
  );
}

export default function TrustBanner({ label, title, subtitle, items }: TrustBannerProps) {
  const duplicated = [...items, ...items];

  return (
    <section className="w-full px-4 relative overflow-hidden items-center w-full pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-slate-900 " />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-slate-900 " />

        <div className="trust-marquee-scroll gap-6 md:gap-8">
          {duplicated.map((item, index) => (
            <TrustLogo key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
