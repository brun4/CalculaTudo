import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/style";

export default function FormExemplo() {
  //estado com valor único
  const [state, setState] = useState("");
  //estado com objeto
  const [numeros, setNumeros] = useState({ a: 0, b: 0 });

  const [resultado, setResultado] = useState(0);

  return (
    <ScrollView>
      <View>
        <Text style={styles.Label}>
          {"\n"}
          {"\n"}
        </Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite um valor para a"
          keyboardType="numeric"
          onChangeText={(a) => {
            setNumeros({ ...numeros, a: parseInt(a) });
          }}
        />
        <Text style={styles.Label}>{"\n"}</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite um valor para b"
          keyboardType="numeric"
          onChangeText={(b) => {
            setNumeros({ ...numeros, b: parseInt(b) });
          }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.Resultado}>
          {" "}
          {resultado === 0 ? "" : `O resultado é ${resultado}`}
        </Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.botao1}
            title="+"
            onPress={() => {
              setResultado(numeros.a + numeros.b);
            }}
          >
            <Text style={styles.botao1}>+</Text>{" "}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao2}
            title="-"
            onPress={() => {
              setResultado(numeros.a - numeros.b);
            }}
          >
            {" "}
            <Text style={styles.botao2}>-</Text>{" "}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao3}
            title="*"
            onPress={() => {
              setResultado(numeros.a * numeros.b);
            }}
          >
            <Text style={styles.botao3}>*</Text>{" "}
          </TouchableOpacity>
        </View>
        <Text>{"\n"}</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.botao3}
            title="÷"
            onPress={() => {
              setResultado(numeros.a / numeros.b);
            }}
          >
            <Text style={styles.botao3}>÷</Text>{" "}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao1}
            title="%"
            onPress={() => {
              setResultado(numeros.a % numeros.b);
            }}
          >
            <Text style={styles.botao1}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao2}
            title="a^b"
            onPress={() => {
              setResultado(numeros.a ** numeros.b);
            }}
          >
            <Text style={styles.botao2}>a^b</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
