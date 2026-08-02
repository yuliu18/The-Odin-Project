const camelize = require("./camelize");

describe("camelize", () => {
  test("caso normal con minuscual al principio", () => {
    expect(camelize("background-color")).toEqual("backgroundColor");
  });
  test("caso normal pero con más palabras", () => {
    expect(camelize("list-style-image")).toEqual("listStyleImage");
  });
  test("guión al principio", () => {
    expect(camelize("-webkit-transition")).toEqual("WebkitTransition");
  });
  test("string vacío", () => {
    expect(camelize("")).toEqual("");
  });
  test("una sola palabra", () => {
    expect(camelize("hola")).toEqual("hola");
  });
  test("cuando no es string", () => {
    expect(camelize(123)).toEqual(123);
  });
});
