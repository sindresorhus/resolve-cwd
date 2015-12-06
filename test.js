import test from 'ava';
import fn from './';

test(t => {
	process.chdir('fixture');
	t.regexTest(/fixture\/fixture\.js$/, fn('./fixture'));
	t.is(fn('./fixture2'), null);
});
