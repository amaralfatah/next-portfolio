import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Calendar, ExternalLink, Github} from 'lucide-react';
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import {Portfolio} from "@/data/portfolios";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const PortfolioCard: FC<PortfolioCardProps> = ({portfolio}) => {
  return (
    <TooltipProvider>
      <Card
        className="group overflow-hidden border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative w-full pt-[56.25%] overflow-hidden bg-muted">
          <Image
            src={portfolio.image}
            alt={portfolio.name}
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-2">
              {portfolio.link && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-background/90 backdrop-blur-sm"
                    >
                      <Link
                        href={portfolio.link}
                        target="_blank"
                        aria-label={`View project: ${portfolio.name}`}
                      >
                        <ExternalLink className="h-4 w-4"/>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Project</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {portfolio.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-background/90 backdrop-blur-sm"
                    >
                      <Link
                        href={portfolio.github}
                        target="_blank"
                        aria-label={`View GitHub repository for ${portfolio.name}`}
                      >
                        <Github className="h-4 w-4"/>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="space-y-1 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold tracking-tight text-lg">
              {portfolio.name}
            </h3>
            <div className="flex items-center text-xs text-muted-foreground gap-1">
              <Calendar className="h-3 w-3"/>
              <span>{formatDate(portfolio.date)}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {portfolio.description}
          </p>
        </CardHeader>

        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {portfolio.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-secondary/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
};

export default PortfolioCard;
