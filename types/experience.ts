// 1. types/experience.ts
type Experience = {
  id: string;
  year: string;
  role: string;
  companyName: string;
  description: string;
}

type ExperienceItemProps = {
  experience: Experience;
}

export type {Experience, ExperienceItemProps};
