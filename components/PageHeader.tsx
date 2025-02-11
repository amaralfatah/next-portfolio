import {FC} from "react";

type PageHeaderProps = {
  title: string;
  description: string;
}

const PageHeader: FC<PageHeaderProps> = ({title, description}) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-medium text-foreground">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default PageHeader;
