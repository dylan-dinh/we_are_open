import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import PresentationalComponent from './PresentationalComponent'
import InitFirebase from './Firebase/firebaseInit.js'

export default class App extends React.Component {
   state = {
      myState: 'initial commit '
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View styles = {styles.container}>
            <InitFirebase myState = {this.state.myState} updateState = {this.updateState} />
         </View>
      );
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
 