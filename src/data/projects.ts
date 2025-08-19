import type { Project } from "@/types/portfolio";
import lA from "../../public/images/projects/loanApproval.jpg"

export const projects: Project[] = [
{
    id: "pfe",
    title: "Système intelligent de traitement et d’analyse de CV",
    shortDescription: "Matching profil/mission avec NLP et extraction d'informations.",
    longDescription:
      "Système d'extraction d'informations à partir de CV (OCR + NLP) et matching intelligent entre profils et besoins clients. Tableau de bord avec KPIs RH et filtres avancés. Objectif : concevoir une solution d’analyse automatique de CV en combinant la vision par ordinateur, le traitement du langage naturel (NLP) et une application backend avec Spring Boot.",
    imageSrc: "/images/projects/pfe.png",
    tags: ["NLP", "OCR", "Spring-boot", "Python", "Dashboard"],
    features: [
      "Extraction d'entités clés (SpaCy)",
      "Matching pondéré multi-critères",
      "Dashboard interactif (KPIs)",
      "Gestion des versions de modèles"
    ],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/Abelkouadio95/Cv_analyzer_pfe_project.git"
  },

  {
    id: "ml-credit-scoring",
    title: "Credit Scoring ML",
    shortDescription: "Modèle de scoring crédit avec pipeline ML complet et déploiement FastAPI.",
    longDescription:
      "Projet de data science couvrant l'EDA, la préparation des données, l'entraînement de modèles (régression logistique, arbres de décision, KNN) et l'évaluation. Déploiement d'une API de prédiction (FastAPI) avec interface web simplifiée.",
    imageSrc: "/images/projects/loanApproval.jpg",
    tags: ["Python", "Scikit-learn", "FastAPI", "EDA"],
    features: [
      "Pipeline de preprocessing reproductible",
      "Suivi des métriques et validation croisée",
      "API REST avec documentation OpenAPI",
      "UI de prédiction simple"
    ],
    demoUrl: "https://example.com/demo-credit",
    sourceUrl: "https://github.com/username/credit-scoring"
  },

  {
    id: "portfolio-next",
    title: "Ce Portfolio !",
    shortDescription: "Portfolio moderne avec animations Framer Motion et Tailwind CSS.",
    longDescription:
      "Site personnel designé mobile-first, incluant sections animées, cartes, et composants réutilisables. Intégration de Next.js, Tailwind et Framer Motion avec bonnes pratiques d'accessibilité.",
    imageSrc: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    features: [
      "Animations douces au scroll",
      "Composants UI modulaires",
      "Mode sombre/clair"
    ],
    demoUrl: "https://example.com/portfolio",
    sourceUrl: "https://github.com/username/portfolio"
  },

  {
    id: "ats-matching",
    title: "ATS Matching IA",
    shortDescription: "Matching profil/mission avec NLP et extraction d'informations.",
    longDescription:
      "Système d'extraction d'informations à partir de CV (OCR + NLP) et matching intelligent entre profils et besoins clients. Tableau de bord avec KPIs RH et filtres avancés.",
    imageSrc: "/images/projects/houseprice.jpg",
    tags: ["NLP", "OCR", "Dashboard", "Python"],
    features: [
      "Extraction d'entités clés (SpaCy)",
      "Matching pondéré multi-critères",
      "Dashboard interactif (KPIs)",
      "Gestion des versions de modèles"
    ],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/username/ats-matching"
  }
]
