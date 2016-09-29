// Use 2 spaces for indents
// Bad example
if (bar === foo) {
    /* ... */
}

// Good example
if (bar === foo) {
    /* ... */
}


// End your statements with a semicolon
// Bad example
console.log('I done goofed')

// Good example
console.log('Hello, world!');

// Use single quotes
// Bad example
var html = "<p class='subtitle'>The JS is bad and now it's made the HTML bad.</p>";

// Good example
var html = '<p class="subtitle">There, now everything looks pretty!</p>';


// Opening braces go on the same lines
// Bad example
if (bar === foo)
{
    // This is madness
    var bat = bar + foo;
}

// Good example
if (bar === foo) {
    var bat = bar + foo;
} else {
    var bin = bar * foo;
}


// Declare one variable per statement
// Bad example
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (keys.length) {
    key = keys.pop();
    object[key] = values.pop();
}

// Good example
var keys   = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (keys.length) {
    var key = keys.pop();
    object[key] = values.pop();
}
