import {FC} from 'react';
import {experiences} from '@/data/experiences';
import ExperienceItem from './experience-item';

const ExperienceList: FC = () => {
  return (
    <div className="space-y-0">
      {experiences.map((item) => (
        <ExperienceItem
          key={item.id}
          experience={item}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
