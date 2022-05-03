import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  // console.log(state);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Lists</Text>
      <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 40,
    marginRight: 20,
  },
  title: {
    marginBottom: 20,
    fontFamily: "sans-serif",
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 5,
  },
});

export default TrackListScreen;
