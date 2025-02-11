import {BaseLink} from "@/components/link/BaseLink";
import {ExternalLink} from "lucide-react";

interface ExternalLinkProps {
  title: string;
  description: string;
  href: string;
}

export function VentureLink({title, description, href}: ExternalLinkProps) {
  return (
    <BaseLink href={href} target="_blank">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1">
          {title}
          <ExternalLink className="h-4 w-4"/>
        </span>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </BaseLink>
  );
}
