const filterRangeInPlace = require("./filterRangeInPlace");

describe("filterRangeInPlace", () => {
  test("basic filter", () => {
    const arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3, 1]);
  });
  test("case when input is not a Array", () => {
    const arr = "hola";
    expect(() => filterRangeInPlace(arr, 1, 4)).toThrow(
      "Type Error, this function require Arrays",
    );
  });
  test("case when don't have value in the range", () => {
    const arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 0, 0);
    expect(arr).toEqual([]);
  });
});
