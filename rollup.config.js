import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = [
	{
		input: 'src/browser/index.js',
		output: [
			{
				file: 'dist/index.js',
				format: 'es',
			},
		],
		plugins: [nodeResolve(), commonjs()],
		external: ['jszip', 'path-browserify'],
	},
	{
		input: 'src/node/index.js',
		output: [
			{
				file: 'dist/node/index.js',
				format: 'es',
			},
		],
		external: ['jszip', 'global-jsdom/register', 'path', 'fs', 'node-fetch'],
	}
];

export default config;
