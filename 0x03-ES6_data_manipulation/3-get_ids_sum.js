/**
 * A function that returns the sum of all the student ids.
 * @param {Array} students list of student objects.
 * @param {String} city name of city.
 * @returns array of objects who are located in a specific city otherwise,
 *  empty array.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }

  return [];
}
