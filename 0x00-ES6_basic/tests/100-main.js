import createIteratorObject from '../100-createIteratorObject';

import createEmployeesObject from '../0-constants';
import createReportObject from '../12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
