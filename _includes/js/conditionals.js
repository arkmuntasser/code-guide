// Use the === operator
// Bad example
var a = 0;
if (a == '') {
    console.log('losing');
}

// Good example
var a = 0;
if (a !== '') {
    console.log('winning');
}

// User descriptive conditions
// Bad example
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
    console.log('losing');
}

// Good example
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
    console.log('winning');
}
