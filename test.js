import test from 'ava';
import resolveCwd from '.';

process.chdir('fixture');

test('resolveCwd()', t => {
	t.regex(resolveCwd('./fixture'), /fixture\/fixture\.js$/);
	t.throws(() => {
		resolveCwd('./nonexistent');
	});
});

test('resolveCwd.silent()', t => {
	t.regex(resolveCwd.silent('./fixture'), /fixture\/fixture\.js$/);
	t.is(resolveCwd.silent('./nonexistent'), undefined);
});
