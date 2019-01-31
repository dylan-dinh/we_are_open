import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import OAuthManager from "react-native-oauth";

// stock response of authorize google and facebook somewhere (db maybe?) so that access Token can be retrieve at all time

export default class FacebookApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInitialize: false,
      error1: "",
      resp2: "",
      resp3: "",
      idFacebookUSer: "",
      accessToken: "",
      jsonFromAuthorizeFacebook: "",
      jsonInfoUser: ""
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
      .then(resp => this.getAccessToken(resp))
      .catch(error => this.setState({ error }));
  };

  getAccessToken = json => {
    this.setState({ jsonFromAuthorizeFacebook: json });
    this.setState({ accessToken: json.response.credentials.accessToken });
  };

  requestJsonFacebookUser = () => {
    manager
      .makeRequest("facebook", "/me")
      .then(resp => {
        this.getIdFacebookUser(resp);
      })
      .catch(error => this.setState({ error1: error }));
  };

  getIdFacebookUser = json => {
    this.setState({ idFacebookUSer: json.data.id });
  };

  fetchFacebookUserInfo = () => {
    const url =
      "https://graph.facebook.com/" +
      this.state.idFacebookUSer +
      "?fields=birthday,email,hometown&access_token=" +
      this.state.accessToken;
    manager
      .makeRequest("facebook", "me", {
        headers: { "Content-Type": "application/java" },
        params: { email: "mon_ukeczbi_bougy@tfbnw.net" }
      })
      .then(resp => this.setState({ jsonInfoUser: resp }));
  };

  render() {
    if (this.state.isInitialize === false) {
      this.initializeFacebookManager();
      this.setState({ isInitialize: true });
    }

    return (
      <ScrollView style={styles.container}>
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
          onPress={() => this.fetchFacebookUserInfo()}
          title="Connect to your Facebook Account"
        />

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
          onPress={() => this.requestJsonFacebookUser()}
          title="Get id from Facebook user"
        />
        <Text style={styles.welcome}>
          {JSON.stringify(this.state.jsonInfoUser)}
        </Text>
        <Text style={styles.welcome}>{this.state.idFacebookUSer}</Text>
        <Text style={styles.welcome}>{this.state.accessToken}</Text>
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
