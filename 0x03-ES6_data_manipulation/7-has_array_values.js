/**
 * A function to check if all the elements in the array exist within the set.
 * @param {*} set set.
 * @param {*} array array.
 * @returns true if all the elements in the array exist within the set.
 *  otherwise false
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
