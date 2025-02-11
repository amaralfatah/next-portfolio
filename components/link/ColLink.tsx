import {BaseLink} from "@/components/link/BaseLink";

interface SimpleLinkProps {
  title: string;
  description: string;
  url: string;
}

export function ColLink({title, description, url}: SimpleLinkProps) {
  return (
    <BaseLink href={url}>
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </BaseLink>
  );
}
