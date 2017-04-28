import test from 'ava';
import m from '.';

process.chdir('fixture');

test('resolveCwd()', t => {
	t.regex(m('./fixture'), /fixture\/fixture\.js$/);
	t.throws(() => {
		m('./nonexistent');
	});
});

test('resolveCwd.silent()', t => {
	t.regex(m.silent('./fixture'), /fixture\/fixture\.js$/);
	t.is(m.silent('./nonexistent'), null);
});
