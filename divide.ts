/**
 * Returns the quotient of two numbers.
 * Throws an Error if dividing by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

(window as unknown as { divide: typeof divide }).divide = divide;
