import ProjectItem from "@/components/project/ProjectItem";
import {projects} from "@/data/projects";
import {FC} from "react";

type ProjectGridProps = {
  limit?: number;
}

const ProjectGrid: FC<ProjectGridProps> = ({limit}) => {

  const displayedProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit || projects.length);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {displayedProjects.map((item) => (
        <ProjectItem
          key={item.id}
          project={item}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
