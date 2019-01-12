import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as firebase from "firebase"
import {Button, ThemeProvider } from 'react-native-elements';

export default class Register extends Component {
    state = {
       user_id: 'firebase.auth().currentUser.uid',
        email: '',
        password: '',
        name: '',
        company_name: '',
        accountCreated: false
    }

    handleEmail = (text) => {
        this.setState({ email: text })
        //alert(this.state.email)
     }

     handleMaBite = () => {
         console.log("MDR")
     }

     handlePassword = (text) => {
        this.setState({ password: text })
      }

     handleName = (text) => {
         this.setState({ name: text })
      }

      handleCompanyName = (text) => {
         this.setState({company_name: text})
         }

      /*writeUserData = (userId, email, password, name, company_name) => {
            firebase.database().ref('users/' + userId).set({
               user_id: userId,
               email: email,
               password: password,
               name: name,
               company_name: company_name
            });
          }*/

          writeUserData = (email,fname,lname) => {
            console.log("mdeferzferferferferferfeef\n")
            let user = firebase.auth().currentUser
            let db = firebase.database()
            db.ref('/Users/' + user.uid).set({
                email,
                fname,
                lname
            }).then((data)=>{
                //success callback
                console.log('data ' , data)
                console.log("mdeferzferferferferferfeef\n")
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        }

         addUser = (email, name, company_name, password) => {
         var rootRef = firebase.database().ref();
         var storesRef = rootRef.child('Users/');
         var newStoreRef = storesRef.push();
         newStoreRef.set({
           email: email,
           name: name,
           company_name: company_name,
         });
         this.signUp(email, password, this.state.accountCreated)
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
            <ThemeProvider>
            <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "pink"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}
                 keyboardType = "email-address"
                 color = "pink"/>

            <TextInput style = {styles.input} 
                secureTextEntry = {true}
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "pink"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}
                 color = "pink"/>

            <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Your name"
                 placeholderTextColor = "pink"
                 autoCapitalize = "none"
                 onChangeText = {this.handleName}
                 keyboardType = "default"
                 color = "pink"/>

            <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Your company name"
                 placeholderTextColor = "pink"
                 autoCapitalize = "none"
                 onChangeText = {this.handleCompanyName}
                 keyboardType = "default"
                 color = "pink"/>

                 
            <Button style = {styles.submitButton}
            raised
               buttonStyle={{
               backgroundColor: "rgba(92, 99,216, 1)",
               padding: 1,
               margin: 15,
               height: 40,
               borderColor: "transparent",
               borderWidth: 0,
               borderRadius: 5
             }}
                title = "Register"
                onPress = { 
                    () => this.addUser(this.state.email, this.state.name, 
                                             this.state.company_name,
                                             this.state.password)
                }
                />
                </ThemeProvider>
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
