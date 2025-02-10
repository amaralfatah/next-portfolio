import React from 'react';
import {ArrowLeft, Copy} from 'lucide-react';
import {articles} from "@/data/articles";

const NowNotHowPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Back Button */}
            <a className="flex items-center group gap-1 no-underline text-muted-foreground hover:text-foreground"
               href="/letters">
        <span className="group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4"/>
        </span>
                Back
            </a>

            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl text-foreground">{articles[0].title}</h1>
                    </div>
                    <span className="text-muted-foreground">{articles[0].subtitle}</span>
                </div>
                <span className="text-sm text-muted-foreground">{articles[0].date}</span>
            </div>

            {/* Content */}
            <div className="letter-content flex flex-col gap-6 text-foreground">
                <p>I was listening to a podcast with Noah Kagan and Ali Abdaal where they talked about the idea of "now
                    now how".</p>
                <p>This is a conversation I wish I could have listened to years ago.</p>
                {/* ... rest of the content paragraphs ... */}
                <h2 className="text-xl font-semibold mt-6">The One Monitor Setup</h2>

                <div className="overflow-hidden rounded-md bg-card">
                    <div className="aspect-video">
                        <img
                            src="/images/logo-light.png"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h2 className="text-xl font-semibold mt-6">Things I've found interesting</h2>
                <p className="italic text-muted-foreground">links to valuable stuff I thought was worth sharing</p>

                {/* Links section */}
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-primary hover:underline">How To Start A Business In 48 Hours - Noah
                        Kagan</a>
                    <a href="#" className="text-primary hover:underline">How Anyone Can Make $10K - $1M per Month |
                        Daniel Priestley</a>
                    <a href="#" className="text-primary hover:underline">Jacob Sucks At Code</a>
                </div>

                <p>Have a great week.</p>
                <p>Cole</p>
                <p className="text-muted-foreground">P.S. If you found this letter helpful, please consider sharing it
                    with a friend :)</p>
            </div>

            {/* Copy URL Button */}
            <div className="relative">
                <button
                    className="flex items-center gap-2 rounded-md border border-input bg-background hover:bg-accent px-3 py-1.5 text-sm text-foreground">
                    <Copy className="w-4 h-4"/>
                    Copy URL
                </button>
            </div>
        </div>
    );
};

export default NowNotHowPage;