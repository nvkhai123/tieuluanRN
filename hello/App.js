import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function App()   {
    return (
        <View style={style.container}>
          <Text> open up app </Text>
        </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:"red",
      alignItem:"center",
      justifyContent:"center"

  }
});
