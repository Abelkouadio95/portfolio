import 'next-intl';

declare module 'next-intl' {
  interface Messages {
    home: {
      title: string;
      subtitle: string;
      description: string;
      goal: string;
    };
    nav: {
      home: string;
      about: string;
      projects: string;
      articles: string;
    };
    about: {
      exprof: string;
      profilname: string;
      competence: string;
      edu: string;
      profil: string;
      experienceData: Array<{
        title: string;
        company: string;
        location: string;
        period: string;
        description: string;
        details: string[];
        technologies: string[];
      }>;
      skillsData: Array<{
        name: string;
        level: string;
        category: string;
      }>;
      educationData: Array<{
        degree: string;
        institution: string;
        location: string;
        period: string;
        description: string;
        mention: string;
        relevantCourses: string[];
      }>;
    };
  }
}
