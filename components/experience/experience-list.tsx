import {FC} from 'react';
import {experiences} from '@/data/experiences';
import ExperienceItem from './experience-item';

type ExperienceListProps = {
  limit?: number;
}

const ExperienceList: FC<ExperienceListProps> = ({limit}) => {
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;
  return (
    <div className="space-y-0">
      {displayedExperiences.map((item) => (
        <ExperienceItem
          key={item.id}
          experience={item}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
