import type { Project } from "@/types/portfolioTypes";

export const projects: Project[] = [
{
    id: "pfe",
    title: "Système intelligent de traitement et d’analyse de CV",
    shortDescription: "Matching profil/mission avec NLP et extraction d'informations.",
    longDescription:[
      "Objectif : concevoir une solution d’analyse automatique de CV en combinant la vision par ordinateur, le traitement du langage naturel (NLP) et une application backend avec Spring Boot.",
      "Système d'extraction d'informations à partir de CV (OCR + NLP) et matching intelligent entre profils et besoins clients. Tableau de bord avec KPIs RH et filtres avancés."
    ],
    imageSrc: "/images/projects/pfe.png",
    tags: ["NLP", "OCR", "Spring-boot", "Python", "MySQL","Docker", "Bootsrap", "javaScript", "Thymeleaf"],
    features: [
      "Collecte automatisée des CVs via upload ou intégration à une base existante",
      "Reconnaissance optique de caractères (OCR) pour convertir les CVs scannés en texte exploitable.",
      "Extraction intelligente d’informations (nom, email, compétences, expériences, formations) grâce au NLP (SpaCy).",
      "Anonymisation des données personnelles pour garantir la confidentialité des candidats.",
      "Matching pondéré multi-critères",
      "Moteur de recherche et de filtrage des CVs et candidats.",
      "Tableau de bord interactif affichant des KPIs clés",
    ],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/Abelkouadio95/Cv_analyzer_pfe_project"
  },

  {
    id: "ml-credit-scoring",
    title: "Credit Scoring ML",
    shortDescription: "Modèle de scoring crédit avec pipeline ML complet et déploiement FastAPI.",
    longDescription:[
      "Ce projet vise à construire un modèle d'apprentissage automatique capable de prédire si un demandeur de prêt est susceptible de rembourser son prêt ou pas . L'objectif est d'aider les institutions financières à prendre des décisions éclairées en matière d'octroi de crédit et à réduire le risque de prêts impayés.",
      "C'est un projet de data science couvrant le nettoyage l'EDA, la préparation des données, l'entraînement de modèles (régression logistique, arbres de décision, KNN) et l'évaluation.",
      "Déploiement d'une API de prédiction (FastAPI) avec interface web simplifiée."
    ],
    imageSrc: "/images/projects/loanApproval.jpg",
    tags: ["Python", "Scikit-learn", "FastAPI", "Bootstrap 5", "Pandas", "Numpy"],
    features: [
      "Interface utilisateur moderne avec Bootstrap 5",
      "Formulaire interactif pour saisir les informations du client",
      "Prédiction en temps réel avec niveau de confiance",
      "Design responsive adapté à tous les appareils"
    ],
    demoUrl: "https://example.com/demo-credit", 
    sourceUrl: "https://github.com/Abelkouadio95/Credit_Risk_Prediction_using_MachineLearning"
  },

  {
    id: "portfolio-next",
    title: "Ce Portfolio !",
    shortDescription: "Portfolio moderne avec animations Framer Motion et Tailwind CSS.",
    longDescription: [
      "Portfolio personnel moderne et responsive, conçu mobile-first pour offrir une expérience utilisateur fluide sur tous les supports. Le site intègre des sections animées et interactives, des cartes dynamiques et des composants réutilisables afin d’assurer modularité et cohérence visuelle",
      "Développé avec Next.js, Tailwind CSS et Framer Motion, il applique les meilleures pratiques d’accessibilité et de performance",
      "L’objectif est de mettre en valeur mes compétences en développement web et en data science, à travers une interface élégante et optimisée."
    ],
    imageSrc: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    features: [
      "Animations douces au scroll",
      "Composants UI modulaires",
      "Mode sombre/clair",
      "Sections animées",
      "Intégration d’icônes et graphiques pour illustrer compétences et projets (React Icons, Recharts)."
    ],
    demoUrl: "https://example.com/portfolio",
    sourceUrl: "https://github.com/Abelkouadio95/portfolio"
  },

  {
    id: "immobilier",
    title: "Data Science appliquée à l’immobilier",
    shortDescription: "Développement d’un modèle de Machine Learning capable de prédire le prix de maisons à partir de leurs caractéristiques (surface, localisation, nombre de pièces, etc.)",
    longDescription: [
      "Ce projet a consisté à concevoir et entraîner un modèle de Machine Learning pour l’estimation du prix des maisons",
      "L’approche repose sur l’analyse de données immobilières comprenant des caractéristiques clés telles que la surface, le nombre de pièces, la localisation géographique et d’autres variables influençant le marché",
      "Le travail a inclus la préparation et le nettoyage des données, l’exploration statistique, la sélection de variables pertinentes ainsi que la mise en place de modèles de régression (linéaire, arbres de décision, forêts aléatoires etc)",
      "Les performances ont été évaluées à l’aide de métriques adaptées (RMSE, MAE, R²). L’objectif est de fournir un outil d’aide à la décision permettant d’anticiper la valeur d’un bien immobilier et de mieux comprendre les facteurs qui influencent son prix."
    ],
    imageSrc: "/images/projects/houseprice.jpg",
    tags: ["Python", "Pandas", "Numpy", "Sk-learn","Machine learning"],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/Abelkouadio95/House_price_prediction"
  },
  {
    id: "AnalysisPython",
    title: "Projets d’analyse de données en Python",
    shortDescription: "Recueil de projets d’analyse de données réalisés avec Python et Pandas",
    longDescription: [
      "Ce projet regroupe plusieurs analyses de données menées avec Python, en utilisant principalement la librairie Pandas, ainsi que NumPy, Matplotlib et Seaborn selon les besoins",
      "Chaque étude illustre une problématique spécifique de data analysis : nettoyage et préparation des données, exploration statistique, visualisation graphique",
      "L’objectif est de mettre en pratique les outils fondamentaux de la data science tout en construisant un recueil d’exemples concrets et réutilisables, démontrant rigueur, curiosité et esprit analytique"
    ],
    imageSrc: "/images/projects/DataAnalysis.png",
    tags: ["Python", "Pandas", "Seaborn", "Numpy","Matplotlib", "Jupyter Notebook", "Google Colab"],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/Abelkouadio95/Collection-Python-Data-Analysis"
  },
  {
    id: "AnalysisPowerBi",
    title: "Dashboard Power Bi",
    shortDescription: "Recueil de dashboards interactifs réalisés avec Power BI",
    longDescription: [
      "Ce projet compile plusieurs dashboards développés avec Power BI, mettant en avant des analyses visuelles et interactives de données variées.",
      "Chaque dashboard permet d’explorer les KPIs clés, de filtrer et segmenter l’information, et de présenter les insights de manière claire et intuitive.",
      "L’objectif est de démontrer la capacité à transformer des données brutes en visualisations décisionnelles, en appliquant les bonnes pratiques de design et d’interactivité propres aux outils de business intelligence."
    ],
    imageSrc: "/images/projects/powerbi.webp",
    tags: ["Power Bi", "Power Querry", "Excel"],
    demoUrl: "https://example.com/demo-ats",
    sourceUrl: "https://github.com/Abelkouadio95/Data-Analysis-using-PowerBi"
  }
]
