// utils/youtube.ts
import {YouTubeVideo} from '@/types/youtube';

export async function getLatestYouTubeVideo(): Promise<YouTubeVideo | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  // Debug logs
  console.log('Fetching YouTube video...');
  console.log('API Key exists:', !!apiKey);
  console.log('Channel ID exists:', !!channelId);

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video`;
    console.log('Fetching URL:', url);

    const response = await fetch(url, {
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('YouTube API Error:', errorData);
      throw new Error('Failed to fetch YouTube video');
    }

    const data = await response.json();
    console.log('API Response:', data);

    if (!data.items?.[0]) {
      console.log('No videos found');
      return null;
    }

    const video = data.items[0];
    const result = {
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`
    };

    console.log('Processed video:', result);
    return result;

  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return null;
  }
}
