import React from 'react';
import DropList from "@/components/drop/DropList";

const DropsPage = () => {

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">Drops</h1>
        <p className="text-foreground">Premium digital products I've created.</p>
      </div>

      {/* Products List */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-foreground">All drops</span>
        <DropList/>
      </div>

      {/* Affiliate Link */}
      <span className="text-sm text-muted-foreground">
          Have an audience who'd love my products?{' '}
        <a
          href="https://colecaccamise.lemonsqueezy.com/affiliates"
          className="text-primary hover:opacity-90"
        >
            Become an affiliate
          </a>
          .
        </span>
    </div>
  );
};

export default DropsPage;
