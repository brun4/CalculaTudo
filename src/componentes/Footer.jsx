import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../styles/style";

export default function Footer() {
  return (
    <View style={styles.Footer}>
      <Text style={styles.Footer}>
        Bruna Dias da Silva | Estudante de desenvolvimento Front Mobile |
        SoulCode Academy{" "}
      </Text>
    </View>
  );
}
