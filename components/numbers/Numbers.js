import { View, Text } from "react-native";
import { numbersLayout } from "./js/data";
import Button from "../Item/Item";
import styles from "./styles";
import numberSignOnPress from "../../js/numberSignOnPress";
import calculate from "./js/calculate";

export default ({ input, setInput, setOutput }) => (
  <View style={styles.numbersContainer}>
    {numbersLayout.map((row, i) => (
      <View style={styles.numbersRow} key={"numbersRow" + i}>
        {row.map((n) => (
          <Button
            textLight={true}
            onPress={() => numberSignOnPress(n, input, setInput)}
            key={n}
          >
            {n}
          </Button>
        ))}
      </View>
    ))}
    <View style={styles.numbersRow}>
      <Button
        textLight={true}
        onPress={() => numberSignOnPress(".", input, setInput)}
      >
        .
      </Button>
      <Button
        textLight={true}
        onPress={() => numberSignOnPress("0", input, setInput)}
      >
        0
      </Button>
      <Button
        textLight={true}
        onPress={() => {
          calculate(input, setOutput);
        }}
      >
        {"="}
      </Button>
    </View>
  </View>
);
