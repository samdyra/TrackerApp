import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        Sign Up for tracker
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

      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}

      <Button
        title="Sign Up"
        onPress={() => {
          signup({ email, password });
        }}
        containerStyle={{ marginHorizontal: 15 }}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  heading: { marginLeft: 15 },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 400,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SignupScreen;
