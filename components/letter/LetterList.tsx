import {FC} from "react";
import {letters} from "@/data/letters";
import {RowLink} from "@/components/link/row-link";

type LetterListProps = {
  limit?: number;
}
const LetterList: FC<LetterListProps> = ({limit}) => {
  const displayedLetter = limit ? letters.slice(0, limit) : letters;
  return (
    <div className="flex flex-col">
      {displayedLetter.map((item) => (
        <RowLink key={item.id} title={item.title} date={item.date} url={item.url}/>
      ))}
    </div>
  );
};

export default LetterList;
