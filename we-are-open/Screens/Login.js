import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  ThemeProvider
} from "react-native-elements";
import firebase from "@firebase/app";
import "@firebase/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.context = this;
    this.state = {
      email: "",
      password: "",
      goodLength: false,
      accountCreated: false
    };
    this.isUserConnected();
  }

  /*static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            headerStyle: {
                backgroundColor: '#2f2d30',
              },
              headerTintColor: 'rgba(92, 99,216, 1)',
        };
      };*/

  isUserConnected = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Welcome");
        //currentUser2 = user.uid;
        this.setState({ isConnected: true });
      } else {
        alert("no one is connected");
        this.setState({ isConnected: false });
      }
    });
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  toggleSignIn = (email_, password_) => {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      this.setState({ email: email_ });
      this.setState({ password: password_ });

      //email_ = this.state.email
      //password_ = this.state.password
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email_, password_)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert(errorMessage);
        }
        if (errorCode === "auth/user-not-found") {
          alert(errorMessage);
        }
        if (errorCode === "auth/user-disabled") {
          alert(errorMessage);
        }
        if (errorCode === "auth/invalid-email") {
          alert(errorMessage);
        } else {
          //alert("gg")
        }

        // [END_EXCLUDE]
      });
  };
  //icon={{name: 'https'}}
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid={"transparent"}
          placeholder={"Email"}
          placeholderTextColor={"pink"}
          autoCapitalize={"none"}
          onChangeText={this.handleEmail}
          keyboardType={"email-address"}
          //color = {'pink'}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
          placeholder={"Password"}
          placeholderTextColor={"pink"}
          autoCapitalize={"none"}
          onChangeText={this.handlePassword}
        />
        <Button
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
          title="Log in"
          onPress={() =>
            this.toggleSignIn(this.state.email, this.state.password)
          }
        />

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
          onPress={() => this.props.navigation.navigate("Register")}
          title="Not register yet ?"
        />
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
    color: "pink",
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
  }
});
