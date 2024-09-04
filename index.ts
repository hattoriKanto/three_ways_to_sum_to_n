// Itteration approach.
// Advantages: simple and uncomplicated approach.
// Disadvantage: if there are much more iterations, it will lead to problems with optimisation.
const sum_to_n_a = (n: number): number => {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += i;
  }

  console.log("Result sum_to_n_a is:", result);

  return result;
};

sum_to_n_a(5);

// Recursion approach.
// Advantages:
// - Great for complex tasks.
// - Recursion is simple and straightforward (mostly time)
// Disadvantages:
// - If the base condition is not set correctly, an infinite loop can occur which will cause a freeze.
// - Each function will be stored in the call stack, which may lead to stack overflow.
const sum_to_n_b = (n: number): number => {
  const recurFunc = (n: number): number => {
    if (n === 0) {
      return 0;
    }

    return n + recurFunc(n - 1);
  };
  const result = recurFunc(n);

  console.log("Result sum_to_n_b is:", result);

  return result;
};

sum_to_n_b(5);

// For those who like maths (or know how to google formulas).
// Advantages: it doesn't need a loop or recursion. Great for optimisation.
// Disadvantages: it may take time to understand code with a lot of mathematical operations.
const sum_to_n_c = (n: number): number => {
  const result = (n * (n + 1)) / 2;
  console.log("Result sum_to_n_c is:", result);
  return result;
};

sum_to_n_c(5);
