import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../styles/style";
import FormExemplo from "./FormExemplo";
import { LinearGradient } from "expo-linear-gradient";

export default function Content() {
  return (
    <View style={styles.Content}>
      <LinearGradient
        colors={["rgba(255,255,255,0.8)", "#E91E63"]}
        style={styles.background}
      >
        <Text></Text>
        <FormExemplo />
      </LinearGradient>
    </View>
  );
}
