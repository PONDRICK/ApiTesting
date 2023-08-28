import axios from "axios";
import React, { useState } from "react";
import { View,Text,StyleSheet,Button,TextInput} from "react-native";
const Weather =()=>{
    const[weather,setWeather] = useState("");
    const [city,setCity] = useState("");
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const API_KEY = "05be0947f9caf7d2caa49e2febc3bde5";
    const getWeather = async () =>{
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            );
            setWeather(response.data);
        } catch (error) {
            console.log("Error Fetching Weather Data",error);
        }
    };
    return(
        <View style ={styles.container}>
            <Text style ={styles.title}>Weather</Text>
            <TextInput placeholder="City Name ..." value={city} onChangeText={(newtext)=>setCity(newtext)} style={styles.input}/>
            <Button title="Weather" onPress={getWeather} color="#0d5673"/>
            {weather &&(
                <View style ={styles.infoContainer}>
                    <Text style={styles.info}>Temperature:{Math.round(weather.main.temp -273.15)}</Text>
                    <Text  style={styles.info}>Feel Like: {Math.round(weather.main.feels_like -273.1)}</Text>
                    <Text  style={styles.info}>Pressure: {weather.main.pressure} hPa</Text>
                    <Text  style={styles.info}>Sunrise: {weather.sys.sunrise} UTC</Text>
                    <Text  style={styles.info}>Cloud: {weather.clouds.all}%</Text>
                    <Text  style={styles.info}>Humidity: {weather.main.humidity}%</Text>
                    <Text  style={styles.info}>Humidity: {weather.main.sea_level} hPA</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"#59cd9",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:24,
        margin:10,
    },
    infoContainer:{
        backgroundColor:"#f2d399",
        margin:15,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#0d4c73",
    },
    info:{
        fontSize:18,
    },
    input:{
        margin: 5,
        paddingVertical:5,
        paddingHorizontal:5,
        borderWidth:1,
        borderRadius:1,
        borderColor:"#666",
        backgroundColor:"#fff"
    }
});
export default Weather;