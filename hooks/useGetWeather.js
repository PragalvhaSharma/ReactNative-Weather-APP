
import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'  


//Custom hook to get the weather data
export const useGetWeather =  () => {
    //state variables and function -- Purpose to rerender these variables when they change 
    const [loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    //Initial values are empty arrays
    const[weather, setWeather] = useState([])
    const[lat, setLat] = useState([])
    const[lon, setLon] = useState([])

    //Async function is required becasue the fetch function is asynchronous (immediately returns a promise)
    const fetchWeatherData = async () => {
        try{
          //Fetch data from the API
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await res.json()
          setWeather(data)
        }catch(error){
          setError(`Could not fetch weather data`)
        }finally{
          //Either we have the location or we have an error
          setLoading(false)
        }
      }
    
      //Executed when the index component is created as [] is empty -- not dependedent on state variables
      useEffect(() => {
        //An asynchronous function is a function that is designed to perform a task in the background without blocking the rest of your code execution.
        (async () => {
            //Extracts the status property -- and gets the location staus based off if the user gives permission or not 
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }else{
              //If permission is granted then get the current location of the user
              let location = await Location.getCurrentPositionAsync({});
              setLat(location.coords.latitude)
              console.log(location.coords.latitude)
              setLon(location.coords.longitude)
              console.log(location.coords.longitude)
              await fetchWeatherData()
            }
        })()
      }, [lat, lon]);

      return [loading, error, weather]
}
