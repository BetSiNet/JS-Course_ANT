// 1
// let cannot be redeclared
let a = 10;
// let a = 20; // SyntaxError: Identifier 'a' has already been declared

// 2
if (true) {
    let name = 'John';
    console.log(name); // John
}
// console.log(name); // ReferenceError: name is not defined

// 3
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError: i is not defined

// 4
// can reassign values
let b = 5;
b = 15;
console.log(b); // 15
// 5
