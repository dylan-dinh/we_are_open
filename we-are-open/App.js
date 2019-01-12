import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'

import ScreenStack from './Navigation/navigator'
import NavigatorService from './Navigation/NavigatorService'
import { ThemeProvider } from 'react-native-elements'
import * as firebase from "firebase"
import FirebaseCredentials from './Credentials/FirebaseCredentials';



const theme = {
   Button: {
       raised: true,
       titleStyle: {
         color: 'pink'
     },
   },
 };

export default class App extends React.Component {

   initFirebase = () => {
      firebase.initializeApp({
         apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
         authDomain:'we-are-open-91c93.firebaseapp.com',
         databaseURL:'https://we-are-open-91c93.firebaseio.com',
         storageBucket:'gs://we-are-open-91c93.appspot.com'
      })
   }

   render() {
      if (openingApp) {
         this.initFirebase()
         alert("in inint firebase")
         openingApp = false
      }
      return (
         <View style = {styles.container}>
         <ThemeProvider theme = {theme}>
            <ScreenStack ref = { navigatorRef => {
              NavigatorService.setTopLevelNavigator(navigatorRef);
            } } />
         </ThemeProvider>
         </View>
      )
   }


      /*

      if (this.isUserConnected() === true)
         if (isItConnected == true) {
            return (
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text>Home Screen</Text>
                 <Button
                   title="Go to WelcomeScreen"
                   onPress={() => this.props.navigation.navigate('Welcome')}
                 />
               </View>
             );
      }
         if (this.isUserConnected === false) {
            return (
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text>Home Screen</Text>
                 <Button
                   title="Go to RegisterScreen"
                   onPress={() => this.props.navigation.navigate('Register')}
                 />
               </View>
             );
         }   // <PrestationalComponent myState = {this.state.myState} openingApp = {this.state.openingApp} updateState = {this.updateState}/>
      
      */
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
 });