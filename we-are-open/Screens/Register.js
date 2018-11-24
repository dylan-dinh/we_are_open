import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import firebase from "firebase"
import Welcome from './Welcome'


export default class Register extends Component {
    state = {
        email: '',
        password: '',
        goodLength: false,
        accountCreated: false
    }

    handleEmail = (text) => {
        this.setState({ email: text })
     }

     handlePassword = (text) => {
        this.setState({ password: text })
     }

     signUp = (email, pass, accountCreated_) => {
        this.firebaseSignUp(email, pass, accountCreated_)

     }

     signOut = () => {
      firebase.auth().signOut().then(function() {
         alert("sign out")
      }).catch(function(error) {
         alert("lol")
          
      });
  }

     toggleSignIn = (email_, password_,) => {
      if (firebase.auth().currentUser) {
         // [START signout]
         firebase.auth().signOut();
         // [END signout]
       }
       else {
            email_ = this.state.email
            password_ = this.state.password
       }
        
        firebase.auth().signInWithEmailAndPassword(email_, password_).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert(errorMessage)
            }
            if (errorCode === 'auth/user-not-found') {
                alert(errorMessage)
            }
            if (errorCode === 'auth/user-disabled') {
                alert(errorMessage)
            }
            if (errorCode === 'auth/invalid-email') {
                alert(errorMessage)
            } 
            else {
              alert("gg")
            }
            console.log(error);
        
            // [END_EXCLUDE]
        });
    }
        
            // [END authwithem

     firebaseSignUp = (email_, password_, accountCreated_) => {
        firebase.auth().createUserWithEmailAndPassword(email_, password_).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // [START_EXCLUDE]
            if (accountCreated_ == false) {
                accountCreated_ = true
                if  (errorCode == 'auth/weak-password') {
                    accountCreated_ = false
                    alert(errorMessage)            
                }
                if (errorCode == 'auth/email-already-in-use') {
                    accountCreated_ = false
                    alert(errorMessage)
                }
                if (errorCode == 'auth/invalid-email') {
                    accountCreated_ = false
                    alert(errorMessage)
                }
                else
                    accountCreated_ = true
            }
            else  {
                alert("accout created")
            }

            
            // [END_EXCLUDE]
          });
          // [END createwithemail]
        }    
     
        render() {
         return (
           <View style = {styles.container}>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}
                 keyboardType = "email-address"/>

                 
              
              <TextInput style = {styles.input_paswd} secureTextEntry = "true"
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}/>
              
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.signUp(this.state.email, this.state.password, this.state.accountCreated)
                 }>
                 <Text style = {styles.submitButtonText}> REGISTER </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.toggleSignIn(this.state.email, this.state.password)
                 }>
                 <Text style = {styles.submitButtonText}> GET CONNECTED </Text>
              </TouchableOpacity>

              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.signOut()
                 }>
                 <Text style = {styles.submitButtonText}> SIGN OUT </Text>
              </TouchableOpacity>

           </View>
        )
     }
  }

  
  const styles = StyleSheet.create({
     container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },

     input_paswd: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
     },

     submitButton: {
        backgroundColor: 'purple',
        padding: 10,
        margin: 15,
        height: 40
         },
     submitButtonText:{
        color: 'white'
     }
  })