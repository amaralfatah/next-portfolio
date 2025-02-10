import {jobs} from '@/data/jobs'

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium text-foreground">Join our team</h1>
        <p className="text-muted-foreground">
          Join us in building the future of technology. We're always looking for talented individuals who are passionate
          about msaking a difference.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Open positions</span>
        </div>

        <div className="flex flex-col divide-y divide-border/30">
          {jobs.map((job) => (
            <a
              key={job.id}
              className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:border-border hover:px-3 hover:-mx-3"
              href={job.url}
            >
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">{job.title}</span>
                </div>
                <div className="flex flex-col gap-1 sm:items-end">
                  <span className="text-sm text-muted-foreground">{job.location}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobsPage;
