import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import OAuthManager from "react-native-oauth";

export default class GoogleBusinessApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: currentUserAccessToken,
      accessToken: "",
      jsonGoogleAccountResp: "",
      accountId: "aya",
      accountIdLocationId: "",
      firstRetrieve: true,
      test: "",
      error2: "",
      error3: "",
      error4: "",
      urlLocation: "",
      jsonPostEventRequest: "",
      accountId2: ""
    };
  }

  RequestAccountId = () => {
    const urlGoogleAccount = "https://mybusiness.googleapis.com/v4/accounts";
    manager
      .makeRequest("google", urlGoogleAccount)
      .then(jsonGoogleAccount => this.getAccountIdFromJson(jsonGoogleAccount))
      .catch(error => this.setState({ error2: error }));
  };

  RequestLocationId = () => {
    var httpsUrl = "https://mybusiness.googleapis.com/v4/";
    var accountId = this.state.accountId;
    var temp = httpsUrl + accountId; //httpsUrl.concat(this.state.accountId);
    const urlGoogleLocation = temp + "/locations";

    manager
      .makeRequest("google", urlGoogleLocation)
      .then(jsonGoogleLocation =>
        this.getAccountIdLocationIdFromJson(jsonGoogleLocation)
      )
      .catch(error => this.setState({ error3: error }));
  };

  postEvent = () => {
    const urlPostEvent =
      "https://mybusiness.googleapis.com/v4/" +
      this.state.accountIdLocationId +
      "/localPosts";
    this.state.urlLocation = urlPostEvent;

    manager
      .makeRequest("google", urlPostEvent, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        params: {
          languageCode: "en-US",
          summary: "Come in for our spooky Halloween event!",
          event: {
            title: "Halloween Spook-tacular!",
            schedule: {
              startDate: {
                year: 2017,
                month: 10,
                day: 31
              },
              startTime: {
                hours: 9,
                minutes: 0,
                seconds: 0,
                nanos: 0
              },
              endDate: {
                year: 2017,
                month: 10,
                day: 31
              },
              endTime: {
                hours: 17,
                minutes: 0,
                seconds: 0,
                nanos: 0
              }
            }
          },
          media: [
            {
              mediaFormat: "PHOTO",
              sourceUrl: "https://www.google.com/real-image.jpg"
            }
          ]
        }
      })
      .then(jsonPostEvent =>
        this.setState({ jsonPostEventRequest: jsonPostEvent })
      )
      .catch(error => this.setState({ error4: error }));
  };

  getAccessTokenFromJson = () => {
    this.state.accessToken = this.state.resp.response.credentials.accessToken;
    //currentUserAccessToken.response.credentials.accessToken;
    //alert(this.state.accessToken);
  };

  getAccountIdFromJson = json => {
    this.setState({ accountId: json.data.accounts[0].name }); //this.state.accountId = json.data.accounts[0].name; //this.state.jsonGoogleAccountResp.data.accounts[0].name;
    //alert(this.state.accountId);
  };

  getAccountIdLocationIdFromJson = json => {
    this.setState({ accountIdLocationId: json.data.locations[0].name }); //this.state.accountIdLocationId = json.data.locations[0].name;
    //alert(this.state.accountIdLocationId);
  };

  render() {
    if (this.state.firstRetrieve === true) {
      this.getAccessTokenFromJson();
      this.RequestAccountId();
      this.setState({ firstRetrieve: false });
    }
    if (this.state.accountId != null) {
      this.RequestLocationId();
      this.state.accountId2 = this.state.accountId;
      this.setState({ accountId: null });
    }
    /*if (this.state.accountIdLocationId != null) {
    this.postEvent();
  }*/

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Here you can post an event or delete it
        </Text>

        <Button
          raised
          buttonStyle={{
            backgroundColor: "#2f2d30",
            padding: 1,
            margin: 15,
            height: 40,
            borderWidth: 1,
            borderRadius: 5
          }}
          onPress={() => this.postEvent()}
          title="Post it !"
        />
        <Text style={styles.welcome}>{this.state.accountIdLocationId}</Text>
        <Text style={styles.welcome}>{this.state.accountId2}</Text>
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

/* name: "Concert samedi soir !",
            languageCode: "fr-FR",
            summary: "concert de Creedence samedi soir",
            callToAction: */
