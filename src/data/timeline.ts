export interface TimelineEvent {
  year: string;
  title: string;
  company?: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "2020 — Present",
    title: "Independent Software Engineer & Open Source Contributor",
    description: "Focusing on developer tools, AI integration, and high-performance data systems. Building projects like MagiCommit and VSBDB."
  },
  {
    year: "2010 — 2019",
    title: "Senior Software Architect",
    company: "Tech Systems Inc.",
    description: "Led the transition to cloud-native architectures. Designed and implemented core distributed systems used by millions of users."
  },
  {
    year: "2000 — 2009",
    title: "Systems Developer",
    company: "Global Solutions Ltd.",
    description: "Developed low-level system utilities and optimized database performance for large-scale enterprise applications."
  },
  {
    year: "1993",
    title: "Master's Degree in Computer Science",
    company: "University of Milan",
    description: "Graduated in 'Scienze dell'Informazione', focusing on theoretical computer science and system architecture."
  },
  {
    year: "1990 — 1992",
    title: "Software Developer",
    description: "Started professional career building desktop applications and early web prototypes using C++ and assembly."
  },
  {
    year: "1988",
    title: "Diploma in Computer Science",
    description: "Qualified as 'Perito Informatico', gaining foundational knowledge in algorithms, data structures, and low-level programming."
  }
];
