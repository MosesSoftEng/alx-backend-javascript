interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = function(firstName, lastName) {
  return `${firstName.charAt(0)}.${lastName}`;
};
