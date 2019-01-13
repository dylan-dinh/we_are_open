import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import firebase from "firebase";
import * as ReactNavigation from "react-native-elements";
import AddNewApi from "../AddNewApi";

var uid;
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.context = this;
  }

  static navigationOptions = ({ navigation }) => {
    if (currentUser2 != null) {
      name = currentUser2.displayName;
      uid = currentUser2;
    }
    return {
      title: navigation.getParam("otherParam", "Welcome " + uid)
    };
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        alert("sign out");
      })
      .catch(function(error) {
        alert("lol");
      });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <AddNewApi
          buttonStyles={styles.input}
          cardTitle={"Google Business API"}
          titleStyle={{ color: "pink" }}
          image={require("../assets/G_logo.png")}
          content={
            "Here you can post new event through our app or changing info"
          }
          buttonTitle={"View Google Business API"}
          onPress={() => this.props.navigation.navigate("GoogleBusinessApi")}
        />

        <AddNewApi
          buttonStyles={styles.input}
          cardTitle={"New card"}
          titleStyle={{ color: "pink" }}
          image={require("../assets/Facebook-icon.png")}
          content={"Custom text"}
          buttonTitle={"View new API"}
          onPress={() => this.props.navigation.navigate("GoogleBusinessApi")}
        />

        <ReactNavigation.Button
          title="Disconnect"
          buttonStyle={{
            backgroundColor: "#2f2d30",
            padding: 1,
            margin: 15,
            height: 40,
            borderWidth: 1,
            borderRadius: 5
          }}
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(function() {})
              .catch(function(error) {})
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f2d30",
    flex: 1
  },

  input: {
    backgroundColor: "#2f2d30",
    padding: 1,
    margin: 15,
    height: 40,
    borderWidth: 1,
    borderRadius: 5
  },

  input_paswd: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  }
});

/*<ReactNavigation.Card
  title='THIS IS THE GOOGLE API'
  image={require('../assets/risitaspeur.png')}>
  <Text style={{marginBottom: 10}}>
    Here you can post new event through our app or changing info
  </Text>
  <ReactNavigation.Button
    backgroundColor='#03A9F4'
    onPress= { () => this.props.navigation.navigate('GoogleBusinessApi')}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW GOOGLE API NOW' />
</ReactNavigation.Card> */
