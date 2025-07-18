class Calculator {
  /**
   * Adds two numbers.
   * @param a The first number.
   * @param b The second number.
   * @returns The sum of the two numbers.
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param a The first number.
   * @param b The second number.
   * @returns The difference between the two numbers.
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param a The first number.
   * @param b The second number.
   * @returns The product of the two numbers.
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param a The first number (dividend).
   * @param b The second number (divisor).
   * @returns The quotient of the two numbers.
   * @throws {Error} if the divisor is 0.
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
}

// Example of how to use the Calculator
const calculator = new Calculator();
console.log(`10 + 5 = ${calculator.add(10, 5)}`);
console.log(`10 - 5 = ${calculator.subtract(10, 5)}`);
console.log(`10 * 5 = ${calculator.multiply(10, 5)}`);
console.log(`10 / 5 = ${calculator.divide(10, 5)}`);
--halo