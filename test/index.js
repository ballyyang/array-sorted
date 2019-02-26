const isSorted = require('../');
const TestData = require('./test-data');
const custom = require('./custom-func');
const tape = require('tape');

TestData.forEach(d => {
	tape(`${d.array} sorted ${d.sorted}`, t => {
		t.plan(1);

		const actual = isSorted(d.array, custom[d.customCompare]);
		t.equal(actual, d.sorted);
	});
});

tape('Non-Array inputs', t => {
	t.plan(1);
	t.throws(() => {
		isSorted('book');
	}, /Only array can sort, this is string/);
});
