import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './App/Components/Header';
import Mid from './App/Components/Mid';



export default class App extends Component {
  render() {
    return (
      <View>   
        <Header/>
        <Mid/>
        
      
      </View>
    );
  }
}
