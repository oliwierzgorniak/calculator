import isCharValid from "./isCharValid";

export default function numberSignOnPress(char, input, setInput) {
  if (isCharValid(char, input)) setInput(String(input + char));
}
