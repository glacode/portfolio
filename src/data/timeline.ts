export interface TimelineEvent {
  year: string;
  title: string;
  company?: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "1997 - Present",
    title: "ASST Mantova (Mantua General Hospital)",
    company: "IT Specialist and Software Developer",
    description: "Developed, maintained, and operated the hospital’s cost accounting system, personally managing the end-to-end analytical accounting workflow for mandatory regional reporting. Concepted and built the hospital's first-ever Data Warehouse and Management Control reporting system from scratch. Designed custom software solutions to meet internal institutional needs while providing technical support and troubleshooting to end-users."
  },
  {
    year: "1996 — 1997",
    title: "IT Specialist and Software Developer",
    company: "Amministrazione Provinciale di Mantova (Provincial Administration of Mantua)",
    description: "Mantained existing software and developed new software to meet internal needs."
  },
  {
    year: "1995 — 1996",
    company: "ASST Mantova (Mantua General Hospital)",
    title: "IT Specialist and Software Developer",
    description: "Developed software to meet internal needs. Managed the implementation of the first internet connection for the hospital network. Provided technical support and troubleshooting to end-users."
  },
  {
    year: "1988 - 1993",
    title: "Laurea in Scienze dell'Informazione",
    company: "University of Bologna",
    description: "Four-year Italian degree in Computer Science. Graduated with honors (110/110 cum laude)"
  },
  {
    year: "1983 - 1988",
    title: "Perito Informatico",
    company: "ITI Fermo Corni, Modena",
    description: "Five-years Technical High School Diploma in Computer Science. Final grade: 60/60"
  }
];
