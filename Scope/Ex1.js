// Functional Scope vs Local Scope


// Example of functional scoping
if (5>4){
    var secret = "12345";
}

console.log(`The value of secret is `, secret)  // The value of secret is  12345


// Local Scoping
if (5>4){
    const password = "abcd" ;
    let username = "efgh" ;
    console.log(`The Password is `,password ) // The Password is abcd
    console.log(`The username is`, username) // The username is efgh
}
console.log(`The value of password from outside is `, password) // This will give an error since the const keyword is used
console.log(`The value of username from outside is `, username) // This will give an error since the let keyword is used

