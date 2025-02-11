import {drops} from "@/data/drops";
import {ImageLink} from "@/components/link/image-link";
import {FC} from "react";

type DropListProps = {
  limit?: number;
}
const DropList: FC<DropListProps> = ({limit}) => {
  const displayedDrops = limit ? drops.slice(0, limit) : drops;
  return (
    <div className="flex flex-col">
      {displayedDrops.map((item) => (
        <ImageLink key={item.id} title={item.title} type={item.type} price={item.price} image={item.image}
                   url={item.url}/>
      ))}
    </div>
  );
};

export default DropList;
