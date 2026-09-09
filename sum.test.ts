/**
 * Unit tests for sum()
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  require("./sum.js");
});

describe("sum", () => {
  it("suma dos enteros positivos", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("suma números negativos", () => {
    expect(window.sum(-1, 5)).toBe(4);
    expect(window.sum(-2, -3)).toBe(-5);
  });

  it("suma con cero", () => {
    expect(window.sum(5, 0)).toBe(5);
    expect(window.sum(0, 0)).toBe(0);
  });
});

export {};
