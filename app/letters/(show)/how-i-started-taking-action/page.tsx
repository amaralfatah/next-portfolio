import React from 'react';
import {ArrowLeft, Copy} from 'lucide-react';
import {articles} from "@/data/articles";

const HowIStartedTakingActionPage = () => {
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
                        <h1 className="text-2xl text-foreground">{articles[1].title}</h1>
                    </div>
                    <span className="text-muted-foreground">{articles[1].subtitle}</span>
                </div>
                <span className="text-sm text-muted-foreground">{articles[1].date}</span>
            </div>

            {/* Content */}
            <div className="letter-content flex flex-col gap-6 text-foreground">
                <p>Over the last few weeks I've been trying to take more action than I ever have before.</p>
                <p>For so long I was stuck in the habit of leaving everything I wanted to accomplish for later.</p>
                <p>This was for no reason other than I was scared to start.</p>
                <p>I've always been passionate for programming but I've never been consistent with it up until a few
                    months ago.</p>

                <p>I think it stems from the belief that "there's always time later".</p>
                <p>Once I started to question myself about this I realized how stupid it was.</p>

                <p>I've known a goal of mine is to start a software company, but I always felt I had to be "qualified"
                    to start.</p>
                <p>I now believe that so long as you're not doing something that would kill somebody in the case you
                    mess up, being qualified is irrelevant.</p>

                <p>The small act of coding at least 30 minutes every day (though often much more) has started to build
                    the belief that I am the sort of person to take action.</p>

                <p>On Thursday night I had bought a design eBook from TailwindCSS as I've been wanting to learn more
                    about UI design for my projects.</p>

                <p>I found out about <a href="http://humata.ai/"
                                        className="text-primary hover:underline">Humata.ai</a> the other day, which lets
                    you chat with PDFs and I had used it to ask some additional questions about a few of the pages.</p>

                <h2 className="text-xl font-semibold mt-6">9 AI Tools I Actually Use</h2>
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
                <p className="italic text-muted-foreground">links to valuable stuff I thought was worth sharing. product
                    links are amazon affiliate links.</p>

                <div className="flex flex-col gap-4">
                    <a href="https://useowly.com/" className="text-primary hover:underline">
                        <em>Owly</em> - the landing page that I built. If the idea sounds interesting to you and it's
                        something you'd use, would love your feedback.
                    </a>
                    <a href="https://coleca.cc/uw" className="text-primary hover:underline">
                        <em>LG Ultrawide 38"</em> - My main 34" monitor died on me this week, and I've been wanting to
                        switch to a single one anyways.
                    </a>
                    <a href="https://amzn.to/46fPVpt" className="text-primary hover:underline">
                        <em>Vegan Leather Desk Mat</em> - For $20 this is a great mat. Doesn't slide around, looks sleak
                        and feels smooth.
                    </a>
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

export default HowIStartedTakingActionPage;