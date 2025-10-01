// const cannot be reassigned
const c = 20;
// c = 30; // TypeError: Assignment to constant variable
console.log(c); // 20

// const must be initialized at the time of declaration
// const d; // SyntaxError: Missing initializer in const declaration
// 2
if (true) {
    const city = 'New York';
    console.log(city); // New York
}
// console.log(city); // ReferenceError: city is not defined
// 3
for (let j = 0; j < 3; j++) {
    const pi = 3.14;
    console.log(pi); // 3.14, 3.14, 3.14
}
// console.log(j); // ReferenceError: j is not defined
// const with objects and arrays
const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying the contents of the array
console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6]; // TypeError: Assignment to constant variable