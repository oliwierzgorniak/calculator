import { numbers, signs } from "./data";

export default function isCharValid(char, exp) {
  const lastChar = exp[exp.length - 1];

  if (
    (char === "." || signs.includes(char)) &&
    ((exp.length !== 0 && !numbers.includes(lastChar)) || exp.length === 0)
  )
    return false;

  return true;
}
