/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Used in src/components/Home/Header.js
      {
        protocol: "https",
        hostname: "img.lovepik.com",
      },
      // Used in src/components/cards/CourseCard.js
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // Used in src/components/testimonials/TestimonialCard.js and others
      // NOTE: You should still self-host the mascot image (em-content.zobj.net)
      {
        protocol: "https",
        hostname: "em-content.zobj.net",
      },
      {
        protocol: 'https',
        hostname: 'www.pnygenius.com',
      },
    ],
  },
};

export default nextConfig;
