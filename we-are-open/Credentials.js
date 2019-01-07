import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'

import * as firebase from 'firebase'

const config_ = {
   apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
   authDomain:'we-are-open-91c93.firebaseapp.com',
   databaseURL:'https://we-are-open-91c93.firebaseio.com',
   storageBucket:'gs://we-are-open-91c93.appspot.com'
}
let openingApp = true
export default class Credentials extends React.Component {
   constructor(props) {
      super(props)
      this.state = {isConnected: false}
      this.context = this
   }

   
 initFirebase = (config_) => {
      this.config_ = config_
      firebase.initializeApp({
         apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
         authDomain:'we-are-open-91c93.firebaseapp.com',
         databaseURL:'https://we-are-open-91c93.firebaseio.com',
         storageBucket:'gs://we-are-open-91c93.appspot.com'
      })
   }

   handleFirebaseCredentials = () => {
         this.initFirebase(config_)
   }

   isUserConnected = (context) => {
      firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
            alert("user connected\n" + user.email)
            context.setState({isConnected: true})
         }
         else {
            alert("no one is connected")    
            context.setState({isConnected: false})            
         }
      });

   }

   render() {
      if (openingApp === true) {
         this.initFirebase(config_)
         this.isUserConnected(this)
         openingApp = false
      }

      if (this.state.isConnected) {
         return (
            this.props.navigation.navigate("Welcome")
         )
      }
      else
         return (
            this.props.navigation.navigate("Login")
         
         )
   }
}