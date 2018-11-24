import React, { Component } from 'react';
import { View, Text , Button, StyleSheet} from 'react-native';

export default  class Welcome extends Component {
  render() {

    signOut = () => {
        firebase.auth().signOut().then(function() {

        }).catch(function(error) {
            
        });
    }

    return (
    <View> 
            <Text> WELCOME </Text>
        
    </View>
    )
  }
}

const styles = StyleSheet.create({
    bottomLeft: {
        width: 100,
        height: 100,
        backgroundColor:'red'
    },
 });


 /*<Button  style = {styles.bottomLeft} onPress = {  
    () => firebase.auth().signOut().then(function() {

    }).catch(function(error) {
        
    }) } title="Disconnect"/>*/