import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
//var age1 = 100; //Just trying to see if i could add a variable into array objects
const ListScreen=() =>{
    const friends = [
        {name: "Friend #1", age: 20},
        {name: "Friend #2", age: 45},
        {name: "Friend #3", age: 32},
        {name: "Friend #4", age: 27},
        {name: "Friend #5", age: 53},
        {name: "Friend #6", age: 48},
        {name: "Friend #7", age: 25},
    ];
    return (
        <FlatList
        //horizontal //allows horizntal scrolling.... shorthand form of writing:- horizontal={true}
        showsVerticalScrollIndicator={false} //Hides Scroll Bar (Change vertical to horizontal in syntax when Horizontal scrolling is available)
        keyExtractor={friend=> friend.name}
        keyExtractor={friendAge=> friendAge.age} //keyExtractor will be called with every object in the array
        data={friends}
        renderItem={({item})=>{ //{item} is parameter of the function and refers to data i.e friends object
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>; //calling all the "name" items inside the parameter "item"
        }}
        />
    );// parenthesis given for multiline return statements
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen