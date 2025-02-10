import {Card, CardContent} from "@/components/ui/card";

const VaultPage = () => {
  const tools = [
    {
      id: 'ghostty',
      title: 'Ghostty',
      description: 'A fast terminal emulator for macOS.',
      image: 'https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-trebez-app.png',
      url: 'https://ghostty.org/'
    },
    {
      id: 'zen-browser',
      title: 'Zen Browser',
      description: 'A sleak, firefox-based browser.',
      image: 'https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png',
      url: 'https://zen-browser.app/'
    },
    {
      id: 'yaak',
      title: 'Yaak',
      description: 'A local-first API client.',
      image: 'https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png',
      url: 'https://yaak.app/'
    },
    // Add other tools...
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">Vault</h1>
        <p className="text-foreground">
          Links to valuable tools and resources I've come across. More added all the time.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.id} className="hover:bg-accent/90 transition-colors">
            <CardContent>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 pt-6 "
              >
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="absolute inset-0 rounded-md object-cover"
                    width={800}
                    height={450}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </a>
            </CardContent>
          </Card>

        ))}
      </div>
    </div>
  );
};

export default VaultPage;
