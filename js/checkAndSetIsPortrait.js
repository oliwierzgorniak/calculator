import { Dimensions } from "react-native";

export default function checkAndSetIsPortrait(setIsPortrait) {
  const dim = Dimensions.get("screen");
  setIsPortrait(dim.height >= dim.width);
}
