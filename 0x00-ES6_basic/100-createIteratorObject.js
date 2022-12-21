export default function createIteratorObject(report) {
  return (function* _() {
    // eslint-disable-next-line no-restricted-syntax
    for (const department of Object.values(report.allEmployees)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
