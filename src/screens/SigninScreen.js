import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/AuthForm";

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to your account"
        errorMessage=""
        onSubmit=""
        submitButtonText="Sign in"
      ></AuthForm>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 380,
  },
  link: {
    color: "blue",
    margin: 15,
  },
});

export default SigninScreen;
