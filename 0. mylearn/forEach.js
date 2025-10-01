const data = [
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "sineth",
    age: 20,
  },
  {
    name: "bopa",
    age: 40,
  },
  {
    name: "kamala",
    age: 10,
  },
  {
    name: "dinesh",
    age: 29,
  },
];

data.forEach((item) => {
  console.log(item.name);
  console.log(item.age);
});
// forEach method does not return any value
// it just iterate the array and perform the operation
// on each element of the array
// it does not change the original array
// it does not skip the empty elements in the array
// it does not support async/await