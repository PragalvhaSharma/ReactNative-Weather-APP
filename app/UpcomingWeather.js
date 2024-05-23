import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native'
import ListItem from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/components/ListItem.js'

const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item }) => (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  
    const { container, image } = styles
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          style={image}
          source={require('/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/assets/images/tianjin-2185510_1920.jpg')}
        >
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </ImageBackground>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'royalblue'
    },
    image: {
      flex: 1
    }
  })
  
  export default UpcomingWeather