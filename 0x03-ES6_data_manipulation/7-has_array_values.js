/**
 * Check if a set has all of the elements from an array.
 * @param {Set} set - The set to check.
 * @param {Array} array - The array of elements to check.
 * @return {boolean} - `true` if all elements are contained in the set,
 *                     `false` otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
