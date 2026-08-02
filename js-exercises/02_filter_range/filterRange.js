function filterRange(array, a, b) {
  if (!Array.isArray(array)) {
    throw new Error("Type Error, this function require Arrays");
  }
  return array.filter(
    (num) =>
      typeof num === "number" && Number.isFinite(num) && num >= a && num <= b,
  );
}

module.exports = filterRange;
