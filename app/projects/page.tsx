import PageHeader from "@/components/PageHeader";
import ProjectGrid from "@/components/project/project-grid";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-16">

      {/* Header */}
      <PageHeader
        title="Projects & Works"
        description="A collection of projects I've built focusing on mobile apps, web applications, and digital solutions that solve real-world problems."
      />

      {/* Project Grid */}
      <ProjectGrid/>
    </div>
  );
};

export default ProjectPage;
