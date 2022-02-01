import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <Button
          title="Sign Out"
          onPress={signout}
          containerStyle={{ marginVertical: 75, marginHorizontal: 15 }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signoutButton: {
    margin: 200,
  },
});

export default AccountScreen;
