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
  return 0;
};

const sum_to_n_c = (n: number): number => {
  const result = (n * (n + 1)) / 2;
  console.log("Result sum_to_n_c is:", result);
  return result;
};

sum_to_n_c(5);
