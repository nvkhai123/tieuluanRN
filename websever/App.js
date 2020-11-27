import React, { Component } from 'react'
import { Text, View, StyleSheet , TextInput, TouchableOpacity,clickPlus} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      so1:"",
      so2:"",
      result:"...",
      

    }
  }
  clickPlus(){
    fetch("http://192.168.1.1:81/websever/tinhtong.php",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "numberOne":this.state.so1,
        "numberTwo": this.state.so2,
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log("++++");
      console.log(responseJson);
    this.setState({result:responseJson.kq})})
    .catch((error)=>{console.log(error)});
    

  }
  render() {
    return (
      <View style ={styles.wrapper}>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(so1) => this.setState({so1})}
      value={this.state.so1}
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(so2) => this.setState({so2})}
      value={this.state.so2}
    />
    <TouchableOpacity style={styles.plus} onPress={()=>{this.clickPlus}}> 
      <Text style={styles.plusText}>cong</Text>
    </TouchableOpacity>
    <View style={styles.result}>
    <Text>{this.state.result}</Text>

    </View>
    </View>
    );
  }
  
}

var styles = StyleSheet.create({
  wrapper:{flex:1,backgroundColor:"yellow"},
  plus:{padding:30, backgroundColor:"red",justifyContent:"center"},
  plusText:{color:"white"},
  result:{padding:30, backgroundColor:"white",justifyContent:"center"},
});
