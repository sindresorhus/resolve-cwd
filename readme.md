# resolve-cwd

> Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from the current working directory


## Install

```
$ npm install resolve-cwd
```


## Usage

```js
const resolveCwd = require('resolve-cwd');

console.log(__dirname);
//=> '/Users/sindresorhus/rainbow'

console.log(process.cwd());
//=> '/Users/sindresorhus/unicorn'

console.log(resolveCwd('./foo'));
//=> '/Users/sindresorhus/unicorn/foo.js'
```


## API

### resolveCwd(moduleId)

Like `require()`, throws when the module can't be found.

### resolveCwd.silent(moduleId)

Returns `undefined` instead of throwing when the module can't be found.

#### moduleId

Type: `string`

What you would use in `require()`.


## Related

- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [import-cwd](https://github.com/sindresorhus/import-cwd) - Import a module from the current working directory
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import a module lazily
- [resolve-global](https://github.com/sindresorhus/resolve-global) - Resolve the path of a globally installed module


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-resolve-cwd?utm_source=npm-resolve-cwd&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
