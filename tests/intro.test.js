import { describe, expect, it } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if arg is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return Fizz if arg is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return as a string if it's not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
});

describe("factorial", () => {
  it("should return 1 if the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if the input is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if the input is 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if the input is 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if the input is 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if the input is negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
