import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> MDR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomLeft: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },

  bottomMid: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },

  bottomRight: {
    width: 100,
    height: 100,
    backgroundColor: "green"
  }
});
