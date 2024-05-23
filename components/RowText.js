import React from 'react'
import {View, Text} from 'react-native'

const RowText = (prop) => {
    const{messageOne, messageTwo, messageOneStyles, messageTwoStyles, viewStyle} = prop;
    return(
    <View style={viewStyle}>
        <Text style={messageOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text> 
    </View>
    )
}

export default RowText