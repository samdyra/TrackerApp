import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Screen</Text>
      <Button
        title="Go to track detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      ></Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
