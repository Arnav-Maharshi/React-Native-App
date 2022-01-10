import React, {useState}from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREASER= 10;

const SquareScreen = () =>{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    const setColor =(color, change) => {
        // color === 'red', 'green', 'blue'
        //change === +15, -15
        switch(color){
            case 'red':
                if(red + change>255||red+change<0){
                    return;
                }
                else{
                    setRed(red+change);
                }
                return;
            case 'green':
                if(green+ change>255||green+change<0){
                    return;
                }
                else{
                    setGreen(green+change);
                }
                return;
            case 'blue':
                if(blue+ change>255||blue+change<0){
                    return;
                }
                else{
                    setBlue(blue+change);
                }
                return;
        }
    }

    return <View>
        <ColorCounter 
        onIncrease={()=> setColor('red',COLOR_INCREASER)}
        onDecrease={()=>setColor('red',-1 * COLOR_INCREASER)}
        color='Red'
        />

        <ColorCounter 
        onIncrease={()=>setColor('blue',COLOR_INCREASER)}
        onDecrease={()=>setColor('blue',-1 * COLOR_INCREASER)}
        color='Blue'
        />

        <ColorCounter 
        onIncrease={()=>setColor('green',COLOR_INCREASER)}
        onDecrease={()=>setColor('green',-1 * COLOR_INCREASER)}
        color='Green'
        />


        <View style={{height:200, width:200, alignSelf: "center", margin:20, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        <Text style={{textAlign:"center", fontSize:20, marginBottom:20}}>Red-{red}, Green-{green}, Blue-{blue}</Text>

        

    </View>

};

const styles= StyleSheet.create({});

export default SquareScreen;