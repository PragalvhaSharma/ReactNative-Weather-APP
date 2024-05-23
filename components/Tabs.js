import React from 'react'
import CurrentWeather from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/app/CurrentWeather.js'
import UpcomingWeather from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/app/UpcomingWeather.js'
import City from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/WeatherAPP/app/City.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {   
    return (
      <Tab.Navigator 
        screenOptions = {
          {tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'lightblue',
          },
          headerStyle: { 
            backgroundColor: 'lightblue',
          },
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
          },
        }}
      >
        {/* Adding component names and screens  */}
        <Tab.Screen 
          name="CurrentWeather" 
          options={{
          //Adding icons to the tab
          tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>
          }}
        >
          {() => <CurrentWeather weatherData = {weather.list[0] } />}
        </Tab.Screen>
        <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
    )
}

export default Tabs