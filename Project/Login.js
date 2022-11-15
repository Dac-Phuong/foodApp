import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Keyboard,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "./Components/Textinput";
import Button from "./Components/button";

const Login = ({ navigation }) => {
  const [errors, setErrors] = React.useState({});
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [inputs, setInpust] = React.useState({
    email: "",
    password: "",
  });
  const validate = () => {
    let vald = true;
    Keyboard.dismiss();
    if (!inputs.email) {
      handleErrors("please input email", "email");
      vald = false;
    } else if (inputs.email.match(/\S+@\S+\.S+/)) {
      handleErrors("please input email", "email");
    }
    if (!inputs.password) {
      handleErrors("please input password", "password");
    } else if (inputs.password.length < 3) {
      handleErrors("min password length 3 ", "password");
    }
  };
  const handleOnChange = (text, input) => {
    setInpust((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleErrors = (errorMessange, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessange }));
  };
  const [getPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 ">
      <View className="items-center justify-center  flex-1">
        <Image source={require("./accsets/images/baner.png")} />
      </View>
      <View className="pl-5 pr-5">
        <Text className="text-xl font-semibold">Login</Text>
        <Text className="text-xs pt-2 pb-4">
          Enter your emails and password
        </Text>
      </View>
      <View className="pl-5 pr-5 flex-1 ">
        <View className="flex-auto ">
          <Input
            error={errors.email}
            values={email}
            onForcus={() => {
              handleErrors(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
            label="Email"
            placeholder="admin@gmail.com"
          />
          <Input
            error={errors.password}
            values={password}
            onForcus={() => {
              handleErrors(null, "password");
            }}
            onChangeText={(text) => handleOnChange(text, "password")}
            label="Password"
            placeholder="******"
          />
          <TouchableOpacity
            className="absolute right-2 bottom-9 "
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}
          >
            {getPasswordVisible ? (
              <Entypo name="eye" size={20} color="black" />
            ) : (
              <Entypo name="eye-with-line" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text className="ml-auto ">Forgot password?</Text>
      </View>
      <View className="pl-5 pr-5 flex-1">
        <Button
         onPress={validate}
          buttonStyle={[styles.btn, { marginTop: 20 }]}
          textStyle={styles.textbtn}
          title="login"
        />
        <View className="flex-row items-center justify-center">
          <Text className=" mt-4">Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
            className=" items-center justify-center mt-4"
          >
            <Text style={styles.text}>Singup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#53B175",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 8,
  },
  textbtn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    color: "#53B175",
  },
});
