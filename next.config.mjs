/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/652dbebd0c8e37e771b32d9c/**"
      }
    ]
  }
};

export default nextConfig;
