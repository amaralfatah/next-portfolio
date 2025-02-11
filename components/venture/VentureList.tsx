import {FC} from "react";
import {ventures} from "@/data/ventures";
import {VentureLink} from "@/components/link/VentureLink";

type VentureListProps = {
  limit?: number;
}
const VentureList: FC<VentureListProps> = ({limit}) => {
  const displayedVentures = limit ? ventures.slice(0, limit) : ventures;
  return (
    <div className="flex flex-col">
      {displayedVentures.map((item) => (
        <VentureLink key={item.id} title={item.title} description={item.description} href={item.url}/>
      ))}
    </div>
  );
};

export default VentureList;
