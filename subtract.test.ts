/**
 * Unit tests for subtract()
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  require("./subtract.js");
});

describe("subtract", () => {
  it("resta dos enteros positivos", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("resta con números negativos", () => {
    expect(window.subtract(-5, -2)).toBe(-3);
    expect(window.subtract(3, -2)).toBe(5);
  });

  it("resta con cero", () => {
    expect(window.subtract(5, 0)).toBe(5);
    expect(window.subtract(0, 0)).toBe(0);
  });
});

export {};
