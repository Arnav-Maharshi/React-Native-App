import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable} from 'react-native';

const HomeScreen = ({navigation}) => { //We are pulling off only the navigation property from props object, helps shorten our code by not writing the props object whenever using it.
  return (
    <View>
      <Text style={styles.text}>Hello there!</Text>
      <Button //Button is a self-closing tag meaning you don't have to type the syntx like Text tag
        onPress={() => navigation.navigate('Components')} //onPress is prop(Property) of button tag
        title="Go to Components Demo" //Strings do not require curly braces
      />

      <Button 
        onPress={() => navigation.navigate('List')} 
        title="Go to List Demo" 
      />

      <Button 
        onPress={() => navigation.navigate('Image')} 
        title="Go to Image Demo" 
      />

      <Button 
        onPress={() => navigation.navigate('Counter')} 
        title="Go to Counter Demo" 
      />

      <Button 
        onPress={() => navigation.navigate('Color')} 
        title="Go to Counter Demo" 
      />

      <Button 
        onPress={() => navigation.navigate('Square')} 
        title="Go to Square Demo" 
      />
      
    </View>
    //Touchable Opacity is not a self-closing tag like Button
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;