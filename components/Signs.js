import { View, StyleSheet, Text } from "react-native";
import Button from "./Item/Item";
import numberSignOnPress from "../js/numberSignOnPress";
import colors from "../js/colors";

export default ({ input, setInput }) => (
  <View style={styles.signsContainer}>
    <Button
      onPress={() => String(setInput(input.substring(0, input.length - 1)))}
    >
      Del
    </Button>
    <Button onPress={() => numberSignOnPress("/", input, setInput)}>/</Button>
    <Button onPress={() => numberSignOnPress("*", input, setInput)}>*</Button>
    <Button onPress={() => numberSignOnPress("-", input, setInput)}>
      {"-"}
    </Button>
    <Button onPress={() => numberSignOnPress("+", input, setInput)}>+</Button>
  </View>
);

const styles = StyleSheet.create({
  signsContainer: {
    flex: 2,
    backgroundColor: colors.signs,
  },
});
