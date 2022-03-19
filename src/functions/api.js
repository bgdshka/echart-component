import { getRandomArray } from "./array";

/**
 * Mocked api call with random array data
 * @returns {Promise}
 */
export function apiCallMock() {
  return Promise.resolve({ data: getRandomArray(7, 100) });
}
