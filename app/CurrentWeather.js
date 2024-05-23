// //These are the core compoments from react that we import
// import { Text, View } from "react-native";

// export default function Index() {
//   const textMesssage = "Hello Prag"
//   return (
//     <View style = {{height: 100, width:100, backgroundColor:'orange'}}>
//       <Text>{textMesssage}</Text>
//     </View >
//   );
// }
import React from 'react'
//Importing components from React Native
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/components/RowText.js'
import {weatherType} from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/Utilities/weatherType.js'

//Creating my component--Compoenent always has to be exported to the root component 
const CurrentWeather = ({weatherData}) => {
  const{SageAreaViewWrapper, FirstViewContainer, temperature, feels, highLowTogether, highLow, bodyWrapper, description, message} = styles
  const{main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0].main
  return(
    //To ensure the UI does not overlap with the status bar/notch.
    //Its modified with the styles object
    <SafeAreaView style={[SageAreaViewWrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
          <View style={FirstViewContainer}>
            <Feather name= {weatherType[weatherCondition].icon} size={100} color="white" />
            <Text style={temperature}>{temp}</Text> 
            <Text style={feels}>{feels_like} 5</Text> 
            {/* <View style={styles.highLowTogether}>
              <Text style={styles.highLow}>High: 8</Text>
              <Text style={styles.highLow}>Low: 6</Text>
            </View> */}
            <RowText messageOne={`High: ${temp_max}° ` } messageTwo={`Low: ${temp_min}° `} viewStyle={highLowTogether} messageOneStyles={highLow} messageTwoStyles={highLow}/>

          </View>
          {/* Not included in the yellow area */}
          {/* <View style={styles.bodyWrapper}>
              <Text style = {styles.description}>Its sunny</Text>
              <Text style = {styles.message}>Its perfect t-shirt weather</Text>
          </View> */}
          <RowText 
            messageOne={weather[0].description} 
            messageTwo={weatherType[weatherCondition].message} 
            viewStyle={bodyWrapper} 
            messageOneStyles={description} 
            messageTwoStyles={message}/>
    </SafeAreaView>
  )
}

//Styles object -- CSS for mobile app
const styles= StyleSheet.create({
  //Setting SafeAreaView to fill
  SageAreaViewWrapper:{
    flex:1,
    backgroundColor: 'yellow',
  },
  //Applied to the View component
  FirstViewContainer: {
    //flex box is for different screensizes --- How much of the screen the user shold fill (1 means to view the entire screen)
    flex: 1,
    //Moves them to center of the row
    alignItems: 'center',
    //Moves to the center of the phone
    justifyContent: 'center',
  },
  temperature:{
    color: 'black',
    fontSize: 48,
  },
  feels:{
    fontSize: 30, 
    color: 'black',
  },
  highLow:{
    color: 'black',
    fontSize: 20, 
  },
  //Same row
  highLowTogether:{
    flexDirection: 'row',
  },
  bodyWrapper:{
    //Moves the content ot the bottom of the container
    justifyContent: 'flex-end',
    //Moves the content to teh left side of the container
    alignItems: 'flex-start',

    //Adds space to the left and bottom of the text (space area)
    paddingLeft: 25, 
    marginBottom: 40,

  },
  description: {
    fontSize: 40
  },
  message:{
    fontSize:30
  },
})
export default CurrentWeather;