import {FC} from 'react';
import {Badge} from '@/components/ui/badge';
import {Building2, CalendarDays, MapPin} from 'lucide-react';
import {Experience} from '@/types/experience';

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

const ExperienceItem: FC<ExperienceItemProps> = ({experience, isLast = false}) => (
  <div className="relative pb-10 last:pb-0">
    {/* Timeline continuous line */}
    {!isLast && (
      <div
        className="absolute left-[0.5rem] top-0 h-full w-px bg-border/50"
        style={{height: 'calc(100% + 1rem)'}}
      />
    )}

    <div className="relative group">
      <div
        className=" rounded-lg border border-transparent transition-all duration-300"
      >
        <div className="flex gap-4">
          <div className="relative">
            <div
              className="w-4 h-4 rounded-full bg-primary ring-4 ring-background
              group-hover:scale-110 group-hover:ring-accent
              transition-all duration-300 relative z-20"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
              <div className="space-y-1">
                <h3 className="font-medium">
                  {experience.role}
                </h3>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground"/>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {experience.company}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground gap-1">
                <CalendarDays className="w-3 h-3"/>
                <time className="text-xs whitespace-nowrap">{experience.duration}</time>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground"/>
              <span className="text-sm text-muted-foreground">{experience.location}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {experience.description}
            </p>

            <div
              className="flex flex-wrap gap-2 pt-2"
              role="list"
              aria-label="Technologies used"
            >
              {experience.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceItem;
