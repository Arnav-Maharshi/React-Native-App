import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen =()=>{
    const [name, setName] =useState('');

    return <View>
        <Text style={{fontSize:30, paddingLeft:13}}>Enter Name:</Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>setName(newValue)}//the new value argument is whatever the user types in the TextInput
        />

        <Text style={{fontSize:20, textAlign:'center'}}>Your name is <Text style={{color:'teal', fontWeight:'bold'}}>{name}</Text></Text>
    </View>
}

const styles= StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;