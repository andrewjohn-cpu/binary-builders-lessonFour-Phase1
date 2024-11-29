// let students = ["elusa", "caroline", "david", "mark"];
// students.push("cyrus");
// console.log(students)

// let student = {
//     fullname: "leslie elusa",
//     location: "nairobi",
//     age: 20,
//   };

// console.log(student.fullname);
// console.log(student.location);
// console.log(student["age"]);

// student.course = "software engineering";
// student["course"] = "software engineering";
// console.log(student);

// let student = {
//   fullname: "leslie elusa",
//   location: "nairobi",
//   age: 20,
// };

// console.log(students.david.fullname, students.david.location);

//let students = {
//   elusa: {
//     fullname: "leslie elusa",
//     location: "nairobi",
//     age: 20,
//   },

//   caroline: {
//     fullname: "caroline mutemi",
//     location: "nairobi",
//     age: 20,
//   },

//   david: {
//     fullname: "david ayodo",
//     location: "nairobi",
//     age: 20,
//   },
// };

// for (let key in students) {
//   let student = students[key];
//   console.log(
//     `Fullname: ${student.fullname}, Location: ${student.location}, Age: ${student.age}`
//   );
// }

// let student = {
//   fullname: "leslie elusa",
//   location: "nairobi",
//   age: 20,
// };

// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// displayName("cyrus");
// displayName("mark");

// function displayName(name) {
//   console.log("Welcome " + name);
// }

// (function (name) {
//   console.log("welcome " + name);
// })();

// function myHobbies(callbackFunction) {
//   const hobby1 = "I like taking nature walks";
//   const hobby2 = "I like listening to podcasts";
//   callbackFunction();
// }

// myHobbies(function (hobby1, hobby2) {
//   console.log(`My name is `);
// });

// function interests() {
//   let natureWalks =
//     "I like immersing myself in the calming embrace of nature, where every step brings clarity and peace.";
//   const podcasts =
//     "I love how podcasts let me explore how others think and view the world. It's like stepping into someone else's min";
// }

function displayName(name) {
  console.log(`welcome ${name}`);
}

displayName("cyrus");

function displayName(callbackFunction) {
  let name = "cyrus";
  callbackFunction(name);
}

displayName(function (name) {
  return `welcome ${name}`;
});

let callbackFunction = function (name){
  console.log(`welcome ${name}`)
}

callbackFunction("cyrus")