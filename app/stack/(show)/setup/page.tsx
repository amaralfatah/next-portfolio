import {ArrowLeft} from 'lucide-react';

const SetupPage = () => {
  const setupItems = {
    desk: [
      {
        title: 'IKEA Karlby',
        description: 'a sturdy countertop.',
        link: 'https://caccamise.link/karlby'
      },
      {
        title: 'Flexispot Standing Desk',
        description: "I've been using these legs for a few years now, no complaints.",
        link: 'https://caccamise.link/standing-desk'
      }
    ],
    audio: [
      {
        title: 'Audioengine HD3 Speakers',
        description: 'A great set of desktop speakers. The bass isn\'t great but they sound incredible for their size.',
        link: 'https://caccamise.link/hd3'
      }
    ],
    // Add other categories...
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Back Button */}
      <a
        href="/stack"
        className="flex items-center group gap-1 no-underline text-muted-foreground hover:text-foreground"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4"/>
        </span>
        Back
      </a>

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-input pb-8">
        <h1 className="text-4xl font-medium text-foreground">Desk Setup</h1>
        <span className="text-muted-foreground">My main workspace.</span>
        <span className="text-sm text-muted-foreground">
          Note: I may earn a commission from some links (thank you for supporting me).
        </span>
      </div>

      {/* Content */}
      <div className="container flex flex-col gap-6 py-4">
        {Object.entries(setupItems).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-medium text-foreground mb-4 capitalize">{category}</h3>
            {items.map((item, index) => (
              <p key={index}>
                <a
                  href={item.link}
                  className="text-primary hover:underline"
                >
                  {item.title}
                </a>
                {item.description && ` - ${item.description}`}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <form className="py-8">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-medium text-foreground">
            Have any suggestions? Let me know!
          </span>
          <textarea
            placeholder="You should try..."
            className="min-h-32 w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-ring hover:border-input"
            required
          />
          <button
            type="submit"
            disabled
            className="bg-primary text-primary-foreground opacity-50 cursor-not-allowed px-4 py-2 rounded-md md:h-12 md:w-24"
          >
            Submit
          </button>
        </div>
      </form>


    </div>
  );
};

export default SetupPage;
