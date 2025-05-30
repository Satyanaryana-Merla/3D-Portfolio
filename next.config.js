/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	poweredByHeader: false,
	optimizeFonts: true,
	images: {
		domains: ["res.cloudinary.com"],
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	webpack(config, { isServer }) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ["@svgr/webpack"]
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		// Optimize bundle size
		if (!isServer) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@react-three/fiber': '@react-three/fiber/dist/react-three-fiber.esm.js',
			};
		}

		// Split chunks for better caching
		config.optimization.splitChunks = {
			chunks: 'all',
			cacheGroups: {
				three: {
					test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
					name: 'three',
					priority: 10,
				},
				common: {
					minChunks: 2,
					priority: -10,
					reuseExistingChunk: true,
				},
			},
		};

		return config;
	}
};

module.exports = nextConfig;
