import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "a.espncdn.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
