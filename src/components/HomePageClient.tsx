'use client';

import Image from "next/image";
import image2 from "../../public/images/profiles/image3.jpg"
import AnimatedText from "@/components/animation/animatedText";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AnimatedSection from "@/components/animation/animatedSection";
import Layout from "./layout/layout";
import { useTranslations } from "next-intl";

export default function HomePageClient() {
  const t = useTranslations('home');
    return(
      <Layout>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full md:pt-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:mr-15 relative h-[300px] md:h-[500px] lg:h-[550px] mb-8 lg:mb-0">
            <Image src={image2} alt="Data IA" className="w-full h-full object-cover"></Image>
            <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[20px] bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-[20px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {/* Text Section */}
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start self-center text-center lg:text-left">
            <AnimatedText
              text={t('title')}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight 
                        bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 
                        bg-clip-text text-transparent mb-4"
            />
            <AnimatedSection>
              <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {t('subtitle')}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {t('description')}
              </p>
              <p className="font-semibold text-violet-500 dark:text-violet-400 mb-5 text-sm md:text-base lg:text-lg">
                {t('goal')}
              </p>
            </AnimatedSection>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-5 mt-4 w-full">
              <Link
                href={t('cvLink')}
                target="_blank"
                className="flex items-center justify-center gap-2 md:gap-3 
                          bg-gradient-to-r from-blue-600 to-violet-600 text-white 
                          p-2 px-4 md:px-6 rounded-lg font-semibold text-xs md:text-sm 
                          shadow-md hover:shadow-xl hover:from-blue-500 hover:to-violet-500 
                          transition-all duration-200 w-full sm:w-auto"
              >
                <FaDownload /> {t('cv')}
              </Link>

              <a
                href="mailto:abelkouadio195@gmail.com"
                target="_blank"
                className="flex items-center justify-center gap-2 md:gap-3 
                          bg-black text-white text-xs md:text-sm 
                          p-2 px-4 md:px-6 rounded-lg font-semibold border border-violet-500 
                          hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] 
                          transition-all duration-200 w-full sm:w-auto"
              >
                <MdEmail /> {t('contact')}
              </a>
            </div>
          </div>  
        </div>
      </Layout>
    )
}
