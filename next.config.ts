import type { NextConfig } from "next";

import "./lib/env/server";
import "./lib/env/client";

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
