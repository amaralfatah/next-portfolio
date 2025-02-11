// letters/page.tsx
import NewsletterForm from "@/components/newsletter-form";
import LetterList from "@/components/letter/LetterList";
import PageHeader from "@/components/PageHeader";
import React from "react";

const LetterPage = () => {

  return (
    <div className="flex flex-col gap-16">

      {/* Header */}
      <PageHeader title="Building businesses in public. Sharing my experiences."
                  description="I write about what I'm learning and curate valuable resources for entrepreneurs every Sunday
          morning."/>

      {/* Subscription Form */}
      <NewsletterForm/>

      {/* Past Issues Section */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-foreground">Past issues</span>
        <LetterList/>
      </div>
    </div>
  );
};

export default LetterPage;
