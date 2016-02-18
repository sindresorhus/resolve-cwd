import test from 'ava';
import m from './';

test(t => {
	process.chdir('fixture');
	t.regex(m('./fixture'), /fixture\/fixture\.js$/);
	t.is(m('./fixture2'), null);
});
