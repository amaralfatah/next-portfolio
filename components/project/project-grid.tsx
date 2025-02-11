import ProjectItem from "@/components/project/project-item";
import {projects} from "@/data/projects";
import {FC} from "react";

type ProjectGridProps = {
  limit?: number;
}

const ProjectGrid: FC<ProjectGridProps> = ({limit}) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

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
