/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function(reader, target) {
  let left = 0;
  let right = target - reader.get(0);

  if (target === reader.get(right)) return right; // if unique

  //   let right = 1; // by searching right boundary

  //   while (reader.get(right) < target) {
  //    left = right;
  //    right <<= 1;
  //  }

  while (left <= right) {
    let pivot = parseInt(left + (right - left) / 2);

    if (reader.get(pivot) === target) return pivot;

    if (reader.get(pivot) < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return -1;
};
