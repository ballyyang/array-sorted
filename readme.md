## Example

```javascript
const sorted = require('array-sorted');

console.log(sorted([2, 3, 4]));
// => true

console.log(sorted([4, 2, 6]));
// => false

// supports custom compare
console.log(sorted([3, 2, 1], (a, b) => { return b > a });
// => true

console.log(sorted(['a', 'b', 'c']));
// => true

console.log(sorted(['a', 'M', 'c']));
// => false
```

## LICENSE [MIT](LICENSE)
