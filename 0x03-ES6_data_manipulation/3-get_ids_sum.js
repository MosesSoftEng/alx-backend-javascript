/**
 * A function that returns the sum of all the student ids.
 * @param {Array} students list of student objects.
 * @returnssum sum of all the student ids otherwise, empty array.
 */
export default function getListStudents(students) {
  if (students instanceof Array) {
    return students.reduce((total, student) => total + student.id, 0);
  }

  return 0;
}
