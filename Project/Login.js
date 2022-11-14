import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "./Components/Textinput";

const Login = ({ ...props }) => {
  return (
    <KeyboardAvoidingView
      className="flex-1 "
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <SafeAreaView className="flex-1">
        <View className="items-center justify-center flex-1">
          <Image className="" source={require("./accsets/images/baner.png")} />
        </View>
        <View className="pl-5 pr-5 flex-1 ">
          <Text className="text-xl font-semibold">Login</Text>
          <View>
            <Input label="Email" placeholder="nguyendacphuong@gmail.com" />
            <Input label="Email" placeholder="nguyendacphuong@gmail.com" />
          </View>
        </View>
        <View className="flex-1"></View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default Login;
const styles = StyleSheet.create({});
