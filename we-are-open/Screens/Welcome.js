import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native'
import firebase from 'firebase'
import * as ReactNavigation from 'react-native-elements';
import AddNewApi from '../AddNewApi'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.context = this
    }


    signOut = () => {
        firebase.auth().signOut().then(function() {
           alert("sign out")
        }).catch(function(error) {
           alert("lol")
            
        });
    }

    render() {   
        return (
            <View style = {styles.container}>

<ReactNavigation.Card
  title='THIS IS THE GOOGLE API'
  image={require('../assets/risitaspeur.png')}>
  <Text style={{marginBottom: 10}}>
    Here you can post new event through our app or changing info
  </Text>
  <ReactNavigation.Button
    backgroundColor='#03A9F4'
    onPress= { () => this.props.navigation.navigate('GoogleBusinessApi')}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW GOOGLE API NOW' />
</ReactNavigation.Card>


<AddNewApi
        buttonStyles = {styles.input}
        content = {'Custom text'}
        image = {require('../assets/risitaspeur.png')}
        cardTitle = {'New card'}
        buttonTitle = {'View new api'}
        onPress = {() => this.props.navigation.navigate('GoogleBusinessApi')}
    />

<ReactNavigation.Button title="Disconnect"
    buttonStyle={{
                    backgroundColor: "#2f2d30",
                    padding: 1,
                    margin: 15,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5
                    }}

    onPress = {  
        () => firebase.auth().signOut().then(function() {
    }).catch(function(error) {
        }) } 
    />   
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
        backgroundColor: "#2f2d30",
        padding: 1,
        margin: 15,
        height: 40,
        borderWidth: 1,
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