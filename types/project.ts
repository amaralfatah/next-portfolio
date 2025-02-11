// types/project.ts
type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  date: string;
  link: string | null;
  website: string | null;
  github: string | null;
  stack: string[];
}

type ProjectItemProps = {
  project: Project;
}

// Ekspor keduanya untuk digunakan di file lain
export type {Project, ProjectItemProps};
