import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen =()=>{
    const [name, setName] =useState('');

    return <View>
        <Text style={{fontSize:30, paddingLeft:13}}>Enter Password:</Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>setName(newValue)}//the new value argument is whatever the user types in the TextInput
        />

        {name.length >= 5 ? null : <Text style={{textAlign:'center', color:'red', fontWeight:'bold'}}>Password must be more than 5 letters</Text>}
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