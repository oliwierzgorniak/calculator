import isLegalExp from "../../../js/isLegalExp";
import { signs } from "./data";

export default function calculate(input, setOutput) {
  if (isLegalExp(input)) setOutput(eval(input));
}
