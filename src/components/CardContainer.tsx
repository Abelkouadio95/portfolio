"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
  icon?:ReactNode
}

export default function CardContainer({ 
  children, 
  title, 
  className = "", 
  icon,
  delay = 0 
}: CardContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay 
      }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6 ${className}`}
    >
      {title && (
        <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-600 flex items-center gap-x-4">
          {icon && <span>{icon}</span>}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
} 