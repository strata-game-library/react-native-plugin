import { defineConfig } from 'tsup';

/**
 * tsup configuration for @strata-game-library/react-native-plugin
 *
 * Ensures proper Node.js ESM support with correct .js extensions
 */
export default defineConfig({
	entry: {
		index: 'src/index.tsx',
	},
	format: ['esm'],
	dts: true,
	clean: true,
	sourcemap: true,
	splitting: false,
	target: 'ES2022',
	jsx: 'automatic',
	external: ['@strata-game-library/core', 'react', 'react-native'],
	treeshake: true,
	minify: false,
	keepNames: true,
	banner: {
		js: '/* @strata-game-library/react-native-plugin - ESM Build */',
	},
});
