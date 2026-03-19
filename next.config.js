/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export', // One.com static hosting ke liye
  images: {
    unoptimized: true, // Static export mein zaroori hai
  },
  // Note: Rewrites static export mein kaam nahi karte, 
  // isliye inhein hata dena behtar hai agar aap static host kar rahe hain.
};

module.exports = nextConfig;