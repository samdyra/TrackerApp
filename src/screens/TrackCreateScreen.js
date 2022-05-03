import React, { useContext, useCallback } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

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
        <Map style={styles.map}></Map>
        {err ? <Text>Please enable location services</Text> : null}
        <Text style={styles.title}>Create Track</Text>
        <TrackForm></TrackForm>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginLeft: 18,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 20,
  },
  map: {
    // height: 50,
  },
});

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={18}></FontAwesome>,
};

export default withNavigationFocus(TrackCreateScreen);
