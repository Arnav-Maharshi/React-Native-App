import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => { // ()=>{} Same as function(){}
    return <View>
        <Text style={styleing.textStyle}>This is my first app!</Text>
        <Text style={styleing.textStyle2}>My name is Arnav Maharshi</Text>
    </View>
};

const styleing = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;