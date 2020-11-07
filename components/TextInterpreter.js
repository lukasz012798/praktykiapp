import React from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";

const TextInterpreter = ({ type, innerText }) => {
  // console.log(type);
  const styles = StyleSheet.create({
    container: {
      fontStyle: type === "italic" ? "italic" : "normal",
      fontFamily:
        type === "bold" ? "Montserrat_700Bold" : "Montserrat_400Regular",
    },
  });
  return (
    <Text style={styles.container}>
      {type === "breakline" ? "\n" : innerText}
    </Text>
  );
};

export default TextInterpreter;
