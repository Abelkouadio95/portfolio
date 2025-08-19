'use client'
import Link from "next/link";
import React, { FC } from "react";
import Layout from "./layout";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Footer: FC = ()=> {

    return(
        <footer className="w-full border-t-1 border-solid border-black font-medium text-lg">
            <Layout>
                <div className="py-8 flex items-center justify-between">
                    <div>
                        <p className="font-bold">KOUADIO ABEL BEKANTIE</p>
                        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Liens rapides</p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg">Contacts</p>
                        <Link href="abelkouadio195@gmail.com" target={"_blank"} className="flex items-center hover:text-blue-500 gap-3"><MdEmail size={25} color="#1f2937" /> abelkouadio195@gmail.com</Link>
                        <Link href="" className="flex items-center gap-3 hover:text-green-500">
                            <FaWhatsapp size={25} color="#25d366" /> +212 6 94 99 65 59
                        </Link>
                    </div>
                </div>
            </Layout>
        </footer>

    )
}