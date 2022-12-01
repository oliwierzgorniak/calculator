import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../js/colors";

export default ({ children, onPress, textLight }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text
      style={{
        ...styles.text,
        color: textLight ? colors.textLight : colors.textDark,
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
