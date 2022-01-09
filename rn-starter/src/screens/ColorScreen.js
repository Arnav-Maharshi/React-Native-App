import React, {useState} from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () =>{
    const [colors, setColors] = useState([]);
    return (
    <View>
        <Button title='Add Color' onPress={()=>{
            setColors([...colors, randomRgb()]); // we are creating a new array by adding [] in setColors function and the ...colors will coppy everything from colors array and place it in our new array and then add randomRgb() to the new array also.
        }}/>
        
        <FlatList
        //horizontal //allows horizntal scrolling.... shorthand form of writing:- horizontal={true}
        keyExtractor={item=> item} //keyExtractor will be called with every object in the array
        data={colors}
        renderItem={({item})=>{ //{item} is parameter of the function and refers to data i.e friends object
            return <View style={{height: 100, width:100, backgroundColor: item }}/>
        }}
        />
    </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({

});

export default ColorScreen;