import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for tracker</Text>
      <Input label="Email" />
      <Input label="Password" />

      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;
