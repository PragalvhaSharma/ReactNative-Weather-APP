import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import * as Location from 'expo-location'

//Importing a component
import Tabs from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/components/Tabs.js'

//Importing objects u need curly braces 
import {NavigationContainer} from '@react-navigation/native'
import {useGetWeather} from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/hooks/useGetWeather.js';
import ErrorItem from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/ErrorItem.js'

//Component is a function that returns some JSX(Syntax we use to make our lives easier for reading purpose)
//Babel converts JSX into javascript

//Index here is the root component -- Entry point for the application
const Index = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer independent={true}r>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})


export default Index