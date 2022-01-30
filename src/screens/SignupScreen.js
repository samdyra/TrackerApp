import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      ></AuthForm>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.link}>
          Already have an account? Sign in instead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 350,
  },
  link: {
    color: "blue",
    margin: 15,
  },
});

export default SignupScreen;
