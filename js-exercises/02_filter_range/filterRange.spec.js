const filterRange = require("./filterRange");

describe("filterRange", () => {
  test("basic filter", () => {
    const arr = [5, 3, 8, 1];
    expect(filterRange(arr, 1, 4)).toEqual([3, 1]);
  });
  test("don't change origin Array", () => {
    const arr = [5, 3, 8, 1];
    filterRange(arr, 1, 4);
    expect(arr).toEqual([5, 3, 8, 1]);
  });
  test("don't introduce a Array", () => {
    const arr = "hola";
    expect(() => filterRange(arr, 1, 4)).toThrow(
      "Type Error, this function require Arrays",
    );
  });
  test("case when don't have value in this range", () => {
    const arr = [-1, -2, -3, -4];
    expect(filterRange(arr, 0, 5)).toEqual([]);
  });
});
