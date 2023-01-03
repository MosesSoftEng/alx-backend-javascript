/**
 * A function that returns an array of students for a specific city with their
 *  new grade.
 * @param {Array} students list of student objects.
 * @param {String} city name of city.
 * @param {Array} newGrades Array of grade objects.
 * @return an array of students for a specific city with their new grade.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city).map(
      (student) => {
        const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];

        return { ...student, grade: studentGrade ? studentGrade.grade : 'N/A' };
      },
    );
  }

  return [];
}
