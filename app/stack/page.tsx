import StackList from "@/components/stack/StackList";
import PageHeader from "@/components/PageHeader";

const StackPage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <PageHeader title="Stack"
                  description="Tools &amp; products I use daily."/>

      {/* Stack List */}
      <div className="flex flex-col gap-4">
        <StackList/>
      </div>
    </div>
  );
};

export default StackPage;
