import * as esbuild from 'esbuild'

await esbuild.build({
	entryPoints: ['src/app.ts'],
	bundle: false,
	outdir: 'dist',
	tsconfig: './tsconfig.json'
})