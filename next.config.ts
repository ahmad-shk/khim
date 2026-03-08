import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async rewrites() {
    		return [
    			{
    				source: '/api/c15t/:path*',
    				destination: 'https://msm-europe-msm.c15t.dev//:path*',
    			},
    		];
    	}
};

export default nextConfig;
