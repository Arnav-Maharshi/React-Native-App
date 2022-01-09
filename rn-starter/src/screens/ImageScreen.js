import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail'; //Imported child into the Parent

const ImageScreen = () => { 
    return <View> 
        <ImageDetail 
        title="Forest" 
        imgSource={require('../../assets/forest.jpg')}
        score={9}
        />

        <ImageDetail 
        title="Beach" 
        imgSource={require('../../assets/beach.jpg')}
        score={7}
        />  

        <ImageDetail 
        title="Mountain" 
        imgSource={require('../../assets/mountain.jpg')} 
        score={4}
        />  

    </View>
    //We are displaying the ImageDetail file as a reusable component
    //The title prop line 7 is not a keyword meaning it can be of any name we want
};
const styleing = StyleSheet.create({

});

export default ImageScreen;