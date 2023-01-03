/**
 * Returns an updated map for all items with an initial quantity of 1.
 *
 * @param {Map} map The map of groceries.
 * @return {Map} The updated map of groceries.
 * @throws {Error} If updating the quantity is not possible.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  map.forEach((quantity, name) => {
    if (quantity === 1) {
      updatedMap.set(name, 100);
    } else {
      updatedMap.set(name, quantity);
    }
  });

  return updatedMap;
}
