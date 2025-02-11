import {FC} from 'react';
import type {ExperienceItemProps} from '@/types/experience';

const ExperienceItem: FC<ExperienceItemProps> = ({experience}) => {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      {/* Timeline Marker */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-primary"/>
        <div className="w-px flex-1 bg-border"/>
      </div>

      {/* Experience Details */}
      <div className="flex-1 pt-[-4px]">
        <span className="text-sm text-muted-foreground">
          {experience.year}
        </span>
        <h3 className="font-medium">
          {experience.role}
        </h3>
        <p className="text-sm text-muted-foreground">
          {experience.companyName}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
