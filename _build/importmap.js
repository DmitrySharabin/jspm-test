import { Generator } from '@jspm/generator';
import { readFileSync } from 'node:fs';

const generator = new Generator({
  // The URL of the import map, for normalising relative URLs:
  mapUrl: import.meta.url,

  // The default CDN to use for external package resolutions:
  defaultProvider: 'nodemodules',

  // The environment(s) to target. Note that JSPM will use these to resolve
  // conditional exports in any package it encounters:
  env: ['production', 'browser', 'module'],
});

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

if (!pkg) {
	throw new Error('package.json not found or invalid');
}

// Install from a local package:
await installPackage(generator, pkg.name, './');

if (pkg.dependencies) {
	for (const dep in pkg.dependencies) {
		// --- Option 1 ---
		// await installPackage(generator, dep, `./node_modules/${dep}`);

		// --- Option 2 (gives different import map!) ---
		// With nodemodules provider, use package name, not path
		await installPackage(generator, dep, dep);
	}
}

// Output the import map:
console.log(JSON.stringify(generator.getMap(), null, 2));

async function installPackage (generator, name, target) {
	try {
		return await generator.install({
			alias: name,
			target: target,
			subpaths: true,
		});
	} catch (error) {
		try {
			return await generator.install({
				alias: name,
				target: target,
				subpaths: false,
			});
		}
		catch (e) {}
	}
}
