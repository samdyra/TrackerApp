import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from "expo-location";
import "../_mockLocation";
const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h2>Create a track</Text>
        <Map></Map>
        {err ? <Text>Please enable location services</Text> : null}
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
