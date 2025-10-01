// Variable Naming Conventions in JavaScript

// Valid variable names
var name = "John";
var Name = "Jane";
var firstName = "Doe";
var last_name = "Smith";
var $age = 30;
var _city = "New York";
var fullName = name + " " + firstName + " " + last_name;
var ageInFiveYears = $age + 5;
var cityUpperCase = _city.toUpperCase();

console.log(fullName); // Output: John Doe Smith

if (5 > 3) {
  var isAdult = $age >= 18;
  console.log(isAdult); // Output: true
}
console.log(isAdult); // Output: true

// not global scope
function greet() {
  var greeting = "Hello, " + fullName;
  console.log(greeting); // Output: Hello, John Doe Smith
}
greet();
// console.log(greeting); // Error: greeting is not defined
