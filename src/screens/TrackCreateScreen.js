import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h2>Create a track</Text>
        <Map></Map>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
});

export default TrackCreateScreen;
