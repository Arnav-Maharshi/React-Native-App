import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = ({imgSource, title, score}) => { //we are destructing the props object and only using the required properties in the object.
    return <View>
        <Image source={imgSource}/>
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
    </View>
};

const styleing = StyleSheet.create({

});

export default ImageDetail;