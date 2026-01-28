const accountId = 144553
let accountEmail = "kukki@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
acoountState;

// accountId = 2  not allowed

accountEmail = "rishu@hc.com"
accountPassword = "12398"
accountCity = "kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountPassword]);

