import React , {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header
        centerComponent = {{text:props.title,style:{color:'white',fontSize:26,fontWeight:'bold',}}}
        backgroundColor = '#0099ff'
        
        />
    )
}
export default MyHeader