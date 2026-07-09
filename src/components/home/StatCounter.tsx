'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const numericMatch = value.match(/^(\d+)(\+?)$/);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numericMatch || !isInView) return;
    motionValue.set(parseInt(numericMatch[1], 10));
  }, [isInView, motionValue, numericMatch]);

  useEffect(() => {
    if (!numericMatch) return;
    const suffix = numericMatch[2] ?? '';
    return spring.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, numericMatch]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {numericMatch ? (
        <p className="text-2xl md:text-3xl font-bold dark:text-white tracking-tight 
          bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          <span ref={displayRef}>0{numericMatch[2]}</span>
        </p>
      ) : (
        <p className="text-lg md:text-xl font-bold dark:text-white tracking-tight 
          bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          {value}
        </p>
      )}
      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide font-medium">
        {label}
      </p>
    </motion.div>
  );
}
