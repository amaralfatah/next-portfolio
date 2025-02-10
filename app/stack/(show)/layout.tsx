"use client"

export default function DropsLayout({

                                      children,
                                    }: {
  children: React.ReactNode
}) {


  const relatedLinks = [
    {
      title: 'Development Stack',
      description: 'All of the apps, tools, and services I use to build my projects.',
      href: '/stack/development'
    },
    {
      title: 'VSCode/Cursor Setup',
      description: 'The extensions, theme, and settings I use.',
      href: '/stack/vscode'
    },
    {
      title: 'Raycast Setup',
      description: 'The extensions I use.',
      href: '/stack/raycast'
    }
  ];

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        {children}
      </div>

      {/* Related Links */}
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium text-foreground">You may also like</span>
        <div className="flex flex-col gap-4">
          {relatedLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-input hover:px-3 hover:-mx-3"
            >
              <div className="flex flex-col">
                <span className="text-foreground">{link.title}</span>
                <span className="font-regular text-muted-foreground">
                  {link.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
