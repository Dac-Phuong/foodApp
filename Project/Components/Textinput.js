import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { StyleSheet } from "react-native";

export default function Input({
  label,
  error,
  password,
  onForcus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidepassword, setHidePassword] = React.useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.darkBlue
              : colors.Light,
          },
        ]}
      >
        <TextInput
          style={styles.input}
          secureTextEntry={hidepassword}
          autoCorrect={false}
          onFocus={() => {
            onForcus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
      </View>
      {error && (
        <Text style={{ color: colors.red, fontSize: 12 }}>{error}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginVertical: 3,
    fontSize: 14,
    color: "#7C7C7C",
  },
  inputContainer: {
    height: 46,
    borderRadius: 8,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    borderBottomWidth:0.5,
    borderColor:'#ccc'
  },
});
