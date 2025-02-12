import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'raw.githubusercontent.com',
      'i.ytimg.com',
      'img.youtube.com',
      'raw.githubusercontent.com'],
  }
};

export default nextConfig;
