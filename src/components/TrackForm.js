import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.container}>
      <Input value={name} placeholder="Enter name" onChangeText={changeName}></Input>

      {recording ? <Button title="Stop" onPress={stopRecording}></Button> : <Button title="Start" onPress={startRecording}></Button>}

      {!recording && locations.length ? <Button title="Save Recording" containerStyle={{ marginTop: 15 }} onPress={saveTrack}></Button> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});

export default TrackForm;
