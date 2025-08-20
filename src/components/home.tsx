import Layout from "@/components/layout/layout";
import Image from "next/image";
import image2 from "../../public/images/profiles/image3.jpg"
import AnimatedText from "@/components/animation/animatedText";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AnimatedSection from "@/components/animation/animatedSection";

export default function HomePage() {
    return(
        <main className="'flex items-center text-dark w-full min-h-screen ">
      <Layout>
        <div className="flex items-center justify-between w-full pt-16 ">
          <div className=" pt-5 w-1/2 mr-15 relative h-[550px]">
            <Image src={image2} alt="Data IA" className="w-full h-full object-cover"></Image>
            <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-5 left-0 w-full h-[20px] bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-[20px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[20px] bg-gradient-to-l from-white to-transparent"></div>
          </div>

          <div className=" pt-3 w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Là où les chiffres racontent des histoires, je crée le futur." className="!text-5xl !text-left">
            </AnimatedText>
            <AnimatedSection>
              <p className="my-4 text-base font-medium">Passionné par la donnée, j’allie l’analyse descriptive d’un Data Analyst et la puissance prédictive d’un Data Scientist. J’explore, nettoie et interprète les données pour en extraire des insights, puis je conçois des modèles de machine learning capables de transformer ces informations en solutions concrès</p>
              <p className="font-semibold text-red-500 mb-4">Mon objectif : aider les entreprises à comprendre leur présent et anticiper leur futur.</p>
            </AnimatedSection>
            
            <div className="flex items-center self-start mt-2 gap-5">
              <Link href="/Cv/Cv_Data Scientist_Coface_AbelKouadio.pdf" target={"_blank"} 
              className="flex items-center bg-black text-white p-2 px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-4">
                <FaDownload/>Telecharger mon CV
              </Link>
              <Link href="abelkouadio195@gmail.com" target={"_blank"} className="flex items-center bg-black text-white p-2 px-5 rounded-lg font-semibold hover:bg-white border-2 hover:text-black gap-4"><MdEmail/> Contactez moi</Link>
            </div>
          </div>  

          
          
        </div>
      </Layout>
    </main>
    )
}