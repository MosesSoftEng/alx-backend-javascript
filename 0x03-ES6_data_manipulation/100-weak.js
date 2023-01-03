/**
 * A `WeakMap` that tracks the number of times the `queryAPI` function is called
 * for each endpoint.
 * @type {WeakMap}
 */
export const weakMap = new WeakMap();

/**
 * Queries an API with the specified endpoint.
 *
 * @param {Object} endpoint The endpoint object.
 * @param {string} endpoint.protocol The protocol of the endpoint.
 * @param {string} endpoint.name The name of the endpoint.
 * @throws {Error} If the number of queries for the endpoint is greater than or
 * equal to 5.
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count++;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
