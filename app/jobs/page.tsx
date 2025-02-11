import {jobs} from '@/data/jobs'
import {RowLink} from "@/components/link/RowLink";
import PageHeader from "@/components/PageHeader";
import React from "react";

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <PageHeader title="Join our team"
                  description="Join us in building the future of technology. We're always looking for talented individuals who are passionate
          about msaking a difference."/>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Open positions</span>
        </div>

        <div className="flex flex-col divide-y divide-border/30">
          {jobs.map((item) => (
            <RowLink key={item.id} title={item.title} date={item.location} url={item.url}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobsPage;
