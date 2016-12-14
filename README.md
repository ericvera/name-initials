# name-initials
A JavaScript utility library to extract initials from names.

<p>
  <a href="https://npmjs.org/package/nzme-initials">
    <img src="https://img.shields.io/npm/v/name-initials.svg?style=flat-square">
  </a>
</p>

# Usage

Install the module:

```sh
npm install name-initials --save
```

### ES6
```js
import nameInitials from 'name-initials';

const initials = nameInitials('John Smith');

console.log(initials);
// Output: JS
```

### Pre-ES6
```js
var nameInitials = require('name-initials');

var initials = nameInitials('John Smith');

console.log(initials);
// Output: JS
```

# Specifications
See the ````__tests__```` directory on the GitHub repository.


# License
[MIT](https://github.com/ericvera/name-initials/blob/master/LICENSE)