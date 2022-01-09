import { createPermissionHook } from 'expo-modules-core';
import React, {useState} from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';

const CounterScreen= ()=>{
    const[counter, setCounter] = useState(0) //we are defining starting value of our counter as 0 in the useState Function

    return <View>
        <Button title='Increase' onPress={()=>{
            // Don't do this
            //counter++;
            setCounter(counter+1); //After a very brief pause, React automatically rerenders or reruns the CounterScreen 
            // React knows the CounterScreen already ran one! The state variable 'counter' is not initialized again.
        }}/>
        <Button title='Decrease' onPress={()=>{
            // Don't do this
            //counter--;
            setCounter(counter-1);
        }}/>
        <Text style={{fontSize: 30, paddingTop:40, textAlign: 'center'}}>Current Count: {counter}</Text>
    </View>
};

const syles= StyleSheet.create({

});

export default CounterScreen;