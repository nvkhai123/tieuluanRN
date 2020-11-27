import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from './ProfileScreen'
import NotificationScreen from './NotificationScreen'
import Search from './Search'
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function Bottom() {
  return (
            <NavigationContainer>
                <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#8080ff' }}
        >
          {/* ... */}
      
        <Tab.Screen name='Home' component={HomeScreen}
            options={{ 
                tabBarLabel:'Home',
                tabBarIcon:({color}) =><FontAwesome name='home' size={25}  color={color}/>,
            }} />
           < Tab.Screen name='Search' component={Search}
            options={{
                tabBarLabel:'Search',
                tabBarIcon:({color}) =><FontAwesome name='search' size={25}  color={color}/>,
            }} />
             <Tab.Screen name='notifications' component={NotificationScreen}
            options={{ 
                tabBarLabel:'Notifications',
                tabBarIcon:({color}) =><FontAwesome name='bell-o' size={25}  color={color}/>,
            }} />
         <Tab.Screen name='Profile' component={ProfileScreen}
            options={{ 
                tabBarLabel:'user',
                tabBarIcon:({color}) =><FontAwesome name='user' size={25}  color={color}/>,
            }} />
       
            
      </Tab.Navigator>
    </NavigationContainer>
  );
}
