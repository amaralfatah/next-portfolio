import React from 'react';
import {ArrowLeft} from 'lucide-react';

const DevStack = () => {
  const categories = {
    Apps: [
      {
        name: 'Cursor',
        link: 'https://caccamise.link/cursor',
        description: 'Cursor is a fork of VSCode with Claude built-in. I find the AI is a lot better than GitHub Copilot. They keep it up to date with the latest versions of VSCode so any extension should work perfectly.'
      },
      {
        name: 'Warp',
        link: 'https://caccamise.link/warp',
        description: 'My main terminal app. I switched from iTerm2 and like it a lot better. It has AI built-in which is great in case I forget a command. The autocompletion is also really good.'
      },
      {
        name: 'Arc',
        link: 'https://caccamise.link/arc',
        description: 'My browser of choice. I love the sidebar design and having different spaces. It\'s built on top of Chromium so any Chrome extension is compatible.'
      },
      {
        name: 'Raycast',
        link: 'https://raycast.com/?via=cole',
        description: 'So much more than a spotlight replacement. Raycast integrates with a ton of tools and lets you take control of your entire mac from your keyboard. Things like changing output devices and clipboard history are super convenient.'
      },
      {
        name: 'Linear',
        link: 'https://linear.app',
        description: 'Primarily a team-based project management tool but it\'s still great for personal projects.'
      }
    ],
    'Languages/Frameworks': [
      {
        name: 'Next.js',
        link: 'https://nextjs.org',
        description: 'I use Next as the frontend for all of my projects. Its server-side capabilites make it great for SEO and with small apps a separate backend may not be necessary.'
      },
      {
        name: 'Go/Golang',
        link: 'https://go.dev/',
        description: 'Go is a clean and performant programming language I use for writing backend APIs. The standard library gives you a lot of the functionality you\'ll need.'
      },
      {
        name: 'Chi',
        link: 'https://go-chi.io/',
        description: 'A lightweight router for building Go HTTP services. It\'s built on the standard library and makes writing APIs a little simpler.'
      },
      {
        name: 'TailwindCSS',
        link: 'https://tailwindcss.com',
        description: 'A utility-first CSS framework. It\'s easy to pick up and makes building UIs super fast.'
      },
      {
        name: 'HeadlessUI',
        link: 'https://headlessui.com',
        description: 'UI Components built with Tailwind. Really useful for dropdown menus.'
      },
      {
        name: 'shadcn/ui',
        link: 'https://ui.shadcn.com',
        description: 'When I need a UI component I don\'t want to build myself I go here first. Lots of great ones that are easy to integrate with.'
      }
    ],
    'Services': [
      {
        name: 'Vercel',
        link: 'https://vercel.com',
        description: 'Where I host all of my frontend projects. By far the easiest way to host Next.js and take advantage of Vercel\'s features (like edge functions and storage).'
      },
      {
        name: 'Railway',
        link: 'https://caccamise.link/railway',
        description: 'Where I host my backend services.'
      },
      {
        name: 'Supabase',
        link: 'https://supabase.com',
        description: 'The PostgreSQL database I use for all of my projects. It\'s easy to build with and they handle auth with minimal setup.'
      },
      {
        name: 'Amazon S3',
        link: 'https://aws.amazon.com/s3',
        description: 'Where I store all media files very cheaply.'
      },
      {
        name: 'Amazon CloudFront',
        link: 'https://aws.amazon.com/cloudfront/',
        description: 'The CDN I put in front of my S3 buckets to speed up delivery.'
      },
      {
        name: 'Resend',
        link: 'https://resend.com',
        description: 'How I send emails within my apps. Setting it up takes minutes and their Next.js & Golang SDKs are great to work with.'
      },
      {
        name: 'React Email',
        link: 'https://react.email',
        description: 'A collection of React components to design emails. It\'s maintained by Resend so it integrates nicely.'
      },
      {
        name: 'Kit',
        link: 'https://kit.com',
        description: 'The platform I use to send my weekly newsletter. I\'m using their API to have custom signup forms on my website.'
      },
      {
        name: 'Dub.co',
        link: 'https://caccamise.link/dub',
        description: 'What I use to create shorten and track my links (caccamise.link). They also have a powerful API/SDK that is great if you need to implement link sharing in your app.'
      },
      {
        name: 'Plausible',
        link: 'https://plausible.io',
        description: 'Privacy-focused analytics that are super powerful.'
      },
      {
        name: 'Cloudflare',
        link: 'https://cloudflare.com',
        description: 'I use their free plan to protect against DDoS attacks and manage my DNS settings.'
      },
      {
        name: 'Lemon Squeezy',
        link: 'https://lemonsqueezy.com',
        description: 'Where I currently sell my digital products. They handle global tax compliance which saves me a lot of headaches.'
      }
    ],
    'Domains': [
      {
        name: 'Porkbun',
        link: 'https://porkbun.com',
        description: 'Where I buy almost all of my domains.'
      },
      {
        name: 'Namecheap',
        link: 'https://namecheap.com',
        description: 'Any TLDs that aren\'t available on Porkbun (like .so) I usually look here.'
      },
      {
        name: 'One Word Domains',
        link: 'https://caccamise.link/domains',
        description: 'A database of available short domains under lots of TLDs.'
      }
    ],
    'Resources': [
      {
        name: 'Refactoring UI',
        link: 'https://www.refactoringui.com',
        description: 'A great eBook about UI design written by the creators of TailwindCSS that I think is worth a read. It\'s super actionable and taught me a lot of best practices.'
      },
      {
        name: 'Full Stack Web Development Udemy Course',
        link: 'https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=LEARNNOWPLANS',
        description: 'When I got serious about learning this is the course I went through. I\'ve only done the front-end portion but the instructure, Colte, is great at explaining things. Highly recommend this course for beginners.'
      },
      {
        name: 'React/Next.js Udemy Course',
        link: 'https://www.udemy.com/course/the-ultimate-react-course',
        description: 'Jonas is my favorite instructor, and his React course is phenomenal. He covers all of vanilla React and a few sections on Next.js that were super helpful when I got started with next.'
      },
      {
        name: 'Traversy Media',
        link: 'https://www.youtube.com/@TraversyMedia',
        description: 'My favorite programming YouTube channel. Brad\'s a great guy and his crash courses are the first place I go whenever I learn a new technology.'
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

export default DevStack;
