const StackPage = () => {
  const stackItems = [
    {
      id: 'setup',
      title: 'Desk Setup',
      description: 'My main workspace.'
    },
    {
      id: 'development',
      title: 'Development Stack',
      description: 'All of the apps, tools, and services I use to build my projects.'
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">Stack</h1>
        <p className="text-foreground">Tools &amp; products I use daily.</p>
      </div>

      {/* Stack List */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {stackItems.map((item) => (
            <a
              key={item.id}
              href={`/stack/${item.id}`}
              className="flex py-6 gap-4 items-center no-underline hover:bg-accent transition-all duration-200 rounded-md hover:border-input hover:px-3 hover:-mx-3"
            >
              <div className="flex flex-col">
                <span className="text-foreground">{item.title}</span>
                <span className="font-regular text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackPage;
