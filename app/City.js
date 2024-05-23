import React from 'react'
import {SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import IconText from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/components/IconText.js'
import moment from 'moment'
//Purpose -- mage Backgroudm, with city name, city country, population, sunrise and sunset

const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset } = weatherData
    const {
      container,
      cityName,
      cityText,
      countryName,
      imageLayout,
      populationWrapper,
      populationText,
      riseSetWrapper,
      riseSetText,
      rowLayout
    } = styles
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          source={require('/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/assets/images/tianjin-2185510_1920.jpg')}
          style={imageLayout}
        >
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'red'}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'white'}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              iconColor={'white'}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
      flex: 1
    },
    cityName: {
      fontSize: 40
    },
    countryName: {
      fontSize: 30
    },
    cityText: {
      justifyContent: 'center',
      alignSelf: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    populationWrapper: {
      justifyContent: 'center',
      marginTop: 30
    },
    populationText: {
      fontSize: 25,
      marginLeft: 7.5,
      color: 'red'
    },
    riseSetWrapper: {
      justifyContent: 'space-around',
      marginTop: 30
    },
    rowLayout: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    riseSetText: {
      fontSize: 20,
      color: 'white'
    }
  })
  
  export default City