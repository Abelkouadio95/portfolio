"use client";

interface Profil {
  profil: string[];
}


export default function ProfilSection({ profil }: Profil) {
    return(
        <div>
            {profil.map((pr,i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300 mb-1">
                    {pr}
                </p>
                ))
            }
        </div>
    )
}