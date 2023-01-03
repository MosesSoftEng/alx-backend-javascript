/**
 * Return a string of all set values that start with a specific string.
 * @param {Set} set - The set to process.
 * @param {String} startString - The string to check for.
 * @return {String|''} - The cleaned string, or ``.
 */
export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  // Convert the set to an array and filter out values that don't start
  // with the startString
  const filtered = Array.from(set).filter((value) => value.startsWith(startString));

  // Map the filtered array to a new array with the values cleaned up
  const cleaned = filtered.map((value) => value.slice(startString.length));

  // Join the cleaned values with a dash separator
  return cleaned.join('-');
}
