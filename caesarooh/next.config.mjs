/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 4, // You might want to adjust this based on your environment
  },
  // ... any other configurations you might have
};

export default nextConfig; 