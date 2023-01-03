/**
 * A function that returns an array of objects who are located in a
 *  specific city.
 * @param {Array} students list of student objects.
 * @param {String} city name of city.
 * @returns array of objects who are located in a specific city otherwise,
 *  empty array.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }

  return [];
}
