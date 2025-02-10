import React from 'react';
import {ArrowLeft} from 'lucide-react';

const DevelopmentPage = () => {
  const categories = {
    Apps: [
      {
        name: 'Visual Studio Code',
        link: 'https://code.visualstudio.com/',
        description: 'Visual Studio Code is a powerful, lightweight code editor that is highly customizable with a vast array of extensions and features.'
      },
      {
        name: 'PHPStorm',
        link: 'https://www.jetbrains.com/phpstorm/',
        description: 'PHPStorm is a comprehensive IDE for PHP developers, offering advanced features like code analysis, debugging, and database tools.'
      },
      {
        name: 'WebStorm',
        link: 'https://www.jetbrains.com/webstorm/',
        description: 'WebStorm is an IDE designed specifically for JavaScript, offering support for frameworks like React, Angular, and Vue.js, along with powerful debugging and testing features.'
      },
      {
        name: 'Iterm',
        link: 'https://iterm2.com/',
        description: 'iTerm2 is a terminal replacement for macOS, offering features like split panes, hotkey windows, and instant search, perfect for power users.'
      },
      {
        name: 'Brave Browser',
        link: 'https://brave.com/',
        description: 'Brave is a privacy-focused browser that blocks ads and trackers by default, offering faster browsing and enhanced privacy.'
      }
    ],
    'Languages/Frameworks': [
      {
        name: 'Laravel',
        link: 'https://laravel.com/',
        description: 'Laravel is a PHP framework designed for developers who need an elegant, expressive, and simple syntax for building web applications.'
      },
      {
        name: 'Flutter',
        link: 'https://flutter.dev/',
        description: 'Flutter is an open-source UI software development kit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.'
      },
      {
        name: 'Next.js',
        link: 'https://nextjs.org/',
        description: 'Next.js is a React framework that enables server-side rendering, static site generation, and other powerful features like API routes and image optimization.'
      },
      {
        name: 'React',
        link: 'https://reactjs.org/',
        description: 'React is a JavaScript library for building user interfaces, allowing developers to create reusable components and manage the state of an application.'
      },
      {
        name: 'PHP',
        link: 'https://www.php.net/',
        description: 'PHP is a widely-used open-source scripting language primarily used for server-side web development, offering powerful features for building dynamic websites.'
      },
      {
        name: 'Javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        description: 'JavaScript is a programming language that enables dynamic behavior in web pages, allowing developers to create interactive elements and build full-stack web applications.'
      },
      {
        name: 'Bootstrap',
        link: 'https://getbootstrap.com/',
        description: 'Bootstrap is a front-end framework for developing responsive, mobile-first web projects, offering pre-built components and a grid system for quick layout design.'
      },
      {
        name: 'TailwindCSS',
        link: 'https://tailwindcss.com/',
        description: 'TailwindCSS is a utility-first CSS framework that makes it easy to build modern, responsive designs without having to leave your HTML.'
      },
      {
        name: 'shadcn/ui',
        link: 'https://ui.shadcn.dev/',
        description: 'Shadcn UI offers a collection of customizable UI components that can be easily integrated into your React applications.'
      }
    ],
    'Services': [
      {
        name: 'Vercel',
        link: 'https://vercel.com/',
        description: 'Vercel is a platform for frontend frameworks and static sites, offering seamless integration with Next.js, fast global CDN, and serverless functions.'
      },
      {
        name: 'Lemon Squeezy',
        link: 'https://lemonsqueezy.com/',
        description: 'Lemon Squeezy is a platform for selling digital products, providing an easy-to-use interface for handling payments, licenses, and global tax compliance.'
      }
    ],
    'Domains': [
      {
        name: 'Domainesia',
        link: 'https://www.domainesia.com/',
        description: 'Domainesia is a domain registration platform where you can buy, manage, and transfer domains, offering competitive prices and excellent customer support.'
      }
    ],
    'Resources': [
      {
        name: 'Dicoding',
        link: 'https://www.dicoding.com/',
        description: 'Dicoding is an Indonesian online learning platform that provides courses on software development, including certifications and hands-on projects.'
      },
      {
        name: 'Web Programming Unpas',
        link: 'https://www.youtube.com/@sandhikagalihWPU',
        description: 'Web Programming Unpas offers educational resources for web development and UI/UX design, including courses and materials for students and professionals.'
      },
      {
        name: 'Programmer Zaman Now',
        link: 'https://www.youtube.com/@ProgrammerZamanNow',
        description: 'Programmer Zaman Now is a YouTube channel that covers a wide range of technology stacks from beginner to advanced with a strong foundation in Java.'
      },
      {
        name: 'Code With Bahri',
        link: 'https://www.youtube.com/channel/UCF0wkT5XmWULbLXjVsOqzqg',
        description: 'Code With Bahri is a complete Laravel Flutter learning program that offers a monthly case study learning method.'
      }
    ]
  };


  return (
    <div className="flex flex-col gap-8">
      {/* Back Button */}
      <a href="/stack" className="flex items-center gap-1 text-muted-foreground hover:text-foreground group">
        <span className="group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4"/>
        </span>
        Back
      </a>

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <h1 className="text-4xl font-medium text-foreground">Development Stack</h1>
        <span className="text-muted-foreground">All of the apps, tools, and services I use to build my projects.</span>
        <span className="text-sm text-muted-foreground">Note: I may earn a commission from some links (thank you for supporting me).</span>
      </div>

      {/* Main Content */}
      <div className="container flex flex-col gap-6 py-4">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">{category}</h3>
            {items.map((item) => (
              <div key={item.name} className="space-y-2">
                <a
                  href={item.link}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {item.name}
                </a>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <form className="py-8">
        <div className="flex flex-col gap-4">
          <span className="text-lg font-medium text-foreground">What's your tech stack?</span>
          <textarea
            placeholder="Language, framework, etc."
            className="min-h-32 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            disabled
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevelopmentPage;
