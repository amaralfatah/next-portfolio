import React from 'react';
import DropList from "@/components/drop/DropList";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const DropsPage = () => {

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <PageHeader title="Drops"
                  description="Premium digital products I&apos;ve created."/>

      {/* Products List */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-foreground">All drops</span>
        <DropList/>
      </div>

      {/* Affiliate Link */}
      <span className="text-sm text-muted-foreground">
          Have an audience who&apos;d love my products?{' '}
        <Link
          href="https://colecaccamise.lemonsqueezy.com/affiliates"
          className="text-primary hover:opacity-90"
        >
            Become an affiliate
          </Link>
          .
        </span>
    </div>
  );
};

export default DropsPage;
