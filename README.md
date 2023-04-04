# Testing Babel published as ESM

Look at `"devDependencies"` in `package.json`, and (after running `npm ci --legacy-peer-deps` to install dependencies) at the modules syntax used in `node_modules/@babel/core/lib/index.js` :)

You can also verify that it actually works, by running `yarn rollup -c rollup.config.js`
