/**
 * Unit tests for multiply()
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplica dos enteros positivos", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("multiplica números negativos", () => {
    expect(window.multiply(-2, 5)).toBe(-10);
    expect(window.multiply(-3, -4)).toBe(12);
  });

  it("multiplica con cero", () => {
    expect(window.multiply(7, 0)).toBe(0);
    expect(window.multiply(0, 0)).toBe(0);
  });
});

export {};
