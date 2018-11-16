import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import PresentationalComponent from './PresentationalComponent'
import firebase from "firebase"

var config_ = {
   apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
   authDomain:'we-are-open-91c93.firebaseapp.com',
   databaseURL:'https://we-are-open-91c93.firebaseio.com',
   storageBucket:'gs://we-are-open-91c93.appspot.com'
}

function initFirebase(config_) {
   this.config_ = config_
   firebase.initializeApp(config_)
}

export default class App extends React.Component {
   state = {
      openingApp: true,
      myState: 'Credentials Firebase done',
      toRender: false
   }
   updateState = () => {
      this.setState({ myState: 'fils de flute'})
      //console.log(this.setState.openingApp)
   }

   handleFirebaseCredentials = () => {
         initFirebase(config_)
         this.setState({ openingApp: false})
   }

   render() {
      if (this.state.openingApp == true) {
         this.handleFirebaseCredentials()
         //console.log("DOING ONCE CREDENTIALS SHIT")
      }

      if (this.state.toRender == false) {  
         return (
            <View >
               <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
            </View>
         );
      }
   }

   
}

const styles = StyleSheet.create({
	container: {
	   flex: 1,
	   backgroundColor: 'white',
	   alignItems: 'center',
	   textAlignVertical:'center',
	   textShadowColor:'blue',
	},
 });