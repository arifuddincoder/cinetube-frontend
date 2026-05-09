import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	experimental: {
		serverActions: {
			bodySizeLimit: "10mb",
		},
	},
	env: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
			},
			{
				protocol: "https",
				hostname: "image.tmdb.org",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

export default nextConfig;
