export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Suggestio",
    description: "Autonomous coding agent using free LLM providers.",
    githubUrl: "https://github.com/glacode/suggestio",
    tags: ["AI", "Agent", "VSCode", "Extension", "TypeScript"],
    featured: true
  },
  {
    name: "Yamma",
    description: "Yamma is a modern Metamath proof assistant.",
    githubUrl: "https://github.com/glacode/yamma",
    tags: ["VSCode", "Extension", "TypeScript"],
    featured: true
  },
  {
    name: "MagiCommit",
    description: "An AI-powered Git commit message generator that understands your changes.",
    githubUrl: "https://github.com/glacode/magicommit",
    tags: ["AI", "Git", "Tooling", "VSCode", "Extension"],
    featured: true
  },
  {
    name: "VBSdb",
    description: "VBScript for Database: the classic asp software I developed and sold in 2001-2003.",
    githubUrl: "https://github.com/glacode/vbsdb",
    tags: ["VBScript", "Database", "Performance"],
    featured: true
  }
];
