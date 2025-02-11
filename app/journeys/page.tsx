import PageHeader from "@/components/PageHeader";
import ExperienceList from "@/components/experience/ExperienceList";

const JourneyPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <PageHeader title="My Journey"
                  description="Here&apos;s my journey as a developer, where I learned and grew with each step"/>

      {/* Experience List */}
      <div className="flex flex-col gap-4">
        <ExperienceList/>
      </div>
    </div>
  );
};

export default JourneyPage;
