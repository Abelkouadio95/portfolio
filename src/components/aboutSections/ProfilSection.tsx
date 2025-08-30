"use client";

interface Profil {
  profil: string;
}


export default function ProfilSection({ profil }: Profil) {
    return(
        <div> {profil} </div>
    )
}