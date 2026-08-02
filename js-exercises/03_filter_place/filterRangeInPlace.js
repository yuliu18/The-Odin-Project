function filterRangeInPlace(arr, a, b) {
  if (!Array.isArray(arr)) {
    throw new Error("Type Error, this function require Arrays");
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

module.exports = filterRangeInPlace;
