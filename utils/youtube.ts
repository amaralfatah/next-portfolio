// utils/youtube.ts
import {YouTubeVideo} from '@/types/youtube';

export async function getLatestYouTubeVideo(): Promise<YouTubeVideo | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video`,
      {
        next: {
          revalidate: 3600 // Revalidate setiap 1 jam
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube video');
    }

    const data = await response.json();

    if (!data.items?.[0]) {
      return null;
    }

    const video = data.items[0];
    return {
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`
    };
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return null;
  }
}
