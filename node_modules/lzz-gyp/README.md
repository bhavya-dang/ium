# lzz-gyp
Lazycplusplus integration for native nodejs addons.

## Installation

```bash
npm install --save lzz-gyp
```

## Usage

In your `package.json` file, use a custom `install` script similar to this:

```js
var lzz = require('lzz-gyp');
lzz(['-d', '-hl', '-sl', '-e', './src/myproject.lzz'], __dirname).catch(function (err) {
	console.error(err);
	process.exit(1);
});
```

# API

### lzz(*args*, *moduleDir*, [*debug*]) -> *promise*

Builds the lzz source code by passing `args` to `lazycplusplus` and returns a promise. The working directory of both `lazycplusplus` and `node-gyp` are set to `moduleDir` (this should generally be your module's root directory).

By default, the node-gyp `--debug` flag is set based on `process.env.NODE_ENV !== 'production`, but you can override this by passing a boolean to the `debug` argument.

# License

The files included in `/lzz-source` and `/lzz-compiled` are part of the [lazycplusplus](http://www.lazycplusplus.com/index.html) project, by [Mike Spencer](mike@lazycplusplus.com), under the [GNU GPL Version 3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

All other files are part of the [lzz-gyp](https://github.com/JoshuaWise/lzz-gyp) project, by [Joshua Wise](https://github.com/JoshuaWise), also under the [GNU GPL Version 3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

Using this package as an dependency in your nodejs project does *not* obligate you to license that project under a GPL-compatible license because your project would be considered "output" of [lzz-gyp](https://github.com/JoshuaWise/lzz-gyp) and not necessarily a "covered work".
