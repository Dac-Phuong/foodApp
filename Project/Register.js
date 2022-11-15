import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import Input from "./Components/Textinput";
import Button from "./Components/button";
const Register = ({ ...props }) => {
  const [errors, setErrors] = React.useState({});
  const [inputs, setInpust] = React.useState({
    username: "",
    phone: "",
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
    if (!inputs.username) {
      handleErrors("please input username", "username");
    }
    if (!inputs.phone) {
      handleErrors("please input phone", "phone");
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
  return (
    <KeyboardAvoidingView
      className="flex-1 "
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <ScrollView className="flex-1 ">
        <View className="items-center justify-center h-44">
          <Image source={require("./accsets/images/baner.png")} />
        </View>
        <View className="pl-5 pr-5 flex-1">
          <Text className="text-xl font-semibold">Sign up</Text>
          <Text className="text-xs pt-2 pb-4 ">
            Enter your emails and password
          </Text>
          <View className="flex-1 ">
            <Input
              onChangeText={(text) => handleOnChange(text, "username")}
              error={errors.username}
              label="UserName"
              placeholder="admin"
              onForcus={() => {
                handleErrors(null, "username");
              }}
            />
            <Input
              error={errors.email}
              onForcus={() => {
                handleErrors(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
              label="Email"
              placeholder="admin@gmail.com"
            />
            <Input
              error={errors.password}
              onForcus={() => {
                handleErrors(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
              label="Password"
              placeholder="******"
            />
            <Input
              label="ConfirmPassword"
              placeholder="******"
              error={errors.password}
              onForcus={() => {
                handleErrors(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
            />
          </View>
          <View className=" mt-3">
            <View className="flex-row">
              <Text style={{ fontfamily: "Gilroy-ExtraBold", fontSize: 14,color:'#7C7C7C' }}>By contining you agree to our  </Text>
              <TouchableOpacity>
                <Text style={styles.text}>Terms of Service </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <Text  style={{ fontfamily: "Gilroy-ExtraBold", fontSize: 14,color:'#7C7C7C' }}>and  </Text>
              <TouchableOpacity>
                <Text style={styles.text}>Terms of Sevice </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="pl-5 pr-5 flex-1">
          <Button
            onPress={validate}
            buttonStyle={[styles.btn, { marginTop: 20 }]}
            textStyle={styles.textbtn}
            title="login"
          />
          <View className="items-center justify-center flex-row mt-3">
            <Text>Already have an account? </Text>
            <TouchableOpacity className="">
              <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Register;
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
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    color: "#53B175",
    fontSize: 14,
    fontfamily: "Gilroy-ExtraBold"
  },
});
