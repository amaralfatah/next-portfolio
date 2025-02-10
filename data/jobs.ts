// types.ts
type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  url: string;
}

// data/jobs.ts
export const jobs: Job[] = [
  {
    id: '1',
    title: 'Thumbnail Designer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    url: '/jobs/thumbnail-designer'
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    location: 'Remote / Jakarta',
    type: 'Full-time',
    department: 'Design',
    url: '/jobs/video-editor'
  }
];
