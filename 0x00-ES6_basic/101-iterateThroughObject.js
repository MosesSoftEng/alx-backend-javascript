export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
