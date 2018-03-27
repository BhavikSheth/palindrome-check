# palindrome-check

A Node.js package that checks whether the given input is a palindrome.

## Installation

Install the package using npm:

```shell
  npm install test-palindrome --save
```

## Usage

Require the package and use it like so:

```js
  var checkPalindrome = require("palimdrome-check");

  console.log(checkPalindrome("")); // true
  console.log(checkPalindrome("A man, a plan, a canal: Panama."); // true
  console.log(checkPalindrome("not a palindrome")); // false
  console.log(checkPalindrome("1234567890"); // false
  console.log(checkPalindrome("1234321"); // true
```

## Tests

```shell
  npm test
```