/**
 * Return a string of all set values that start with a specific string.
 * @param {Set} set - The set to process.
 * @param {String} startString - The string to check for.
 * @return {String} - The cleaned string.
 */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }
  if (startString === '') {
    return '';
  }
  const allvalues = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      allvalues.push(value.slice(startString.length, value.length));
    }
  });
  return allvalues.join('-');
}
