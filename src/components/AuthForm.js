import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Text h3 style={styles.heading}>
        {headerText}
      </Text>
      <Input
        label="Email"
        containerStyle={{ marginTop: 20, paddingHorizontal: 15 }}
        vaule={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        containerStyle={{ marginTop: 5, paddingHorizontal: 15 }}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Button
        title={submitButtonText}
        onPress={() => {
          onSubmit({ email, password });
        }}
        containerStyle={{ marginHorizontal: 15 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    // marginTop: 15,
  },
  heading: {
    margin: 15,
  },
});

export default AuthForm;
