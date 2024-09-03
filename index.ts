const sum_to_n_a = (n: number): number => {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += i;
  }

  console.log("Result sum_to_n_a is:", result);

  return result;
};

sum_to_n_a(5);

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

const sum_to_n_c = (n: number): number => {
  const result = (n * (n + 1)) / 2;
  console.log("Result sum_to_n_c is:", result);
  return result;
};

sum_to_n_c(5);
