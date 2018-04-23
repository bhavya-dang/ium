'use strict';
var path = require('path');
var exec = require('./lib/exec');

var buildNewLzz = true;
var lzz = './lzz-source/lazycpp';
if (!/^(1|true|yes|on)$/i.test(process.env.LZZ_COMPAT)) {
	switch (process.platform) {
		case 'darwin': lzz = './lzz-compiled/osx'; buildNewLzz = false; break;
		case 'win32': lzz = './lzz-compiled/windows.exe'; buildNewLzz = false; break;
		case 'linux': lzz = './lzz-compiled/linux'; buildNewLzz = false; break;
		case 'freebsd': lzz = './lzz-compiled/bsd'; buildNewLzz = false; break; // provided by https://github.com/Morfent
	}
}
lzz = path.join(__dirname, lzz);


module.exports = function (args, moduleDir, debug) {
	if (!Array.isArray(args)) {
		return Promise.reject(new TypeError('Expected first argument to be an array'));
	}
	if (typeof moduleDir !== 'string') {
		return Promise.reject(new TypeError('Expected second argument to be a string'));
	}
	if (arguments.length < 3) {
		debug = process.env.NODE_ENV !== 'production';
	}

	var prerequisite = Promise.resolve();
	if (buildNewLzz) {
		prerequisite = exec('make', ['-f', 'Makefile.release'], path.dirname(lzz));
	}

	var gypArgs = debug ? ['rebuild', '--debug'] : ['rebuild'];
	args = args.slice();
	return prerequisite
		.then(function () {return exec(lzz, args, moduleDir);})
		.then(function () {return exec('node-gyp', gypArgs, moduleDir);});
};
