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
                <div className="py-7 flex items-center justify-between">
                    <div>
                        <p className="font-bold">KOUADIO ABEL BEKANTIE</p>
                        <span className="text-base">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    </div>
                    <div className="">
                        <p className="font-bold text-lg">{t('quickLinks')} </p>
                        <div className="space-x-3 text-base underline underline-offset-3">
                            <Link href={`/${locale}${'/'}`}>{tr('home')} </Link>
                            <Link href={`/${locale}${'/about'}`} > {tr('about')} </Link>
                            <Link href={`/${locale}${'/projects'}`}>{tr('projects')} </Link>
                        </div>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg">Contacts</p>
                        <a href="mailto:abelkouadio195@gmail.com" target={"_blank"} className="flex items-center hover:text-blue-500 gap-3 text-base"><MdEmail size={20} color="#1f2937" /> abelkouadio195@gmail.com</a>
                        <a href="https://wa.me/212694996559" target={"_blank"} className="text-base flex items-center gap-3 hover:text-green-500">
                            <FaWhatsapp size={20} color="#25d366" /> +212 6 94 99 65 59
                        </a>
                    </div>
                </div>
            </Layout>
        </footer>

    )
}