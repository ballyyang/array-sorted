module.exports = (
	array,
	compare = (a, b) => {
		return a > b;
	}
) => {
	if (!Array.isArray(array))
		throw new TypeError('Only array can sort, this is ' + typeof array);

	for (let i = 1, length = array.length; i < length; ++i) {
		if (compare(array[i - 1], array[i])) return false;
	}

	return true;
};
