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
        <div className="flex items-center justify-between w-full">
          <div className=" pt-5 w-1/2 mr-15 relative h-[550px]">
            <Image src={image2} alt="Data IA" className="w-full h-full object-cover"></Image>
            <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-5 left-0 w-full h-[20px] bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-[20px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-white to-transparent"></div>
          </div>

          <div className=" pt-3 w-1/2 flex flex-col items-center self-center">
            <AnimatedText text={t('title')} className="text-5xl text-left">
            </AnimatedText>
            <AnimatedSection>
              <h2 className="text-xl font-bold mb-2">{t('subtitle')}</h2>
              <p className="text-base font-medium">{t('description')}</p>
              <p className="font-semibold text-red-500 mb-4 text-base">{t('goal')}</p>
            </AnimatedSection>
            
            <div className="flex items-center self-start mt-2 gap-5">
              <Link href={t('cvLink')} target={"_blank"} 
              className="flex items-center bg-black text-white p-2 px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-4 text-sm">
                <FaDownload/> {t('cv')}
              </Link>
              <a href="mailto:abelkouadio195@gmail.com" target={"_blank"} className="flex items-center bg-black text-white text-sm p-2 px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-4"><MdEmail/>{t('contact')} </a>
            </div>
          </div>  
        </div>
      </Layout>
    )
}
