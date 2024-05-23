import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { weatherType } from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/Utilities/weatherType.js'
import moment from 'moment'
/* 
    Goals: Show the user List, Data and Time, Icon and what the weather will be at that time.
    Flatlist, SectionList and Virtualized
        - FlatList has 2 required properties which is 
            -Data
                -Contains actual data
            -RenderItem
                -Contains info on how to render/display the data 
        
                * Note: Section list needs to be an array containing objects
            -KeyExtractor (for performance)
                - We need to provide a unique key to each element in the data.
                - If we are working with a really long list -- if an item is deleted, when rerendered everything will be rebuilt from scratch
                - By providing a key, this will not be necessary as the list can be recalculated and updated
                - Requirements -- Must be a string, each element must have unique ID, can use the keyExtractor prop
    Images
        -local or network image (using a URL)

    ImageBackground
        -we can add whatever children we want

    What are props?
    - Properties
    - Used to pass data from Parent to Child
        E.g House has 4 room component. Adding room owner name for each component would be a prop
*/

//Weather Data

// Takes properties and displays weather information -- PASSTED 

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles
    return (
      <View style={item}>
        <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 5,
      backgroundColor: 'indianred'
    },
    temp: {
      color: 'white',
      fontSize: 20
    },
    date: {
      color: 'white',
      fontSize: 15
    },
    dateTextWrapper: {
      flexDirection: 'column'
    }
  })
  export default ListItem