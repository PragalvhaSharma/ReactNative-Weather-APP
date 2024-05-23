import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'


//Solves us repeating code where population and feather item are used together
const iconText = (props) =>{
    const{iconName, iconSize, iconColor, bodyText, bodyTextStyles} = props
    return(
        <View style={styles.container}>
            <Feather name={iconName} size={iconSize} color={iconColor}/>
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    },
    container:{
        alignItems: 'center'
    }
})

export default iconText;