import React, { useContext, useCallback } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h2>Create a track</Text>
        <Map></Map>
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm></TrackForm>
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
