export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // eslint-disable-next-line no-shadow
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
