/**
 * Unit tests for divide()
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divide dos enteros positivos", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("divide números negativos", () => {
    expect(window.divide(-6, 3)).toBe(-2);
    expect(window.divide(-12, -4)).toBe(3);
  });

  it("divide cero entre un número", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("caso límite de división por cero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

export {};
