import { Certification } from "@/types/portfolioTypes";

export const certificationsData: Certification[] = [
  {
    id: 'ibm-python',
    title: 'Python 101 for Data Science',
    issuer: 'IBM (via Cognitive Class)',
    date: 'Août 2025',
    description: 'Le certificat Python 101 for Data Science de Cognitive Class/IBM initie à la programmation Python avec un focus sur la science des données. Il couvre la manipulation de données avec Pandas et NumPy, la programmation orientée objet, ainsi que la lecture/écriture de fichiers et l\'automatisation de tâches.',
    skills: ['Pandas', 'Numpy', 'Python', 'Data Science'],
    tools: ['Python', 'Jupyter Notebook', 'IBM Cloud'],
    imageUrl: '/images/certifications/python-ibm.jpg',
    credentialUrl: 'https://cognitiveclass.ai/courses/python-for-data-science',
    category: 'data-science'
  },
];
