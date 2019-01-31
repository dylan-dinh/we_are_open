import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import OAuthManager from "react-native-oauth";

export default class FacebookApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInitialize: false,
      error: null,
      resp: ""
    };
  }

  initializeFacebookManager = () => {
    manager = new OAuthManager("weareopen");
    manager.configure({
      facebook: {
        client_id: "534454080388101",
        client_secret: "6b30d57b3fe018364254dc208e22d6f1"
      }
    });
  };

  authorizeFacebook = () => {
    manager
      .authorize("facebook", {})
      .then(resp => this.setState({ resp }))
      .catch(error => this.setState({ error }));
  };

  render() {
    if (this.state.isInitialize === false) {
      this.initializeFacebookManager();
      this.setState({ isInitialize: true });
    }

    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            padding: 1,
            margin: 15,
            height: 40,
            borderWidth: 1,
            borderRadius: 5
          }}
          onPress={() => this.authorizeFacebook()}
          title="Connect to your Facebook Account"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f2d30"
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
