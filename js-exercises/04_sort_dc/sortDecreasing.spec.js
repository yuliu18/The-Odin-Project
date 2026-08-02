const sortDecreasing = require("./sortDecreasing");

describe("sortDecreasing", () => {
  test("Test sort function", () => {
    const arr = [5, 2, 1, -10, 8];
    expect(sortDecreasing(arr)).toEqual([8, 5, 2, 1, -10]);
  });
});
