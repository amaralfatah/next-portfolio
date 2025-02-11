import {TimelineItem} from "@/data/timelines";


export default function TimelineJourney({item}: { item: TimelineItem }) {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-primary"/>
        <div className="w-px flex-1 bg-border"/>
      </div>
      <div className="flex-1 pt-[-4px]">
        <span className="text-sm text-muted-foreground">{item.year}</span>
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.company}</p>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </div>
    </div>
  )
}
