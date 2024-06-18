// var PI = 3.14;
// PI = 42; // stop me from doing this!

//ES2015 version
// const PI = 3.14;
// PI = 42; TypeError

// What is the difference between var and let?
// var is function-scoped and globally scoped everywhere else.let is block-scoped and cannot be accessed outside of its current scope.Var can be hoisted whereas let cannot.Var can be reassigned AND redeclared whereas let can only be reassigned, but NOT redeclared

// What is the difference between var and const?
// var is function-scoped and globally scoped elsewhere.Const is block - scoped like "let".Var is hoisted whereas const is not.Const cannot be redeclared OR reassigned whereas var can do both

// What is the difference between let and const?
// let can be reassigned, but NOT redeclared whereas const cannot be redeclared OR reassigned.

// What is hoisting?
// Hoisting is when a variable is initialized at the beginning of a code page.Variables are lifted up or "hoisted" up to the top of a code page that haven't been declared yet giving it an "undefined" result when called.

//notes from solutions:
//Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.