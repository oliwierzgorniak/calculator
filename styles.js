import { StyleSheet } from "react-native";
import colors from "./js/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  inputContainer: {
    backgroundColor: colors.input,
    flex: 2.2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  input: {
    fontSize: 50,
    color: colors.textDark,
  },
  outputContainer: {
    backgroundColor: colors.output,
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  output: {
    fontSize: 43,
    color: colors.textDark,
  },
  buttonsContainer: {
    flex: 7,
    flexDirection: "row",
  },
});
