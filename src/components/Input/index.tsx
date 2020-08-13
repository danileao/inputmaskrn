import React, { useState } from "react";
import { TextInputProps, TextInput, StyleSheet } from "react-native";
import { maskCep, maskPhone } from "../../utils/mask";

interface InputProps extends TextInputProps {
  mask: "cep" | "phone";
  inputMaskChange?: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  const [maxLength, setMaxLength] = useState(1);
  function handleChange(e: string) {
    console.log(mask);
    if (mask === "cep") {
      setMaxLength(9);
      const value = maskCep(e);
      inputMaskChange(value);
    }
    if (mask === "phone") {
      setMaxLength(15);
      const value = maskPhone(e);
      inputMaskChange(value);
    }
  }

  return (
    <>
      <TextInput
        maxLength={maxLength}
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        {...rest}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 54,
    width: 200,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    fontSize: 14,
  },
});
