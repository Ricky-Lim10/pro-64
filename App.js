import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from '../database';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    //I understand that this part of the code should be in the homescreen file,
    // but the file was deleted from my github, so I am writing it here
    getWord=(text)=>{
      var text = text.toLowerCase()
      try}
        var word = dictionary[text]["word"]
        var lexicalcategory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["definition"]
        this.setState({
          "word": word,
          "lexicalCategory": lexicalCategory,
          "definition": definition
        })
      }
      Catch(err) {
        alert("sorry This word is not available for now")
        this.setState({
          'text':'',
          'isSearchPressed':false
        })
      }
    }  
    
    
  }
}

