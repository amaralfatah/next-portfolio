import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Calendar, ExternalLink, Github} from 'lucide-react';
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import type {ProjectItemProps} from '@/types/project';

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const ProjectItem: FC<ProjectItemProps> = ({project}) => {
  return (
    <TooltipProvider>
      <Card
        className="group overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative w-full pt-[56.25%] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            sizes="100"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-2">
              {project.link && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-background/90 backdrop-blur-sm"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        aria-label={`View project: ${project.name}`}
                      >
                        <ExternalLink className="h-4 w-4"/>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Project</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-background/90 backdrop-blur-sm"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        aria-label={`View GitHub repository for ${project.name}`}
                      >
                        <Github className="h-4 w-4"/>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="space-y-1 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">
              {project.name}
            </h3>
            <div className="flex items-center text-xs text-muted-foreground gap-1">
              <Calendar className="h-3 w-3"/>
              <span className="truncate">{formatDate(project.date)}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </CardHeader>

        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
};

export default ProjectItem;
