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
      isAuthorize: null,
      accessToken: "",
      jsonRevokeAccess2: "",
      errorDisconnect: ""
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

  disconnectGoogleAccount = () => {
    const urlDisconnectGoogleAccount = "https://accounts.google.com/Logout";
    manager
      .makeRequest("google", urlDisconnectGoogleAccount, {
        headers: {
          "Content-Type": this.state.accessToken
        }
      })
      .then(jsonGoogleAccountDisconnected =>
        this.setState({
          jsonGoogleAccountDisconnected2: jsonGoogleAccountDisconnected
        })
      )
      .catch(error => this.setState({ errorDisconnect: error }));
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
  };

  getAccessTokenFromJson = () => {
    this.state.accessToken = this.state.resp2.response.credentials.accessToken;
    console.log(this.state.accessToken);
    alert(this.state.accessToken);
    /*this.state.accessToken = this.setState({
      accesstoken: this.resp.response.credentials.accessToken
    });*/
  };

  authorizeGoogle = () => {
    manager
      .authorize("google", {
        scopes: "profile"
      })
      .then(resp => this.setState({ resp2: resp }))
      .catch(error => this.setState({ error }));
  };

  render() {
    if (this.state.isInitialize === false) {
      this.initializeGoogleManager();
      this.setState({ isInitialize: true });
    }
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={() => this.authorizeGoogle()}
          title="authorize with consent screen"
        />
        <Button
          onPress={() => this.getAccessTokenFromJson()}
          title="get access token"
        />
        <Button
          onPress={() => this.getGoogleAccountId()}
          title="request to get goolge id"
        />
        <Button onPress={() => this.deauthorize()} title="deauthorize" />
        <Button onPress={() => this.revokeAccess()} title="Revoke" />
        <Button
          onPress={() => this.disconnectGoogleAccount()}
          title="disconnect"
        />
        <Text style={styles.welcome}>{JSON.stringify(this.state.resp2)}</Text>

        <Text style={styles.welcome}>
          {JSON.stringify(this.state.jsonRevokeAccess2)}
        </Text>

        <Text style={styles.welcome}>
          {JSON.stringify(this.state.errorDisconnect)}
        </Text>
      </ScrollView>
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
