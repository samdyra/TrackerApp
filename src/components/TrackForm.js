import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <View style={styles.container}>
      <Input
        value={name}
        placeholder="Enter name"
        onChangeText={changeName}
      ></Input>

      {recording ? (
        <Button title="Stop" onPress={stopRecording}></Button>
      ) : (
        <Button title="Start" onPress={startRecording}></Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
});

export default TrackForm;
