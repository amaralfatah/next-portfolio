// letters/page.tsx
import {letters} from '@/data/letters'
import NewsletterForm from "@/components/newsletter-form";
import {RowLink} from "@/components/link/row-link";

const NewsletterPage = () => {

  return (
    <div className="flex flex-col gap-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">
          Building businesses in public. Sharing my experiences.
        </h1>
        <p className="text-muted-foreground">
          I write about what I'm learning and curate valuable resources for entrepreneurs every Sunday
          morning.
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col gap-4">
          <NewsletterForm/>
        </div>
      </div>

      {/* Past Issues Section */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-foreground">Past issues</span>
        <div className="flex flex-col">
          {letters.map((item) => (
            <RowLink key={item.id} title={item.title} date={item.date} url={item.url}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
