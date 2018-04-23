'use strict';
var spawn = require('child_process').spawn;
var spawnOptions = {
	encoding: 'utf8',
	stdio: 'inherit',
	shell: true
};

module.exports = function (file, args, cwd) {
	return new Promise(function (resolve, reject) {
		console.log('==>', 'cwd:', cwd);
		console.log('==>', [file].concat(args).join(' '));

		var child = spawn('"' + file + '"', args, Object.assign({cwd: cwd}, spawnOptions));
		child.on('exit', function (code) {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error('exit code ' + code));
			}
		});
	});
};
