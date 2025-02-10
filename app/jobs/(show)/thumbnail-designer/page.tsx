const ThumbnailDesignerPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <a
          className="flex items-center group gap-1 no-underline text-muted-foreground hover:text-foreground"
          href="/jobs"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span> Back
        </a>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-foreground ">Thumbnail Designer</h1>
          </div>
          <span className="text-muted-foreground">
            Help design thumbnails for the Amar Al Fatah channel
          </span>
        </div>

        <div className="job-content flex flex-col gap-6 text-muted-foreground">
          <p>I currently design all of my thumbnails by myself. I'm looking for someone who can help me design on a
            regular basis.</p>
          <p>I'm aiming for 2-4 thumbnails per month where you'd have a minimum of 1 week to design the thumbnail.</p>
          <p>You'll be an integral part of the channel and help me expirement with new styles of content.</p>
          <p>We'll make more of the tech videos I've always created but also learn how to make great
            coding/software-focused content.</p>

          <h4 className="text-foreground font-medium">About you</h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>You are passionate about making videos and technology</li>
            <li>You're humble and eager to constantly learn and improve based on feedback</li>
            <li>You're entrepreneurial and eager to be a part of building something for the long-term</li>
          </ul>

          <h4 className="text-foreground font-medium">Location</h4>
          <p>This will start as a remote position but you'll have the opportunity to work in person with me in the
            future.</p>

          <h4 className="text-foreground font-medium">Compensation</h4>
          <p>This is a contrast position and you'll be paid a flat fee per video. We can also discuss a percentage of
            the channel's revenue.</p>

          <h4 className="text-foreground font-medium">How to apply</h4>
          <p>Reach out to Amar at <a href="mailto:amaralfatah.me@gmail.com"
                                     className="text-primary hover:underline">amaralfatah.me@gmail.com</a> with the job
            title
            in the subject line.</p>
          <p>Send me links to your best work and ideas you have for the channel.</p>
          <p>If you're a good fit we'll schedule a call and plan a trial run of 1-2 videos (that will be paid).</p>
        </div>
      </div>
    </div>
  )
}

export default ThumbnailDesignerPage;
