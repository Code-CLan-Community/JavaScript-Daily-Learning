// ### Task: Student Grade Management System

// You need to create a simple student grade management system. This system will manage student information and their grades for different subjects. The task includes the following steps:

// 1. *Create Student Objects*:
//    - Each student should have the following properties: id, name, and grades.
//    - The grades property should be an object with subjects as keys and corresponding grades as values.

// 2. *Store Students in an Array*:
//    - Create an array to store multiple student objects.

// 3. *Functions*:
//    - *Add a Student*: Create a function to add a new student to the array.
//    - *Remove a Student*: Create a function to remove a student from the array by their id.

let students = [
  {
    id: 1,
    name: "Jhon",
    grades: {
      math: 75,
      science: 80,
      literature: 78,
    },
  },
  {
    id: 2,
    name: "Dheer",
    grades: {
      math: 75,
      science: 80,
      literature: 78,
    },
  },
  {
    id: 3,
    name: "Veer",
    grades: {
      math: 75,
      science: 80,
      literature: 78,
    },
  },
  {
    id: 4,
    name: "Raj",
    grades: {
      math: 75,
      science: 80,
      literature: 78,
    },
  },
];

console.log(students);
// add

function add(id , name, []) {
  let newStudent = {
    id: 5,
    name: "kholi",
    grades: {
        math: 33,
        science: 12,
        literature: 3,
      },
  };
  students.push(newStudent);
}

add(4,"ansh",[23,34,54]);
console.log(students);
// removing
function remove(id) {
  let index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  }
}
