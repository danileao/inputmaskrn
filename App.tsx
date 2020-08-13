import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Input from "./src/components/Input";

export default function App() {
  const [phone, setPhone] = useState("");
  function handleCustom(text: string) {
    setPhone(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Input Mask</Text>
      <Input
        mask="phone"
        value={phone}
        inputMaskChange={handleCustom}
        placeholderTextColor="#000"
        placeholder="Digite o telefone"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#719",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  text: {
    color: "#fff",
    marginBottom: 10,
  },
});
