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
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start self-center text-center lg:text-left">
            <AnimatedText text={t('title')} className="text-3xl md:text-4xl lg:text-5xl">
            </AnimatedText>
            <AnimatedSection>
              <h2 className="text-lg md:text-xl font-bold mb-2">{t('subtitle')}</h2>
              <p className="text-sm md:text-base font-medium">{t('description')}</p>
              <p className="font-semibold text-red-500 mb-4 text-sm md:text-base">{t('goal')}</p>
            </AnimatedSection>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-5 mt-2 w-full">
              <Link href={t('cvLink')} target={"_blank"} 
              className="flex items-center bg-black text-white p-2 px-4 md:px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-2 md:gap-4 text-xs md:text-sm w-full sm:w-auto justify-center">
                <FaDownload/> {t('cv')}
              </Link>
              <a href="mailto:abelkouadio195@gmail.com" target={"_blank"} className="flex items-center bg-black text-white text-xs md:text-sm p-2 px-4 md:px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-2 md:gap-4 w-full sm:w-auto justify-center"><MdEmail/>{t('contact')} </a>
            </div>
          </div>  
        </div>
      </Layout>
    )
}
