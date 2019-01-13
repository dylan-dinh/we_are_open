import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company_name: ""
    };
  }
  render() {
    handleName = text => {
      this.setState({ name: text });
    };

    handleCompanyName = text => {
      this.setState({ company_name: text });
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="rgba(92, 99,216, 1)"
          autoCapitalize="none"
          onChangeText={this.handleName}
          keyboardType="email-address"
          color="white"
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="rgba(92, 99,216, 1)"
          autoCapitalize="none"
          onChangeText={this.handleCompanyName}
          color="white"
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
          color="#2f2d30"
          title="Save !"
          onPress={() =>
            this.toggleSignIn(this.state.email, this.state.password)
          }
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
  },
  submitButtonText: {
    color: "white"
  }
});
