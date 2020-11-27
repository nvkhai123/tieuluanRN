import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcon from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import { createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
// import SignInScreen from './SignInScreen';

import { NavigationContainer } from '@react-navigation/native';


const Login =({navigation}) =>{
    
        return (
            <NavigationContainer>
            <View style={styles.Container}>
                <View style={styles.header}>
                    
                    <Animatable.Image style={styles.logo}
                        animation="bounceIn"
                        duraton="1500"
                        source={{
                            uri:
                              'https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict0003181137011.jpg',
                         }}
                        //  resizeMode="stretch"
                
                    />
                    <Text style={{fontSize:20}}>WellCome Kfood </Text>
                </View>
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={styles.titleFoter}>Stay connected with everyone !!!</Text>
                    <Text style={styles.titleFoter1}>Sign in with account</Text>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}>
                             <Text style={styles.textsignIn}>Get Started</Text>
                             <FontAwesome style={styles.icon}
                                    name="arrow-right"
                                    color="black"
                                    size={15}
                                
                               />
                       
                        </LinearGradient>

                    </TouchableOpacity>
           
                    </View>
                </Animatable.View>
                
            </View>
            </NavigationContainer>
        )
    }


const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#fff",
    },
    header:{
        backgroundColor:"#4dffff",
        flex:1.5,
      

        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        marginTop:20,
        backgroundColor:"#fff",
        flex:1.5,
        fontSize:200,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
        
    },
    logo:{
        width:150,
        height:150,
        borderRadius:250,
        borderRadius:250,
        paddingVertical:50,
        paddingHorizontal:30,
      
    },
    titleFoter:{
        fontSize:25,
        marginLeft:5,
        width:300,
    },
    titleFoter1:{
        marginTop:5,
        fontSize:17,
        marginLeft:5,
        width:300,
    },
    signIn:{
        color:"green",
        flexDirection:"row",
        marginTop:50,
        marginLeft:150,
        borderRadius:20,
        width:160,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        
    },
    textsignIn:{
        // marginLeft:20,
        fontSize:15,
        alignItems:"center",
        justifyContent:"center",
        
        
    },  
    icon:{
        marginLeft:15,
        marginTop:2,
    }
   

})

export default Login