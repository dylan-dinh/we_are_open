import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import * as ReactNavigation from "react-native-elements";

export default class AddNewApi extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    titleStyle: PropTypes.object.isRequired,
    onPress: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
    cardTitle: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({})
    ]).isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    const {
      cardTitle,
      content,
      onPress,
      buttonTitle,
      image,
      titleStyle
    } = this.props;
    return (
      <View>
        <ReactNavigation.Card
          containerStyle={{
            backgroundColor: "#2f2d30",
            borderColor: "black"
          }}
          title={cardTitle}
          titleStyle={titleStyle}
          image={image}
          style={styles.container}
        >
          <Text style={{ marginBottom: 10, color: "pink" }}>{content}</Text>

          <ReactNavigation.Button
            title={buttonTitle}
            onPress={onPress}
            buttonStyle={styles.input}
          />
        </ReactNavigation.Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f2d30",
    flex: 1
  },
  color: {
    backgroundColor: "#2f2d30"
  },

  input: {
    backgroundColor: "rgba(92, 99,216, 1)",
    padding: 1,
    margin: 15,
    height: 40,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },

  input_paswd: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },

  submitButton: {
    padding: 1,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
