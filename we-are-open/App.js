import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import PresentationalComponent from './PresentatioonalComponent/PresentationalComponent'
import Register from './Screens/Register'
import Home from './Screens/Home'
import firebase from "firebase"
import Settings from './Screens/Settings'
import Welcome from './Screens/Welcome'

let config_ = {
   apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
   authDomain:'we-are-open-91c93.firebaseapp.com',
   databaseURL:'https://we-are-open-91c93.firebaseio.com',
   storageBucket:'gs://we-are-open-91c93.appspot.com'
}

let openingApp = true
let toRender = false
let isItConnected = true

const HomeView = StackNavigator({
   HomeScreen: { screen: Home },
 });

 const RegisterView = StackNavigator({
   RegisterScreen: {screen: Register}
 });

 const WelcomeView = StackNavigator({
   WelcomeScreen: {screen: Welcome}
 });

export default class App extends React.Component {
   state = {
      myState: 'Credentials Firebase done'
   }
   
   initFirebase = (config_) => {
      this.config_ = config_
      firebase.initializeApp(config_)
   }

   handleFirebaseCredentials = () => {
         this.initFirebase(config_)
   }

   handleUser = () => {
      firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
            isItConnected = true
            alert("lol")
         }
         else {
            isItConnected = false
            alert("no one connected")           
         }
      });
   }

   render() {
      if (openingApp === true) {
         this.handleFirebaseCredentials()
         this.handleUser()
         alert(isItConnected)
         openingApp = false
      }

      if (toRender == false) {
         if (isItConnected == true) {
            toRender = true
      }
         else {
            toRender = false
         }  // <PrestationalComponent myState = {this.state.myState} openingApp = {this.state.openingApp} updateState = {this.updateState}/>
      }

      if (toRender == true)
         {
            return <WelcomeView/>
         }
      else { 
         return <Register/>
      }
      
   }
}

const styles = StyleSheet.create({
	container: {
	   backgroundColor: 'blue',
	},
 });