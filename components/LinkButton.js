import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Wystąpił błąd`);
    }
  }, [url]);

  return (
    <TouchableHighlight
      underlayColor={colors.blue}
      style={{ borderRadius: 5 }}
      onPress={handlePress}
    >
      {children}
    </TouchableHighlight>
  );
};

const App = ({ url, children }) => {
  return <OpenURLButton url={url}>{children}</OpenURLButton>;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
