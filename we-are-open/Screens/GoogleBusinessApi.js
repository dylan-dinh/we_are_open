import React, { Component } from 'react';
import { View, Text , StyleSheet, Image} from 'react-native'
import firebase from 'firebase'
import { Card, Button, Icon } from 'react-native-elements';

export default class GoogleBusinessApi extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> THIS WILL BE THE GOOGLE API SCREEN</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f2d30',
        flex: 1
    },
    color: {
        backgroundColor: '#2f2d30'
    },
 
 
    input: {
       margin: 8,
       height: 40,
       borderColor: 'rgba(92, 99,216, 1)',
       borderWidth: 2,
       borderRadius: 5
 
    },
 
    input_paswd: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
 
    submitButton: {
       padding: 1,
       margin: 15,
       height: 40
    },
    submitButtonText:{
       color: 'white'
    }
 })
 