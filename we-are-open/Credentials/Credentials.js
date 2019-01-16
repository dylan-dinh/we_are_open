import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import * as firebase from "firebase";

const config_ = {
  apiKey: "AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ",
  authDomain: "we-are-open-91c93.firebaseapp.com",
  databaseURL: "https://we-are-open-91c93.firebaseio.com",
  storageBucket: "gs://we-are-open-91c93.appspot.com"
};

export default class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isConnected: false };
    this.initFirebase(config_);
    this.isUserConnected();
    currentUser2 = firebase.auth().currentUser;
  }

  componentDidMount() {
    if (this.state.isConnected) {
      return this.props.navigation.navigate("Welcome");
    } else return this.props.navigation.navigate("Login");
  }

  initFirebase = config_ => {
    this.config_ = config_;
    firebase.initializeApp({
      apiKey: "AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ",
      authDomain: "we-are-open-91c93.firebaseapp.com",
      databaseURL: "https://we-are-open-91c93.firebaseio.com",
      storageBucket: "gs://we-are-open-91c93.appspot.com"
    });
  };

  handleFirebaseCredentials = () => {
    this.initFirebase(config_);
  };

  isUserConnected = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        alert("user connected\n" + user.uid);
        currentUser2 = user.uid;
        this.setState({ isConnected: true });
      } else {
        alert("no one is connected");
        this.setState({ isConnected: false });
      }
    });
  };

  render() {
    /* if (this.state.isConnected) {
      return this.props.navigation.navigate("Welcome");
    } else return this.props.navigation.navigate("Login");*/
    return null;
  }
}
