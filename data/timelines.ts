export interface TimelineItem {
  id: string
  year: string
  title: string
  company: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    id: "1",
    year: "2024",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading frontend development for main product"
  },
  {
    id: "2",
    year: "2023",
    title: "Full Stack Developer",
    company: "Startup Inc",
    description: "Built and scaled core product features"
  }
]
