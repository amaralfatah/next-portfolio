// letters/page.tsx
import {articles} from '@/data/articles'
import NewsletterForm from "@/components/newsletter-form";

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
          {articles.map((issue, index) => (
            <a
              key={index}
              className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-border hover:px-3 hover:-mx-3"
              href={`/letters/${issue.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div
                className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                <span className="text-foreground">{issue.title}</span>
                <span className="font-regular text-sm text-muted-foreground">
                  {issue.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
