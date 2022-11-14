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
    container:{
        flex:1,
    },
    label:{
        marginVertical:5,
        fontSize:14,
        color:'#ccc',
    },
    inputContainer:{
        height:50,
        paddingHorizontal:15,
        borderWidth:0.5,
        borderRadius:8,
        justifyContent:'center',
        borderColor:'#CCC'
    },
});