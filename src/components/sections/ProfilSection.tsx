"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

interface Profil {
  profil: string;
}


export default function ProfilSection({ profil }: Profil) {
    return(
        <div> {profil} </div>
    )
}