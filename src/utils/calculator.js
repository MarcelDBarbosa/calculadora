export const calculate = (left, operator, right) => {
  const first = Number(left);
  const second = Number(right);

  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return second === 0 ? null : first / second;
    default:
      return second;
  }
};

export const formatNumber = (value) => {
  if (!Number.isFinite(value)) {
    return "Erro";
  }

  return String(value);
};
