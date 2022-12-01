import { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Numbers from "./components/numbers/Numbers";
import Signs from "./components/Signs";
import ExtraSigns from "./components/ExtraSigns";
import styles from "./styles";
import checkAndSetIsPortrait from "./js/checkAndSetIsPortrait";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isPortrait, setIsPortrait] = useState(true);

  useState(() => {
    // first time
    checkAndSetIsPortrait(setIsPortrait);

    Dimensions.addEventListener("change", () => {
      checkAndSetIsPortrait(setIsPortrait);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>{output}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Numbers input={input} setInput={setInput} setOutput={setOutput} />
        {isPortrait ? null : (
          <ExtraSigns input={input} setInput={setInput} setOutput={setOutput} />
        )}
        <Signs input={input} setInput={setInput} />
      </View>
    </SafeAreaView>
  );
}
