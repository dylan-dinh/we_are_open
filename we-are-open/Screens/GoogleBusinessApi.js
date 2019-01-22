import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";
import OAuthManager from "react-native-oauth";

const manager = new OAuthManager("weareopen");
manager.configure({
  google: {
    callback_url:
      "com.googleusercontent.apps.458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf:/google",
    client_id:
      "458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf.apps.googleusercontent.com",
    client_secret: "Qh9TIlGp6X7AQOt4zS6a5m-H"
  }
});

export default class GoogleBusinessApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      resp: ""
    };
  }

  /*initManagerOauth = () => {
    const manager = new OAuthManager("weareopen");
    manager.configure({
      google: {
        callback_url:
          "com.googleusercontent.apps.458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf:/google",
        client_id:
          "458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf.apps.googleusercontent.com",
        client_secret: "Qh9TIlGp6X7AQOt4zS6a5m-H"
      }
    });
  };*/

  componentDidMount() {
    //this.initManagerOauth();
    manager
      .authorize("google", { scopes: {} })
      .then(resp => this.setState({ resp }))
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
