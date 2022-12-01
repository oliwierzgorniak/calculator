import { signs } from "./data";

export default function isLegalExp(input) {
  const lastChar = input[input.length - 1];
  // console.log(
  //   input.length > 0 && (lastChar !== "." || !signs.includes(lastChar))
  // );
  return input.length > 0 && lastChar !== "." && !signs.includes(lastChar);
}
