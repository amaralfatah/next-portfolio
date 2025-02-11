import {BaseLink} from "@/components/link/BaseLink";

interface DateLinkProps {
  title: string;
  date: string;
  url: string;
}

export function RowLink({title, date, url}: DateLinkProps) {
  return (
    <BaseLink href={url}>
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span>{title}</span>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
    </BaseLink>
  );
}
