'use client'
import Link from "next/link";
import React, { FC } from "react";
import Layout from "./layout";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


export const Footer: FC = ()=> {
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'fr';
    const t = useTranslations('footer');
    const tr = useTranslations('nav');

    return(
        <footer className="w-full border-t-1 border-solid border-black font-medium text-lg">
            <Layout>
                <div className="py-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
                    {/* Brand Section */}
                    <div className="text-center lg:text-left">
                        <p className="font-bold text-lg">KOUADIO ABEL BEKANTIE</p>
                        <span className="text-sm">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    </div>
                    
                    {/* Quick Links Section */}
                    <div className="text-center lg:text-left">
                        <p className="font-bold text-lg mb-2">{t('quickLinks')} </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:space-x-3 text-sm underline underline-offset-3">
                            <Link href={`/${locale}${'/'}`} className="hover:text-blue-500" >{tr('home')} </Link>
                            <Link href={`/${locale}${'/about'}`} className="hover:text-blue-500"> {tr('about')} </Link>
                            <Link href={`/${locale}${'/projects'}`} className="hover:text-blue-500">{tr('projects')} </Link>
                            <Link href={`/${locale}${'/certifications'}`} className="hover:text-blue-500"> Certifications</Link>
                        </div>
                    </div>
                    
                    {/* Contact Section */}
                    <div className="text-center lg:text-left">
                        <p className="font-bold text-lg mb-2">Contacts</p>
                        <div className="space-y-2">
                            <a href="mailto:abelkouadio195@gmail.com" target={"_blank"} className="flex items-center justify-center lg:justify-start hover:text-blue-500 gap-3 text-sm">
                                <MdEmail size={20} color="#1f2937" /> 
                                <span className="hidden sm:inline">abelkouadio195@gmail.com</span>
                                <span className="sm:hidden">Email</span>
                            </a>
                            <a href="https://wa.me/212694996559" target={"_blank"} className="text-base flex items-center justify-center lg:justify-start gap-3 hover:text-green-500">
                                <FaWhatsapp size={20} color="#25d366" /> 
                                <span className="hidden sm:inline">+212 6 94 99 65 59</span>
                                <span className="sm:hidden">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </footer>

    )
}