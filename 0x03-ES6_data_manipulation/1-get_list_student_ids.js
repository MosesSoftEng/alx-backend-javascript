/**
 * A function that returns an array of ids from a list of object
 * @param {Array} students list of student objects.
 * @returns array of ids otherwise, empty array.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }

  return [];
}
