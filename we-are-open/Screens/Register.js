import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import firebase from "@firebase/app";
import "@firebase/auth";

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    uid: "",
    email: "",
    password: "",
    name: "",
    company_name: "",
    accountCreated_: false
  };

  componentDidMount() {}

  handleEmail = text => {
    this.setState({ email: text });
    //alert(this.state.email)
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  handleName = text => {
    this.setState({ name: text });
  };

  handleCompanyName = text => {
    this.setState({ company_name: text });
  };

  writeUserData = userId => {
    let db = firebase.database();
    db.ref("users/" + userId)
      .set({
        email: this.state.email,
        name: this.state.name,
        company_name: this.state.company_name
      })
      .then(data => {
        //success callback
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  };

  isUserConnected = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.state.uid = user.uid;
        this.writeUserData(this.state.uid);
      } else {
      }
    });
  };

  addUser = () => {
    this.firebaseSignUp();
    this.props.navigation.navigate("Login");
    //this.isUserConnected();
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

  // [END authwithem

  firebaseSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //var accountCreated_ =  false;
        // [START_EXCLUDE]

        if (errorCode == "auth/weak-password") {
          //this.props.navigation.navigate("Login");
          alert(errorMessage);
        }
        if (errorCode == "auth/email-already-in-use") {
          //this.props.navigation.navigate("Login");
          alert(errorMessage);
        }
        if (errorCode == "auth/invalid-email") {
          //this.props.navigation.navigate("Login");
          alert(errorMessage);
        } else accountCreated_ = true;

        // [END_EXCLUDE]
      });
    // [END createwithemail]
  };

  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider>
          <TextInput
            style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder={"Email"}
            placeholderTextColor={"pink"}
            autoCapitalize={"none"}
            onChangeText={this.handleEmail}
            keyboardType={"email-address"}
            //color={'pink'}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
            placeholder={"Password"}
            placeholderTextColor={"pink"}
            autoCapitalize={"none"}
            onChangeText={this.handlePassword}
            //color={'pink'}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder={"Your name"}
            placeholderTextColor={"pink"}
            autoCapitalize={"none"}
            onChangeText={this.handleName}
            keyboardType={"default"}
            //color={'pink'}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder={"Your company name"}
            placeholderTextColor={"pink"}
            autoCapitalize={"none"}
            onChangeText={this.handleCompanyName}
            keyboardType={"default"}
            //color={'pink'}
          />

          <Button
            style={styles.submitButton}
            raised
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              padding: 1,
              margin: 15,
              height: 40,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            title="Register"
            onPress={() => this.addUser()}
          />
        </ThemeProvider>
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
    margin: 8,
    height: 40,
    borderColor: "rgba(92, 99,216, 1)",
    borderWidth: 2,
    borderRadius: 5,
    color: "pink"
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
