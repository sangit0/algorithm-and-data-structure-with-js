/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let current = 0;
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    arr1[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    arr2[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (arr1[i] === arr2[i]) matches++;
  }

  let l = 0;
  for (let i = s1.length; i < s2.length; i++) {
    if (matches === 26) return true;

    let index = s2.charCodeAt(i) - "a".charCodeAt(0);
    arr2[index]++;

    if (arr1[index] === arr2[index]) {
      matches++;
    } else if (arr1[index] + 1 === arr2[index]) {
      matches--;
    }

    index = s2.charCodeAt(l) - "a".charCodeAt(0);
    arr2[index]--;

    if (arr1[index] === arr2[index]) {
      matches++;
    } else if (arr1[index] - 1 === arr2[index]) {
      matches--;
    }

    l++;
  }
  return matches === 26;
};
