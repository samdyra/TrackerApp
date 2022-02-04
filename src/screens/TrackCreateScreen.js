import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);
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

export default withNavigationFocus(TrackCreateScreen);
