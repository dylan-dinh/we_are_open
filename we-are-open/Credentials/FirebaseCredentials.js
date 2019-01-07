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
//var db = firebase.database()
export default class FirebaseCredentials extends React.Component {

    initFirebase = (config_) => {
        this.config_ = config_
        firebase.initializeApp(config_)
     }
  
     handleFirebaseCredentials = () => {
      alert("in firebase credentials")         

           this.initFirebase(config_)
     }

     render() {
        if (openingApp === true) {
            this.handleFirebaseCredentials()
            openingApp = false

         }
        return (
          <View >
            </View>

        )
     }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#2f2d30',
       flex: 1
   }
})
