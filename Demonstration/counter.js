
//We ned to use useState becasue it causes the screen to re-render when the state changes. 
//useState is a function that creates a state variable with an initial value.
//The useState function returns an array with two elements: the current state and a function that updates the state.
import React, {useState, useEffect} from 'react'  
import {View, Text, Button, StyleSheet} from 'react-native'

const Counter = () => {
    //useState is a function that creates a state variable with an initial value of 0
    //const [count, setCount] = useState(0) uses array destructuring to create two constants: count (the current state) and setCount (a function to update the state).
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    //does something after a render
    //We can pass on an arry as an optional second argument to useEffect to specify the values that the effect depends on.
    useEffect(() => {
        console.log(`Count Changed`)

        //Cleanup function -- Executes before countChanged 
        return() =>{
            console.log('useEffect cleanup')
        }
    }, [count])
    //Only logs when the count changes. newCount has no effect -- SO the return function is called before countChanged. 

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{`count : ${count}`} </Text>
            <Button color={'red'} 
            title={'Increase the count'} 
            onPress={() => {
                setCount(count + 1) 
            }
            }/>
            <Button color={'green'} 
            title={'Decrease the count'} 
            onPress={() => {
                setCount(count - 1)}
            }/>
            <Button color={'red'} 
            title={'Increase the count'} 
            onPress={() => {
                setNewCount(newCount + 1) 
            }
            }/>
            <Button color={'green'} 
            title={'Decrease the count'} 
            onPress={() => {
                setNewCount(newCount - 1)}
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    container: {
        flex: 1,
        // //Vertical axis
        // justifyContent: 'center',
        // //Horizontal axis   
        // alignItems: 'center',
        backgroundColor: 'orange',
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 25

    }   
})

export default Counter

/* 
    When we want to use useState in the component
     - we can use a hook called useState
     - For the flooded room example, the state variable would be 
        - 



*/

