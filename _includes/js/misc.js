// Do not extend built-in prototypes
// Bad example
Array.prototype.empty = function() {
  return !this.length;
}

var a = [];
if (a.empty()) {
  console.log('losing');
}

// Good example
var a = [];
if (!a.length) {
  console.log('winning');
}
