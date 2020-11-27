import React, { Component } from 'react'
import {  Text, View,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {{color:"red", fontSize:50}}>Home Screen</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Details') }>
        <Text>chi tiet </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function DetalScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detal Screen</Text>
      </View>
    );
  }
  function UserScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>user Screen</Text>
        <TouchableOpacity onPress= {()=> navigation.navigate('DetailsUser') }>
            <Text> go to UserDetails</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function UserDetalsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UserDetalScreen</Text>
        <TouchableOpacity>
            <Text> go to UserDetails</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const StackUser = createStackNavigator();
  const StackHome = createStackNavigator();
  function StackScreen (){
      return(
        <StackHome.Navigator initialRouteName="Home">
        <StackHome.Screen name="Home" component={HomeScreen} />
        <StackHome.Screen name="Details" component={DetalScreen} />
      </StackHome.Navigator>
      )
  }
  function StackUserScreen(){
      return(
        <StackUser.Navigator initialRouteName="Home">
        <StackUser.Screen name="User" component={UserScreen} />
        <StackUser.Screen name="DetailsUser" component={UserDetalsScreen} />
      </StackUser.Navigator>
      )
  }
const Tab = createBottomTabNavigator();
export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator >
        <Tab.Screen name="HomeStack" component={StackScreen} />
        <Tab.Screen name="UserStack" component={StackUserScreen} />
      </Tab.Navigator>
          </NavigationContainer>
        )
    }
}
