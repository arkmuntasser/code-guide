// variables, properties and function names

// Bad example
var admin_user = db.query('SELECT * FROM users ...');

// Good example
var adminUser = db.query('SELECT * FROM users ...');


// class names

// Bad example
function bank_Account() {
}

// Good example
function BankAccount() {
}


// constants

// Bad example
const SECOND = 1 * 1000;

function File() {
}
File.fullPermissions = 0777;

// Good example
var SECOND = 1 * 1000;

function File() {
}
File.FULL_PERMISSIONS = 0777;
