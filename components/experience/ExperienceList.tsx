import {FC} from 'react';
import {experiences} from '@/data/experiences';
import ExperienceItem from "@/components/experience/ExperienceItem";

type ExperienceListProps = {
  limit?: number;
}

const ExperienceList: FC<ExperienceListProps> = ({limit}) => {
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;
  return (
    <div className="space-y-0">
      {displayedExperiences.map((item, index) => (
        <ExperienceItem
          key={item.id}
          experience={item}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
