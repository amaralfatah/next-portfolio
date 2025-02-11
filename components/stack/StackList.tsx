import {stacks} from "@/data/stacks";
import {FC} from "react";
import {ColLink} from "@/components/link/ColLink";

type StackListProps = {
  limit?: number;
}

const StackList: FC<StackListProps> = ({limit}) => {
  const displayedDrops = limit ? stacks.slice(0, limit) : stacks;
  return (
    <div className="flex flex-col">
      {displayedDrops.map((item) => (
        <ColLink key={item.title} title={item.title} description={item.description} url={item.url}/>
      ))}
    </div>
  );
};

export default StackList;
