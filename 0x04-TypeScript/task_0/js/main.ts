interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const studentsList: Student[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
    location: 'Mars'
  },

  {
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
    location: 'Mars'
  }
];

let tableElementString: string = '<table><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr>';

studentsList.forEach((student: Student) => {
  tableElementString = tableElementString + `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.age}</td><td>${student.location}</td></tr>`;

});

tableElementString = tableElementString + '</table>';

document.body.innerHTML = tableElementString;

