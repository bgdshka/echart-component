/**
 * Randomly generated N = length array 0 <= A[N] < max
 * @param {Number} length - array length
 * @param {Number} max - max item array value
 * @returns {Array} - generated array
 */
export function getRandomArray(length, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}
