import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState} style = {styles.confFirebase}>
            {props.myState} {props.openingApp}
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

export default PresentationalComponent
