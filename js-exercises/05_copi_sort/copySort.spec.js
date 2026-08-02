const copySort = require("./copySort");

describe("copySort", () => {
  test("Test copySort function", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySort(arr);
    expect(arr).toEqual(["HTML", "JavaScript", "CSS"]);
    expect(sorted).toEqual(["CSS", "HTML", "JavaScript"]);
  });
});
