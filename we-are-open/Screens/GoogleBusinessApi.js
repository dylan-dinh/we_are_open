import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import OAuthManager from "react-native-oauth";

export default class GoogleBusinessApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      jsonGoogleAccount: "",
      jsonGoogleAccountDisconnected2: "",
      resp2: "",
      isInitialize: false,
      accessToken: "",
      jsonRevokeAccess2: "",
      isConnectedToGoogle: ""
    };
  }

  initializeGoogleManager = () => {
    manager = new OAuthManager("weareopen");
    manager.configure({
      google: {
        callback_url:
          "com.googleusercontent.apps.458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf:/google",
        client_id:
          "458376293169-1c3ncj2aj14kp48kus7cerchc3balmtf.apps.googleusercontent.com",
        client_secret: "Qh9TIlGp6X7AQOt4zS6a5m-H"
      }
    });
  };

  authorizeGoogle = () => {
    manager
      .authorize("google", {
        scopes: "https://www.googleapis.com/auth/plus.business.manage"
      })
      .then(resp => (currentUserAccessToken = resp)) //this.setState({ resp2: resp }))
      .catch(error => this.setState({ error }));
    this.setState({ isConnectedToGoogle: true });
  };

  getAccessTokenFromJson = () => {
    this.state.accessToken = this.state.resp2.response.credentials.accessToken;
    alert(this.state.accessToken);
  };

  deauthorize = () => {
    manager.deauthorize("google");
    this.setState({ isInitialize: false });
  };

  getGoogleAccountId = () => {
    const urlGoogleAccount = "https://mybusiness.googleapis.com/v4/accounts";
    manager
      .makeRequest("google", urlGoogleAccount)
      .then(jsonGoogleAccount => this.setState({ jsonGoogleAccount }));
    alert("MDR");
  };

  revokeAccess = () => {
    const urlRevokeAccess =
      "https://accounts.google.com/o/oauth2/revoke?token=" +
      this.state.accessToken;
    manager
      .makeRequest("google", urlRevokeAccess)
      .then(jsonRevokeAccess =>
        this.setState({ jsonRevokeAccess2: jsonRevokeAccess })
      );
    this.deauthorize();
    this.setState({ isConnectedToGoogle: false });
  };

  render() {
    if (this.state.isInitialize === false) {
      this.initializeGoogleManager();
      managerOAuth = manager;
      this.setState({ isInitialize: true });
    }
    if (this.state.isConnectedToGoogle === false) {
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.welcome}>
            Here you will connect to your Google Account which is the account
            link to your business in Google My Business
          </Text>

          <Button
            onPress={() => this.authorizeGoogle()}
            title="Click to connect your Google Account"
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              padding: 1,
              margin: 15,
              height: 40,
              borderWidth: 1,
              borderRadius: 5
            }}
          />
        </ScrollView>
      );
    } else {
      //currentUserAccessToken = this.state.resp2;
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.welcome}>
            Here you will connect to your Google Account which is the account
            link to your business in Google My Business
          </Text>

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
            onPress={() =>
              this.props.navigation.navigate("GoogleApiRequestHTTP")
            }
            title="Manage your business now :-)"
          />

          <Button
            onPress={() => this.revokeAccess()}
            title="Disconnect from your Google Account"
            buttonStyle={{
              backgroundColor: "#2f2d30",
              padding: 1,
              margin: 15,
              height: 40,
              borderWidth: 0,
              borderRadius: 5,
              borderColor: "#2f2d30",
              borderBottomColor: "#2f2d30"
            }}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f2d30"
  },
  welcome: {
    fontSize: 20,
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
