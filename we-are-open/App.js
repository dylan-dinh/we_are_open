import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import ScreenStack from "./Navigation/navigator";
import NavigatorService from "./Navigation/NavigatorService";
import { ThemeProvider } from "react-native-elements";
import * as firebase from "firebase";
import FirebaseCredentials from "./Credentials/FirebaseCredentials";

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: "pink"
    }
  }
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <ScreenStack
            ref={navigatorRef => {
              NavigatorService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
