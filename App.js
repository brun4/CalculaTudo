import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import Header from "./src/componentes/Header";
import Content from "./src/componentes/Content";
import Footer from "./src/componentes/Footer";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hidden={false} backgroundColor="#00BCD4"></StatusBar>

      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
}
