import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'


/*let config_ = {
    apiKey:'AIzaSyDCxwGauLbRosZvlmeCKyPgIe3DiLkCgGQ',
    authDomain:'we-are-open-91c93.firebaseapp.com',
    databaseURL:'https://we-are-open-91c93.firebaseio.com',
    storageBucket:'gs://we-are-open-91c93.appspot.com'  
}*/


const FirebaseInit = (props) => {
    return (
        <View>
            <Text onPress = {props.updateState} style = {styles.confFirebase}>
                {props.myState}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create ({
    confFirebase: {
       marginTop: 20,
       textAlign: 'center',
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 20
    }
 })

 export default FirebaseInit


