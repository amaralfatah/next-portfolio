import {stacks} from '@/data/stacks';
import {ColLink} from "@/components/link/col-link";

const StackPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">Stack</h1>
        <p className="text-foreground">Tools &amp; products I use daily.</p>
      </div>

      {/* Stack List */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {stacks.map((item) => (
            <ColLink key={item.title} title={item.title} description={item.description} url={item.url}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackPage;
