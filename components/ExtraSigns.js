import { View, StyleSheet, Text } from "react-native";
import colors from "../js/colors";
import isLegalExp from "../js/isLegalExp";
import numberSignOnPress from "../js/numberSignOnPress";
import Button from "./Item/Item";

export default ({ input, setInput }) => (
  <View style={styles.extraSignsContainer}>
    <Button
      textLight={true}
      onPress={() => {
        if (isLegalExp(input)) setInput(String(Math.sqrt(eval(input))));
      }}
    >
      Sqrt
    </Button>
    <Button
      textLight={true}
      onPress={() => {
        numberSignOnPress("**", input, setInput);
      }}
    >
      Pow
    </Button>
    <Button
      textLight={true}
      onPress={() => {
        if (isLegalExp(input)) setInput(String(Math.sin(eval(input))));
      }}
    >
      Sin
    </Button>
    <Button
      textLight={true}
      onPress={() => {
        if (isLegalExp(input)) setInput(String(Math.cos(eval(input))));
      }}
    >
      Cos
    </Button>
  </View>
);

const styles = StyleSheet.create({
  extraSignsContainer: {
    flex: 2,
    backgroundColor: colors.extraSigns,
  },
});
