/**
 * Return a string of all set values that start with a specific string.
 * @param {Set} set - The set to process.
 * @param {String} startString - The string to check for.
 * @return {String} - The cleaned string.
 */
export default function cleanSet(set, startString) {
  const strArr = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }

  set.forEach((str) => {
    // Check set element is a string
    if (typeof str === 'string') {
      if (str.startsWith(startString)) {
        strArr.push(str.substring(startString.length));
      }
    }
  });

  return strArr.join('-');
}
