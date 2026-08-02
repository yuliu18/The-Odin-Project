const shuffle = require("./shuffleArray");

describe("shuffleArray", () => {
  test("Test shuffle function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result.length).toBe(arr.length);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });
});
